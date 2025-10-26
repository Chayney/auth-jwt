import z from "zod";
import { useTodoListQuery } from "../../hooks/useTodoListQuery"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";

const schema = z.object({
    keyword: z.string()
});

export const useTodoListTemplate = () => {
    const { data: todoData, isLoading } = useTodoListQuery();

    const { control, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { keyword: '' }
    });

    const searchKeyword = watch('keyword');

    const showTodoList = useMemo(() => {
        if (!todoData) return [];
        return todoData.filter((todo) =>
            todo.title.toLowerCase().startsWith(searchKeyword.toLowerCase())
        );
    }, [todoData, searchKeyword]);

    return {
        control,
        showTodoList,
        isLoading
    }
}