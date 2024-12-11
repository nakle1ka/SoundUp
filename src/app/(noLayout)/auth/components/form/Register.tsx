import axios from "axios";
import { FC, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Indicator } from "../indicator/indicator";
import { SubmitBtn } from "../submitBtn/submitBtn";
import { useRouter } from "next/navigation";

import routes from "@/types/routes";
import styles from "./../../auth.module.scss";

type TData = {
    userName: string;
    password: string;
    confirmPass: String;
    userType: string;
};

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
        try {
            const res = await axios.post(routes.REGISTER, data);
            res.statusText == "OK" && router.push("/");
        } catch (err) {
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
                    {errors.userName && <Indicator />}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>Пароль</legend>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        {...register("password", { required: "Не заполнено" })}
                    />
                    {errors.password && <Indicator />}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>
                        Подтвердите пароль
                    </legend>
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        {...register("confirmPass", {
                            required: "Не заполнено",
                            validate: (value) =>
                                value === getValues("password") ||
                                "Пароли не совпадают",
                        })}
                    />

                    {errors.confirmPass && <Indicator />}
                </fieldset>

                <fieldset className={styles.fieldsetInput}>
                    <legend className={styles.legendInput}>
                        Тип пользователя
                    </legend>
                    <Controller
                        name="userType"
                        control={control}
                        rules={{ required: "Не заполнено" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value || ""}
                            >
                                <SelectTrigger className="w-full px-1">
                                    <SelectValue placeholder="Выберите роль" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="User">
                                        Слушатель
                                    </SelectItem>
                                    <SelectItem value="UserAuthor">
                                        Исполнитель
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.userType && <Indicator />}
                </fieldset>

                <SubmitBtn />

                {serverError && (
                    <p className="text-[red] w-full text-center">
                        Пользователь не найден
                    </p>
                )}
            </form>
        </>
    );
};

export default Register;
