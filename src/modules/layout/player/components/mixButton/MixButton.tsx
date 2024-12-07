import { FC } from 'react';
import { Shuffle } from 'lucide-react';
import styles from "./MixButton.module.scss"

type Props = {

}

export const MixButton: FC<Props> = ({ }) => {
    return (
        <button className={styles.button} >
            <Shuffle className={styles.ico} />
        </button>
    );
}