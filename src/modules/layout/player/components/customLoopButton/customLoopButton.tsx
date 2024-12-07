import { useLayoutStore } from '@/stores/layoutStore';
import { RefreshCw, RefreshCwOff } from 'lucide-react';
import { FC } from 'react';
import styles from "./CustomLoopButton.module.scss"

type Props = {

}

export const CustomLoopButton: FC<Props> = ({  }) => {
    const isLooped = useLayoutStore(state => state.isLooped)
    const toggleIsLooped = useLayoutStore(state => state.toggleIsLooped)

    return ( 
        <button onClick={toggleIsLooped} className={styles.btn}>
            {isLooped && (
                <RefreshCw />
            )}

            {!isLooped && (
                <RefreshCwOff />
            )}
        </button>
    );
}