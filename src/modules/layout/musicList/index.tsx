'use client'

import { FC } from 'react';

import { useLayoutStore } from '@/stores/layoutStore';
import { usePlayerStore } from '@/stores/playerStore';

import { MusicListHeader } from './components/musicListHeader/musicListHeader';
import { MusicAvatar } from './components/musicAvatar/musicAvatar';

import styles from './styles/musicList.module.scss';

export const MusicList: FC = () => {
    const isOpened = useLayoutStore(state => state.isMusicListOpened);

    const {
        currentPlayList: playlist,
        activeIndex
    } = usePlayerStore(state => state);

    const currentMusicData = playlist[activeIndex];

    return (
        <div className={`${styles.container} ${isOpened ? styles.opened : styles.closed}`} >
            <MusicListHeader
                title={currentMusicData?.name || ""}
            />
            <div className={styles.content}>
                <MusicAvatar
                    className={styles.img}
                    currentMusicData={currentMusicData}
                />

                <span className={styles.name}>{currentMusicData?.name || ""}</span>
                <span className={styles.author}>{currentMusicData?.authors.join(", ") || ""}</span>

            </div>
        </div>
    );
}