import { FC, useState } from 'react';
import { Check, CirclePlus } from 'lucide-react';
import styles from './musicName.module.scss';

type Props = {
    name: string;
    authors: string[];
}

export const MusicName: FC<Props> = ({ name, authors }) => {
    const [isFav, setIsFav] = useState<boolean>(false)

    return (
        <div className={styles.container} >
            <span className={styles.name}>{name}</span>
            <span className={styles.author}>{authors.join(", ")}</span>

            {!isFav && (
                <button className={styles.plus} onClick={() => setIsFav(true)}>
                    <CirclePlus
                        className={styles.plusIco}
                    />
                </button>
            )}

            {isFav && (
                <div className={styles.plus}>
                    <Check 
                        className={styles.checkIco}
                    />
                </div>
            )}
        </div>
    );
}