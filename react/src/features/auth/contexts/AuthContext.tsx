import { createContext, type FC, type ReactNode } from "react";
import type { UserType } from "../types/auth";
import { useAuth } from "../hooks/useAuth";
import { PuffLoader } from "react-spinners";

type AuthContextProps = {
    children: ReactNode
}

type AuthContextType = {
    user: UserType | null,
    isAuth: boolean,
    login: (user: UserType, token: string) => void,
    logout: () => void,
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuth: false,
    login: () => { },
    logout: () => { },
});

export { AuthContext };

export const AuthProvider: FC<AuthContextProps> = ({ children }) => {
    const { 
        user,
        isAuth,
        login,
        logout,
        isLoading
    } = useAuth();

    if (isLoading) {
        return <PuffLoader />
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}