import { usePlayerStore } from '@/stores/playerStore';
import { FC } from 'react';
import { RefreshCw, RefreshCwOff } from 'lucide-react';
import styles from "./CustomLoopButton.module.scss"

type Props = {
    className?: string;
}

export const LoopButton: FC<Props> = ({ className = "" }) => {
    const isLooped = usePlayerStore(state => state.isLooped)
    const toggleIsLooped = usePlayerStore(state => state.toggleIsLooped)

    return ( 
        <button onClick={toggleIsLooped} className={`${styles.btn} ${className}`}>
            {isLooped && (
                <RefreshCw />
            )}

            {!isLooped && (
                <RefreshCwOff />
            )}
        </button>
    );
}