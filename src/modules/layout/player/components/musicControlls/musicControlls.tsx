import { useLayoutStore } from "@/stores/layoutStore";
import { useMediaQuery } from "react-responsive";

import { FC } from 'react';

import { CustomVolume } from "../customVolume/customVolume";
import { ListMusic } from "lucide-react";

import styles from './musicControlls.module.scss';

export const MusicControlls: FC = () => {
    const isMusicListOpened = useLayoutStore(state => state.isMusicListOpened);
    const toggleIsMusicListOpened = useLayoutStore(state => state.toggleIsMusicListOpened);

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div className={styles.container}>
            <button onClick={toggleIsMusicListOpened}>
                <ListMusic className={`${styles.toggleMenu} ${isMusicListOpened ? styles.active : ""}`} />
            </button>

            {!isMobile && <CustomVolume />}
        </div>
    );
}