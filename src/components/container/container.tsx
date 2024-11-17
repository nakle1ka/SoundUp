import { FC, PropsWithChildren } from 'react';
import styles from './container.module.scss';

type Props = {
    id?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ children, id="" }) => {
    return (
        <div className={styles.container} id={id} >
            {children}
        </div>
    );
}