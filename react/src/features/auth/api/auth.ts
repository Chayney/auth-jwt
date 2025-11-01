import { BASE_API_URL, defaultHeaders } from "../../../shared/api/api";
import type { AuthType, LoginRequest, RegisterRequest } from "../types/auth";

// 登録
export const register = async (
    request: RegisterRequest
): Promise<AuthType> => {
    const res = await fetch(`${BASE_API_URL}/register`, {
        method: "POST",
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(request),
    });

    if (!res.ok) throw new Error("Registration failed");
    const data: AuthType = await res.json();
    
    return data;
};

// ログイン
export const login = async (
    request: LoginRequest
): Promise<AuthType> => {
    const res = await fetch(`${BASE_API_URL}/login`, {
        method: "POST",
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(request),
    });

    if (!res.ok) throw new Error("Login failed");
    const data: AuthType = await res.json();

    // token を localStorage に保存
    localStorage.setItem("authToken", data.token);

    return data;
};

// 認証チェック
export const checkAuthentication = async (): Promise<AuthType | null> => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    const res = await fetch(`${BASE_API_URL}/authentication`, {
        method: "POST",
        headers: {
            ...defaultHeaders,
            
            // サーバーにトークンを送るために必須
            // 一方でNetworkタブで完全に可視化出来るためcookie方式が安全
            "Authorization": `Bearer ${token}`
        },
    });

    if (!res.ok) return null;
    const data: AuthType = await res.json();

    return data;
};
