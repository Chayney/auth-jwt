import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { RegisterRequest } from "../types/auth";
import { register } from "../api/auth";

export const useSignupMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: RegisterRequest) => register(request),
        onSuccess: (data) => {
            queryClient.setQueryData(['auth'], data),
            queryClient.invalidateQueries({ queryKey: ['auth'] })
        }
    })
}