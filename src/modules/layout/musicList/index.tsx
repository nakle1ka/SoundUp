'use client'

import { useLayoutStore } from '@/stores/layoutStore';
import { MusicListHeader } from './components/musicListHeader/musicListHeader';
import { FC } from 'react';
import styles from './styles/musicList.module.scss';
import { MusicAvatar } from './components/musicAvatar/musicAvatar';

type Props = {

}

export const MusicList: FC<Props> = ({ }) => {
    const {
        isMusicListOpened: isOpened,
        currentPlayList: playlist,
        activeIndex
    } = useLayoutStore(state => state);

    const currentMusicData = playlist[activeIndex];
    return (
        <div className={`${styles.container} ${isOpened ? styles.opened : styles.closed}`} >
            <MusicListHeader
                title={currentMusicData.name}
            />
            <div className={styles.content}>
                <MusicAvatar
                    className={styles.img}
                    currentMusicData={currentMusicData}
                />

                <span className={styles.name}>{currentMusicData.name}</span>
                <span className={styles.author}>{currentMusicData.authors.join(", ")}</span>

            </div>
        </div>
    );
}