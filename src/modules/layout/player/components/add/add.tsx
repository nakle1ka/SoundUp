'use client'

import { FC } from 'react';
import { usePlayerStore } from '@/stores/playerStore';
import axiosBaseUrl from '@/axios/baseUrl';

import { Check, CirclePlus } from 'lucide-react';

import { getUserId } from '@/utils/tokens';
import routes from '@/types/routes';
import styles from './add.module.scss';

type Props = {
    color?: "white" | "green";
    className?: string;
}

export const Add: FC<Props> = ({ color = "green", className = "" }) => {
    const playerStore = usePlayerStore(state => state);

    const { isFavourited, setIsFavourited, currentPlayList, activeIndex } = playerStore;

    const musicData = currentPlayList[activeIndex];


    async function handleAddToFavourites(): Promise<void> {
        try {
            await axiosBaseUrl.put(routes.ADD_MUSIC_TO_FAVOURITES, {
                musicId: musicData.id,
                userId: getUserId()
            })
            setIsFavourited(true);
        }
        catch (err) {
            console.error(err)
        }
    }

    const colorClass = color == "white" ? styles.white : ""

    return (
        <>
            {!isFavourited && (
                <button className={styles.plus + " " + className} onClick={handleAddToFavourites}>
                    <CirclePlus
                        className={styles.plusIco + " " + colorClass}
                    />
                </button>
            )}

            {isFavourited && (
                <div className={styles.plus + " " + className}>
                    <Check
                        className={styles.checkIco + " " + colorClass}
                    />
                </div>
            )}
        </>
    );
}