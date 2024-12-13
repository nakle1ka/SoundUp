import axiosBaseUrl from '@/axios/baseUrl';
import { FC, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Indicator } from '../indicator/indicator';
import { SubmitBtn } from '../submitBtn/submitBtn';
import { useRouter } from 'next/navigation';

import routes from '@/types/routes';
import styles from './../../auth.module.scss';
import { setAccessToken, setRefreshToken, setUserId } from '@/utils/tokens';

type TData = {
    username: string,
    password: string,
    confirmPass: String,
    userType: string
}

const Register: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        getValues,
    } = useForm<TData>();

    const [serverError, setServerError] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit: SubmitHandler<TData> = async (data: TData) => {
        const { username: name, password, userType } = data;

        try {
            const res = (await axiosBaseUrl.post(routes.REGISTER, {
                name,
                password,
                userType,
            }));

            const { userId, jwtToken, refreshToken } = res.data;

            setAccessToken(jwtToken);
            setRefreshToken(refreshToken);
            setUserId(userId);

            router.push('/')
        }
        catch (err) {
            console.log(err);
            setServerError(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Логин</legend>
                    <input
                        type="text"
                        placeholder="Введите логин"
                        {...register('username', {
                            required: 'Не заполнено',
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 символа'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Максимум 20 символов'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: 'Только латинские буквы и цифры'
                            }
                        })}
                    />
                    {errors.username && (
                        <Indicator />
                    )}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Пароль</legend>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        {...register('password', {
                            required: 'Не заполнено',
                            pattern: {
                                value: /[0-9a-zA-Z!@#$%^&*]/g,
                                message: 'Только латинские буквы и цифры'
                            },
                        })}
                    />
                    {errors.password && (
                        <Indicator />
                    )}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Подтвердите пароль</legend>
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        {...register('confirmPass', {
                            required: 'Не заполнено',
                            validate: (value) =>
                                value === getValues('password') || 'Пароли не совпадают',
                        })}
                    />

                    {errors.confirmPass && (
                        <Indicator />
                    )}
                </fieldset>


                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Тип пользователя</legend>
                    <Controller
                        name="userType"
                        control={control}
                        rules={{ required: 'Не заполнено' }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value || ''}>
                                <SelectTrigger className="w-full px-1">
                                    <SelectValue placeholder="Выберите роль" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="DefaultUser">Слушатель</SelectItem>
                                    <SelectItem value="UserAuthor">Исполнитель</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.userType && (
                        <Indicator />
                    )}
                </fieldset>

                <SubmitBtn />

                {serverError && (
                    <p
                        className='text-[red] w-full text-center'
                    >Ошибка сервера</p>
                )}
            </form>
        </>
    );
};

export default Register;
