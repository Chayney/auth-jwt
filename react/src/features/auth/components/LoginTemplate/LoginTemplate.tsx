import { Controller } from "react-hook-form";
import { useLoginTemplate } from "./useLoginTemplate"
import { InputFormSection } from "../../../../shared/components/ui/InputFormSection/InputFormSection";
import { CommonButton } from "../../../../shared/components/ui/CommonButton/CommonButton";
import styles from './style.module.css'

export const LoginTemplate = () => {
    const { 
        control,
        errors,
        handleLoginSubmit
    } = useLoginTemplate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleLoginSubmit}>
                <div className={styles.area}>
                    <Controller
                        name="email"
                        render={({ field }) => (
                            <InputFormSection
                                type="email"
                                placeholder="Email"
                                errorMessage={errors.email?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="password"
                        render={({ field }) => (
                            <InputFormSection
                                type="password"
                                placeholder="Password"
                                errorMessage={errors.password?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <CommonButton type="submit">Login</CommonButton>
                </div>
            </form>
        </div>
    )
}