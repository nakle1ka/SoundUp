"use client";

import { FC, useState } from "react";

import HeaderForm from "./HeaderForm";
import Register from "./form/Register";
import Login from "./form/Login";

import { Button } from "@/components/ui/button";

import styles from "./auth.module.scss";

const FormBlock: FC = () => {
    const [isAccount, setIsAccount] = useState(false);

    const textFooter = isAccount ? "Нет аккаунта?" : "Уже есть аккаунт?";

    return (
        <div className={styles.formContainer}>
            <HeaderForm isAccount={isAccount} />
            <div className={styles.blockForm}>
                {isAccount ? <Login /> : <Register />}
            </div>
            <p className={styles.haveAccount}>
                {textFooter}
                <Button
                    onClick={() => setIsAccount(isAccount ? false : true)}
                    className={styles.linkToRegister}
                >
                    {isAccount ? "Регистрация" : "Логин"}
                </Button>
            </p>
        </div>
    );
};

export default FormBlock;
