'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";

import { Indicator } from '../indicator/indicator';
import { SubmitBtn } from '../submitBtn/submitBtn';

import routes from '@/types/routes';
import styles from "./../../auth.module.scss"
import { useRouter } from 'next/navigation';
import axiosBaseUrl from '@/axios/baseUrl';
import { setAccessToken, setRefreshToken, setUserId } from '@/utils/tokens';

type TData = {
    userName: string,
    password: string,
}

const Login: FC = ({ }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TData>();

    const router = useRouter();

    const [serverError, setServerError] = useState<boolean>(false);

    const onSubmit: SubmitHandler<TData> = async (data: TData) => {
        try {
            const res = (await axiosBaseUrl.post(routes.LOGIN, data));
            const resData: {
                refreshToken: string,
                jwtToken: string,
                userId: string
            } = res.data;

            if (res.statusText === 'OK') {
                setAccessToken(resData.jwtToken);
                setRefreshToken(resData.refreshToken);
                setUserId(resData.userId);

                router.push('/')
            }
        }
        catch (err) {
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
                        {...register("userName", { required: "Не заполнено" })}
                    />
                    {errors.userName && (
                        <Indicator />
                    )}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Пароль</legend>

                    <input
                        type="password"
                        placeholder="Введите пароль"
                        {...register("password", { required: "Не заполнено" })}
                    />
                    {errors.password && (
                        <Indicator />
                    )}
                </fieldset>

                <SubmitBtn />

                {serverError && (
                    <p
                        className='text-[red] w-full text-center'
                    >Пользователь не найден</p>
                )}
            </form>
        </>
    );
}

export default Login