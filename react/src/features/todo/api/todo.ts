import { BASE_API_URL, defaultHeaders } from "../../../shared/api/api"
import type { Todo } from "../types/todo";

export const getTodos = async (): Promise<Todo[]> => {
    const token = localStorage.getItem("authToken");
    const res = await fetch(`${BASE_API_URL}/todos`, {
        method: 'GET',
        headers: {
            ...defaultHeaders,
            "Authorization": `Bearer ${token}`
        }
    });
    
    return res.json();
}