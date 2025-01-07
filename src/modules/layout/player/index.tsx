'use client'

import { FC, useEffect, useRef, useState } from 'react';
import { usePlayerStore } from '@/stores/playerStore';
import apiClient from '@/axios';

import { Container } from '@/components/container/container';
import { MusicName } from './components/musicName/musicName';
import { MusicPlayer } from './components/musicPlayer/musicPlayer';
import { MusicControlls } from './components/musicControlls/musicControlls';

import { handleClickNext } from './utils/changeActiveIndex';

import routes from '@/types/routes';
import styles from "./styles/players.module.scss";


export const Player: FC = () => {
    const storeData = usePlayerStore(state => state);

    const [audioData, setAudioData] = useState<string>("");
    const audioRef = useRef<HTMLAudioElement>(null);

    const musicData = storeData.currentPlayList[storeData.activeIndex];

    useEffect(() => {
        if (audioRef.current) {
            storeData.isPaused ? audioRef.current.pause() : audioRef.current.play();
        }
    }, [storeData.isPaused]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = storeData.volume;
        }
    }, [storeData.volume]);

    useEffect(() => {
        const fetchAudioData = async() => {
            try {
                const res: {
                    music: Music;
                    musicAudio: string;
                } = (await apiClient.get(routes.GET_MUSIC + '?WithAudio=true', {
                    headers: {
                        'musicId': musicData.id,
                        'userId': musicData.authorId
                    }
                })).data;

                setAudioData(res.musicAudio);
                storeData.setIsFavourited(res.music.isFavourited);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchAudioData();
    }, [])


    const timeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            storeData.setSliderValue(progress);
        }
    };

    return (
        <Container id={styles.container}>
            {musicData &&
                <audio
                    ref={audioRef}
                    src={audioData}
                    autoPlay={storeData.isPaused ? false : true}
                    onEnded={() => handleClickNext(storeData)}
                    onTimeUpdate={timeUpdate}
                />
            }

            <img
                src={musicData?.avatar || ""}
                alt='avatar'
                loading="lazy"

                className={styles.img}
            />

            <MusicName
                name={musicData?.name || ""}
                authors={musicData?.authorsNames || ""}
            />

            <MusicPlayer
                data={storeData}
                audioRef={audioRef}
            />

            <MusicControlls 
                audioRef={audioRef}
            />

        </Container>
    );
}