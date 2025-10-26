import { Controller } from "react-hook-form";
import { BaseLayout } from "../../../../shared/components/layouts/BaseLayout/BaseLayout"
import { useTodoListTemplate } from "./useTodoListTemplate"
import { PuffLoader } from 'react-spinners';
import { InputFormSection } from "../../../../shared/components/ui/InputFormSection/InputFormSection";
import { TodoList } from "../TodoList/TodoList";
import styles from './style.module.css'

export const TodoListTemplate = () => {
    const { 
        control,
        showTodoList,
        isLoading
    } = useTodoListTemplate();

    if (isLoading) {
        return <PuffLoader />
    }

    return (
        <BaseLayout title="Todo List">
            <div className={styles.container}>
                <div className={styles.area}>
                    <Controller
                        name="keyword"
                        render={({ field }) => (
                            <InputFormSection placeholder="Search Keyword" {...field} />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    {showTodoList.length > 0 && (
                        <TodoList todoList={showTodoList}/>
                    )}
                </div>
            </div>
        </BaseLayout>
    )
}