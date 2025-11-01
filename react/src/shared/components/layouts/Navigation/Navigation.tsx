import { useAuthContext } from "../../../../features/auth/hooks/useAuthContext"
import { NAVIGATION_LIST } from "../../../constants/navigation"
import { NavigationLink } from "../../ui/NavigationLink/NavigationLink"
import styles from './style.module.css'

export const Navigation = () => {
    const { logout } = useAuthContext();
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Todo List</h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <NavigationLink linkPath={NAVIGATION_LIST.TOP} label="TOP" />
                    <NavigationLink linkPath={NAVIGATION_LIST.TOP} label="CREATE" />
                    <li className={styles.li}>
                        <button className={styles.button} onClick={() => logout()}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}