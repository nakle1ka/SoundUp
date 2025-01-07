import { FC, useEffect, useState } from 'react';

import { LoopButton } from './components/customLoopButton/customLoopButton';
import { MixButton } from './components/mixButton/MixButton';
import { CirclePause, CirclePlay, SkipBack, SkipForward } from 'lucide-react';

import { formatTime } from './utils';
import { TPlayerStore } from '@/stores/types/player';

import { TrackSlider } from './components/trackSlider/trackSlider';
import { handleClickNext, handleClickPrev } from '../../utils/changeActiveIndex';

import { responsive } from '@/types/responsive';
import styles from "./styles/musicPlayer.module.scss"

type Props = {
    data: TPlayerStore;
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const MusicPlayer: FC<Props> = ({ data, audioRef }) => {
    const {
        isPaused,
        setIsPaused,
        sliderValue,
    } = data;

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= responsive.mobile);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const clickNext = () => {
        handleClickNext(data);
    }

    return (
        <div className={styles.playerContainer}>

            <div className={styles.topSide} >
                {!isMobile && <LoopButton className={styles.controllButton} />}

                {!isMobile && (
                    <button className={styles.mainControllButton + " " + styles.back} onClick={() => handleClickPrev(data)}>
                        <SkipBack />
                    </button>
                )}

                <button
                    className={styles.mainControllButton}
                    onClick={() => {
                        setIsPaused(!isPaused);
                    }}
                >
                    {
                        isPaused
                            ? <CirclePlay className={styles.playPauseIco} />
                            : <CirclePause className={styles.playPauseIco} />
                    }
                </button>

                <button className={styles.mainControllButton} onClick={clickNext}>
                    <SkipForward />
                </button>

                {!isMobile && <MixButton className={styles.controllButton} />}
            </div>


            <div className={styles.bottomSide} >
                <span className={styles.time}>
                    {audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}
                </span>

                <TrackSlider
                    audioRef={audioRef}
                    sliderValue={sliderValue}
                />

                {
                    !isMobile && (
                        <span className={styles.time + " " + styles.timeRight}>
                            {
                                audioRef.current && (
                                    audioRef.current.duration
                                        ? formatTime(audioRef.current.duration)
                                        : '0:00'
                                )
                            }
                        </span>
                    )
                }

            </div>
        </div>
    );
}