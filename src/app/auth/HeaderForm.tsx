import Image from 'next/image'
import { FC } from 'react'

import styles from "./auth.module.scss"

interface ChildProps {
    isAccount: boolean;
}

const HeaderForm: FC<ChildProps> = ({ isAccount }) => {
    const headerText = isAccount ? "Login" : "Sign up";

    return (
        <div className={styles.titleForm}>
            <Image
                src='/assets/logo.jpg'
                alt='Logo'
                width={100}
                height={100}
                className={styles.logo}
            />
            <h2 className={styles.titleText}>
                {headerText} to
                start listening
            </h2>
        </div>
    )
}

export default HeaderForm