import { Route, Routes } from "react-router-dom"
import { NAVIGATION_LIST } from "../../../shared/constants/navigation"
import { SignupPage } from "../../../pages/SignupPage"
import { LoginPage } from "../../../pages/LoginPage"

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path={NAVIGATION_LIST.SIGNUP} element={<SignupPage />} />
            <Route path={NAVIGATION_LIST.LOGIN} element={<LoginPage />} />
        </Routes>
    )
}