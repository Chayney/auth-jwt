import type { FC } from "react"
import type { Todo } from "../../types/todo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faPenSquare } from "@fortawesome/free-solid-svg-icons"
import styles from './style.module.css'

type TodoListProps = {
    todoList: Todo[]
}

export const TodoList: FC<TodoListProps> = (props) => {
    const { todoList } = props;

    return (
        <ul className={styles.list}>
            {todoList.map((todo) => (
                <li key={todo.id} className={styles.todo}>
                    <span className={styles.task}>{todo.title}</span>
                    <div className={styles.area}>
                        <div className={styles.far}>
                            <FontAwesomeIcon
                                icon={faFile}
                                size="lg"
                            />
                        </div>
                        <div className={styles.far}>
                            <FontAwesomeIcon
                                icon={faPenSquare}
                                size="lg"
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}