import { BrowserRouter } from "react-router-dom"
import { TodoRouter } from "../../features/todo/router/Router"

export const Router = () => {
    return (
        <BrowserRouter>
            <TodoRouter />
        </BrowserRouter>
    )
}