import { BrowserRouter } from "react-router-dom"
import { TodoRouter } from "../features/todo/router/TodoRouter"
import { AuthRouter } from "../features/auth/router/AuthRouter"
import { AuthProvider } from "../features/auth/contexts/AuthContext"

export const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AuthRouter />
                <TodoRouter />
            </AuthProvider>
        </BrowserRouter>
    )
}