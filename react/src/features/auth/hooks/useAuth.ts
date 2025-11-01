import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckAuthenticationQuery } from "./useCheckAuthenticationQuery";
import { useCallback, useEffect } from "react";
import { NAVIGATION_LIST } from "../../../shared/constants/navigation";
import type { UserType } from "../types/auth";

export const useAuth = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const queryClient = useQueryClient();
    const { data: authData, isLoading } = useCheckAuthenticationQuery();
    const user = authData?.user || null;
    const isAuth = !!authData?.user;

    // ログイン処理
    const login = useCallback(
        (user: UserType, token: string) => {
            // React Queryキャッシュに保存
            queryClient.setQueryData(['auth'], { user, token });

            // localStorageにトークンを保存
            localStorage.setItem('authToken', token);
            
            // ログイン後はトップページに遷移
            navigate(NAVIGATION_LIST.TOP);
        },
        [navigate, queryClient]
    );
    
    const logout = useCallback(
        () => {
            localStorage.removeItem("authToken");
            queryClient.removeQueries({ queryKey: ['auth'] });  
            navigate(NAVIGATION_LIST.LOGIN);
        },
        [navigate, queryClient]
    );
    
    const isExitBeforeAuthPage = useCallback(
        () =>
            pathname === NAVIGATION_LIST.SIGNUP || pathname === NAVIGATION_LIST.LOGIN,
        [pathname]
    );

    useEffect(() => {
        if (isLoading) return;
        
        // 未ログインでログイン後のページにいる場合、ログイン画面にリダイレクト
        if (!isAuth && !isExitBeforeAuthPage()) navigate(NAVIGATION_LIST.LOGIN);
        // ログイン済で未ログインのページにいる場合、Todo一覧ページにリダイレクト
        if (isAuth && isExitBeforeAuthPage()) navigate(NAVIGATION_LIST.TOP);
    }, [isAuth, isExitBeforeAuthPage, navigate, isLoading]);

    return {
        user,
        isAuth,
        isLoading,
        login,
        logout,
    };
};
