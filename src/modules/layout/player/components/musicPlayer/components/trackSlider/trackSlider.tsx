import { Slider } from '@/components/ui/slider';
import { FC } from 'react';

import styles from "./trackSlider.module.scss"

type color = "white" | "green"

type Props = {
    audioRef: React.RefObject<HTMLAudioElement>;
    sliderValue: number;
    color?: color;
}

export const TrackSlider: FC<Props> = ({ audioRef, sliderValue, color = "green" }) => {
    const handleChangeTime = (value: number) => {
        if (audioRef.current) {
            const newTime = (value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
        }
    };

    const currentSliderClass = color === "green" ? styles.green : styles.white;

    return (
        <div className={styles.sliderWrapper}>
            <Slider
                value={[sliderValue]}
                onValueChange={(val) => {
                    handleChangeTime(val[0])
                }}
                className={styles.slider + " " + currentSliderClass}
            />
        </div>
    );
}