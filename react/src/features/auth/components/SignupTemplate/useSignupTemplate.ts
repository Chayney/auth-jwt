import { useSignupMutation } from "../../hooks/useSignupMutation"
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const schema = z.object({
    name: z
        .string()
        .min(1, '名前は必須です')
        .max(10, '10文字以内で入力して下さい'),
    email: z
        .string()
        .email('有効なメールアドレスを入力してください'),
    password: z
        .string()
        .min(8, '8文字以上でパスワードを入力してください'),
    password_confirmation: z
        .string()
        .min(8, "確認用パスワードを入力してください")
});

export const useSignupTemplate = () => {
    const { login } = useAuthContext();
    const registerMutation = useSignupMutation();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<z.infer<typeof schema>>({
        // zodのカスタムバリデーション有効化
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    })

    const handleRegisterSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                if (values.password !== values.password_confirmation) {
                    setError('password', {
                        type: 'manual',
                        message: '確認用パスワードと一致しません'
                    });
                    return;
                }
                const { name, email, password } = values;
                try {
                    const data = await registerMutation.mutateAsync({
                        name,
                        email,
                        password,
                        password_confirmation: values.password_confirmation
                    });
                    login(data.user, data.token);
                } catch (error) {
                    setError('name', {
                        type: 'manual',
                        message:
                            (
                                error as unknown as {
                                    response?: { data?: { message?: string } };
                                }
                            ).response?.data?.message || '登録に失敗しました。'
                    });
                }
            }, [login, setError, registerMutation]
        ) 
    )

    return {
        control,
        errors,
        handleRegisterSubmit,
        isLoading: registerMutation.isPending,
    }
}