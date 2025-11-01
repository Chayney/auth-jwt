import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { LoginRequest } from "../types/auth";
import { login } from "../api/auth";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: LoginRequest) => login(request),
        onSuccess: (data) => {
            queryClient.setQueryData(['auth'], data),
            queryClient.invalidateQueries({ queryKey: ['auth'] })
        }
    })
}