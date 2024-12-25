import { FC } from 'react';
import { Shuffle } from 'lucide-react';
import styles from "./MixButton.module.scss"

type Props = {
    className?: string;
}

export const MixButton: FC<Props> = ({ className = "" }) => {
    return (
        <button className={`${styles.button} ${className}`} >
            <Shuffle className={styles.ico} />
        </button>
    );
}