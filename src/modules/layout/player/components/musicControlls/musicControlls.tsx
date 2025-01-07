import { FC, useEffect, useState } from 'react';

import { FullScreenPlayer } from "@/modules/layout/fullScreenPlayer/fullScreenPlayer";
import { CustomVolume } from "./components/customVolume/customVolume";
import { DesktopMusicListBtn } from './components/musicListBtn/desktop/desktopMusicListBtn';
import { MobileMusicListBtn } from './components/musicListBtn/mobile/mobileMusicListBtn';
import { Maximize2 } from "lucide-react";

import { responsive } from "@/types/responsive";
import styles from './musicControlls.module.scss';

type Props = {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const MusicControlls: FC<Props> = ({ audioRef }) => {
    const [isFullScreenOpened, setIsFullScreenOpened] = useState<boolean>(false);
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

    return (
        <div className={styles.container}>
            {isMobile ? <MobileMusicListBtn /> : <DesktopMusicListBtn />}

            {!isMobile && <CustomVolume />}

            <button onClick={() => setIsFullScreenOpened(true)}>
                <Maximize2 className={styles.icon} />
            </button>

            <FullScreenPlayer
                isOpen={isFullScreenOpened}
                onClose={() => setIsFullScreenOpened(false)}
                audioRef={audioRef}
            />
        </div>
    );
}