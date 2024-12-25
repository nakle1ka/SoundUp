import { FC, useEffect, useRef } from 'react';

import { Slider } from '@/components/ui/slider';
import { LoopButton } from '../customLoopButton/customLoopButton';
import { MixButton } from '../mixButton/MixButton';
import { CirclePause, CirclePlay, SkipBack, SkipForward } from 'lucide-react';

import { formatTime } from './utils';
import { TPlayerStore } from '@/stores/types/player';

import styles from "./styles/musicPlayer.module.scss"

type Props = {
    data: TPlayerStore
}

export const MusicPlayer: FC<Props> = ({ data }) => {
    const {
        isPaused,
        setIsPaused,
        isLooped,
        volume,
        sliderValue,
        setSliderValue,
        currentPlayList,
        activeIndex,
        setActiveIndex
    } = data;

    const currentTrack = currentPlayList[activeIndex];

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            isPaused ? audioRef.current.pause() : audioRef.current.play();
        }
    }, [isPaused]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const handleClickNext = () => {
        if (activeIndex < currentPlayList.length - 1) {
            setActiveIndex(activeIndex + 1)
            setSliderValue(0)
        }
        else if (activeIndex === currentPlayList.length - 1) {

            if (isLooped) {
                setActiveIndex(0)
                setSliderValue(0)
            }
        }
    }

    const handleClickPrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1)
    }

    const timeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setSliderValue(progress);
        }
    };

    const handleChangeTime = (value: number) => {
        if (audioRef.current) {
            const newTime = (value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className={styles.playerContainer}>

            {currentTrack &&
                <audio
                    ref={audioRef}
                    src={currentTrack.musicAudioId}
                    onEnded={handleClickNext}
                    autoPlay={isPaused ? false : true}
                    onTimeUpdate={timeUpdate}
                />
            }

            <div className={styles.topSide} >
                <LoopButton className={styles.controllButton} />

                <button className={styles.mainControllButton} onClick={handleClickPrev}>
                    <SkipBack />
                </button>

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

                <button className={styles.mainControllButton} onClick={handleClickNext}>
                    <SkipForward />
                </button>

                <MixButton className={styles.controllButton} />
            </div>


            <div className={styles.bottomSide} >
                <span className={styles.time}>
                    {audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}
                </span>
                <div className={styles.sliderWrapper}>
                    <Slider
                        value={[sliderValue]}
                        onValueChange={(val) => {
                            handleChangeTime(val[0])
                        }}
                        className={styles.slider}

                        onMouseUp={() => console.log(audioRef.current?.duration)}
                    />
                </div>
                <span className={styles.time + " " + styles.timeRight}>
                    {
                        audioRef.current && (
                            audioRef.current.duration
                                ? formatTime(audioRef.current.duration)
                                : '0:00'
                        )
                    }
                </span>
            </div>
        </div>
    );
}