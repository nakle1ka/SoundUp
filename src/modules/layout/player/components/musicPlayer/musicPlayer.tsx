import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import { FC, useCallback, useEffect, useRef } from 'react';
import { useLayoutStore } from '@/stores/layoutStore';

import { CustomLoopButton } from '../customLoopButton/customLoopButton';
import { MixButton } from '../mixButton/MixButton';

import './musicPlayer.css';

type Props = {
    musicData: Music;
    playistLength: number;
    activeIndex: number;
}

export const MusicPlayer: FC<Props> = ({ musicData, playistLength, activeIndex }) => {
    const setActiveIndex = useLayoutStore(state => state.setActiveIndex);
    const volume: number  = useLayoutStore(state => state.volume);
    const isLooped: boolean = useLayoutStore(state => state.isLooped);

    const ref = useRef<AudioPlayer>(null);

    // Я сам в шоке какие костыли пришлось придумывать
    // Но это единственная "нормальная" библиотека, которую я нашёл
    // Если вы знаете получше, пожалуйта, подскажите :)

    useEffect(() => {
        if(ref.current) {
            if(ref.current.audio.current) {
                ref.current.audio.current.volume = volume;
            }
        }
    }, [volume])

    const handleClickNext = useCallback(() => {
        if (activeIndex < playistLength - 1) {
            setActiveIndex(1)
        } else {
            if(isLooped) setActiveIndex(-(playistLength - 1))
        }
    }, [activeIndex, playistLength])

    const handleClickPrev = useCallback(() => {
        if (activeIndex > 0) setActiveIndex(-1)
    }, [activeIndex, playistLength])

    return (
        <AudioPlayer
            src={musicData.musicAudioId}
            layout='stacked-reverse'
            className='layout__player-container'

            ref={ref}

            showSkipControls
            showFilledVolume

            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            onEnded={handleClickNext}

            customAdditionalControls={[<CustomLoopButton />]}
            customVolumeControls={[<MixButton />]}
        />
    );
}