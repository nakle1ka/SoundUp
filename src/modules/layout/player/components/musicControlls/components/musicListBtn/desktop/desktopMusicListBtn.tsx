import { useLayoutStore } from '@/stores/layoutStore';
import { ListMusic } from 'lucide-react';
import { FC } from 'react';
import styles from './desktopusicListBtn.module.scss';

type Props = {

}

export const DesktopMusicListBtn: FC<Props> = ({ }) => {
    const isMusicListOpened = useLayoutStore(state => state.isMusicListOpened);
    const toggleIsMusicListOpened = useLayoutStore(state => state.toggleIsMusicListOpened);

    return (
        <button onClick={toggleIsMusicListOpened}>
            <ListMusic className={`${styles.icon} ${isMusicListOpened ? styles.active : ""}`} />
        </button>
    );
}