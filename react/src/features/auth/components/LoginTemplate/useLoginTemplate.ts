import z from "zod";
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

const schema = z.object({
    email: z
        .string()
        .email('有効なメールアドレスを入力してください'),
    password: z
        .string()
        .min(8, '8文字以上でパスワードを入力してください')
})

export const useLoginTemplate = () => {
    const { login } = useAuthContext();
    const loginMutation = useLoginMutation();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { email: '', password: '' }
    });

    const handleLoginSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                try {
                    const data = await loginMutation.mutateAsync(values);
                    login(data.user, data.token);
                } catch (error) {
                    setError('email', {
                        type: 'manual',
                        message:
                            (
                                error as unknown as {
                                    response?: { data?: { message?: string } };
                                }
                            ).response?.data?.message || 'ログインに失敗しました。'
                    });
                }
            }, [login, setError, loginMutation]
        )
    )
    
    return {
        control,
        errors,
        handleLoginSubmit,
        isLoading: loginMutation.isPending
    }
}