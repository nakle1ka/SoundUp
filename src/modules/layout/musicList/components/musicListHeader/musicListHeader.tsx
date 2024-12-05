'use client'

import { useLayoutStore } from '@/stores/layoutStore';
import { X } from 'lucide-react';
import { FC, memo } from 'react';
import styles from './musicListHeader.module.scss';

type Props = {
    title: string;
}

export const MusicListHeader: FC<Props> = memo(({ title }) => {
    const toggleIsOpen = useLayoutStore(state => state.toggleIsMusicListOpened)

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>{title}</h3>

            <button onClick={toggleIsOpen}>
                <X className={styles.x}/>
            </button>
        </div>
    );
})