'use client'

import { FC } from 'react';
import { createPortal } from 'react-dom';
import { usePlayerStore } from '@/stores/playerStore';

import Image from 'next/image';
import {
    CustomVolume,
    handleClickNext,
    handleClickPrev,
    LoopButton,
    MixButton,
    TrackSlider,
    Add
} from '../player/exports';
import { CirclePause, CirclePlay, SkipBack, SkipForward, X } from 'lucide-react';

import styles from './styles/fullScreenPlayer.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const FullScreenPlayer: FC<Props> = ({ isOpen, onClose, audioRef }) => {

    const playerState = usePlayerStore(state => state)
    const musicData = playerState.currentPlayList[playerState.activeIndex]

    if (!isOpen) return null;

    const color = "rgb(94,89,45)"

    return createPortal(
        // TODO
        // Сделать определение цвета
        <div className={styles.bg} style={{
            backgroundColor: color
        }} >
            <div className={styles.content}>
                <button onClick={onClose} className={styles.closeButton}>
                    <X />
                </button>

                <div className={styles.top}>
                    <Image
                        src={musicData.avatar}
                        alt='avatar'
                        width={1000}
                        height={1000}
                        className={styles.avatar}
                    />

                    <div className={styles.general}>
                        <h3 className={styles.name}>{musicData.name}</h3>
                        <p className={styles.authors} >{musicData.authorsNames.join(", ")}</p>
                    </div>
                </div>


                <TrackSlider
                    audioRef={audioRef}
                    sliderValue={playerState.sliderValue}
                    color='white'
                />

                <div className={styles.controlls}>
                    <Add color='white' className={styles.add} />

                    <div className={styles.main}>
                        <LoopButton className={styles.loop} />

                        <button className={styles.prev} onClick={() => handleClickPrev(playerState)}>
                            <SkipBack />
                        </button>

                        <button className={styles.play} onClick={() => playerState.setIsPaused(!playerState.isPaused)}>
                            {playerState.isPaused ? <CirclePlay /> : <CirclePause />}
                        </button>

                        <button className={styles.next} onClick={() => handleClickNext(playerState)}>
                            <SkipForward />
                        </button>

                        <MixButton className={styles.mix} />
                    </div>

                    <CustomVolume iconColor='white' className={styles.volume} />
                </div>
            </div>
        </div>,
        document.querySelector('.app-root') || document.body
    );
}