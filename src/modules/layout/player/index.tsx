'use client'

import { useLayoutStore } from '@/stores/layoutStore';

import Image from 'next/image';
import { Container } from '@/components/container/container';
import { MusicName } from './components/musicName/musicName';
import { MusicPlayer } from './components/musicPlayer/musicPlayer';
import { MusicControlls } from './components/musicControlls/musicControlls';

import { FC } from 'react';
import styles from "./styles/players.module.scss"

type Props = {
    
}

export const Player: FC<Props> = ({  }) => {
    const playlist = useLayoutStore(state => state.currentPlayList);
    const activeIndex = useLayoutStore(state => state.activeIndex);

    const musicData = playlist[activeIndex];

    return (
        <Container id={styles.container}>
                <Image
                    src={musicData.avatar}
                    alt=''
                    width={100}
                    height={100}

                    className={styles.img}
                />

                <MusicName
                    name={musicData.name}
                    authors={musicData.authors}
                />

                <MusicPlayer
                    musicData={musicData}
                    activeIndex={activeIndex}
                    playistLength={playlist.length}
                />

                <MusicControlls />

        </Container>
    );
}