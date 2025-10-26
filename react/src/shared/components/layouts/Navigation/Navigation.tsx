import { NAVIGATION_LIST } from "../../../../features/todo/constants/navigation"
import { NavigationLink } from "../../ui/NavigationLink/NavigationLink"
import styles from './style.module.css'

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <NavigationLink linkPath={NAVIGATION_LIST.TOP} label="TOP" />
                <NavigationLink linkPath={NAVIGATION_LIST.TOP} label="CREATE" />
            </ul>
        </nav>
    )
}