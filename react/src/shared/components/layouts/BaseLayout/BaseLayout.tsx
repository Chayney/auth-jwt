import type { FC, ReactNode } from "react"
import { Navigation } from "../Navigation/Navigation"
import styles from './style.module.css'

type BaseLayoutProps = {
    children: ReactNode
    title: string
}

export const BaseLayout: FC<BaseLayoutProps> = (props) => {
    const { children, title } = props;

    return (
        <div className={styles.container}>
            <Navigation />
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}