import { FC, useCallback, useEffect, useState } from 'react';
import { useLayoutStore } from '@/stores/layoutStore';

import { Slider } from '@/components/ui/slider';
import { Volume2, Volume1, VolumeX } from 'lucide-react';

import styles from './customVolume.module.scss';

type Props = {

}

export const CustomVolume: FC<Props> = ({ }) => {
    const volume = useLayoutStore(state => state.volume)
    const setVolume = useLayoutStore(state => state.setVolume)

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

    return (
        <div className={styles.volume}>
            <button onClick={() => setIsMuted(prev => !prev)}>
                {
                    (volume > 0.5)
                    && <Volume2 className={styles.volumeIco} />
                }
                {
                    (volume > 0 && volume <= 0.5)
                    && <Volume1 className={styles.volumeIco} />
                }
                {
                    (volume == 0)
                    && <VolumeX className={styles.volumeIco} />
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