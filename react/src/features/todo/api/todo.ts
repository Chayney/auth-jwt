import { BASE_API_URL } from "../../../shared/api/api"
import type { Todo } from "../types/todo";

export const getTodos = async (): Promise<Todo[]> => {
    const res = await fetch(`${BASE_API_URL}/todos`);
    return res.json();
}