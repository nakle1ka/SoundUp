import { FC } from 'react';
import styles from './musicName.module.scss';
import { Add } from '../add/add';

type Props = {
    name: string;
    authors?: string[];
}

export const MusicName: FC<Props> = ({ name, authors }) => {
    

    return (
        <div className={styles.container} >
            <span className={styles.name}>{name || ""}</span>
            <span className={styles.author}>{authors && authors.join(", ") || ""}</span>

            <Add />
        </div>
    );
}