import { FC } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';

import styles from "./../auth.module.scss"

const Register: FC = ({ }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const onSubmit: SubmitHandler<User> = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Логин</legend>
                    <input
                        type="text"
                        placeholder="username"
                        {...register("name", { required: "Не заполнено" })}
                    />
                </fieldset>
                {errors.name && (
                    <p className={styles.errMessage}>{String(errors.name.message)}</p>
                )}
                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Пароль</legend>

                    <input
                        type="password"
                        placeholder="password"
                        {...register("password", { required: "Не заполнено" })}
                    />
                </fieldset>
                {errors.password && (
                    <p className={styles.errMessage}>{String(errors.password.message)}</p>
                )}
                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Подтвердите пароль</legend>
                    <input
                        type="password"
                        placeholder="confirm password"
                        {...register("confirmPass", {
                            required: "Не заполнено",
                            validate: (value: any, { password }: any) =>
                                value === password || "Пароли не совпадают",
                        })}
                    />
                </fieldset>
                {errors.confirmPass && (
                    <p className={styles.errMessage}>
                        {String(errors.confirmPass.message)}
                    </p>
                )}

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>love music</legend>
                    <select
                        {...register("userType", { required: "Не заполнено" })}

                    >
                        <option value="User">Слушатель</option>
                        <option value="UserAuthor">Исполнитель</option>
                    </select>
                </fieldset>
                {errors.userType && (
                    <p className={styles.errMessage}>
                        {String(errors.userType.message)}
                    </p>
                )}

                <Button className={styles.formSubmit} type="submit">
                    Далее
                </Button>
            </form >
        </>
    );
}

export default Register