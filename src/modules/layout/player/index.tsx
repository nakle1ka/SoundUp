'use client'

import { usePlayerStore } from '@/stores/playerStore';

import Image from 'next/image';
import { Container } from '@/components/container/container';
import { MusicName } from './components/musicName/musicName';
import { MusicPlayer } from './components/musicPlayer/musicPlayer';
import { MusicControlls } from './components/musicControlls/musicControlls';

import { FC } from 'react';
import styles from "./styles/players.module.scss"


export const Player: FC = () => {
    const storeData =  usePlayerStore(state => state);

    const musicData = storeData.currentPlayList[storeData.activeIndex];

    return (
        <Container id={styles.container}>
            <Image
                src={musicData?.avatar || ""}
                alt='avatar'
                width={100}
                height={100}

                className={styles.img}
            />

            <MusicName
                name={musicData?.name || ""}
                authors={musicData?.authors || ""}
            />

            <MusicPlayer
                data={storeData}
            />

            <MusicControlls />

        </Container>
    );
}