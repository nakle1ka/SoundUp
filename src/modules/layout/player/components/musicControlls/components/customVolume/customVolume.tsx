import { FC, useCallback, useEffect, useState } from 'react';
import { usePlayerStore } from '@/stores/playerStore';

import { Slider } from '@/components/ui/slider';
import { Volume2, Volume1, VolumeX } from 'lucide-react';

import styles from './customVolume.module.scss';

type Props = {
    iconColor?: "white" | "default"
    className?: string;
}

export const CustomVolume: FC<Props> = ({ iconColor = "default", className = "" }) => {
    const volume = usePlayerStore(state => state.volume);
    const setVolume = usePlayerStore(state => state.setVolume);
    
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [temp, setTemp] = useState<number>(volume);

    useEffect(() => {
        if (isMuted) {
            setTemp(volume);
            setVolume(0);
        } else {
            setVolume(temp);
        }
    }, [isMuted])

    const handleChangeValue = useCallback((newValue: number[]) => {
        const num = newValue[0] / 100;
        if (num >= 0 && num <= 1) setVolume(num)
    }, [setVolume])

    let currentColor: string;
    iconColor == "white"
        ? currentColor = [styles.white, styles.volumeIco].join(" ")
        : currentColor = styles.volumeIco

    return (
        <div className={styles.volume + " " + className}>
            <button onClick={() => setIsMuted(prev => !prev)}>
                {
                    (volume > 0.5)
                    && <Volume2 className={currentColor} />
                }
                {
                    (volume > 0 && volume <= 0.5)
                    && <Volume1 className={currentColor} />
                }
                {
                    (volume == 0)
                    && <VolumeX className={currentColor} />
                }
            </button>

            <Slider
                max={100}
                value={[volume * 100]}
                onValueChange={handleChangeValue}
            />
        </div>
    );
}