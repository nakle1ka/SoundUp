import { useLayoutStore } from "@/stores/layoutStore";
import { FC } from 'react';

import { CustomVolume } from "../customVolume/customVolume";
import { ListMusic } from "lucide-react";

import styles from './musicControlls.module.scss';

type Props = {

}

export const MusicControlls: FC<Props> = ({ }) => {

    const isMusicListOpened = useLayoutStore(state => state.isMusicListOpened);
    const toggleIsMusicListOpened = useLayoutStore(state => state.toggleIsMusicListOpened);

    return (
        <div className={styles.container}>
            <button onClick={toggleIsMusicListOpened}>
                <ListMusic className={`${styles.toggleMenu} ${isMusicListOpened ? styles.active : ""}`} />
            </button>

            <CustomVolume />
        </div>
    );
}