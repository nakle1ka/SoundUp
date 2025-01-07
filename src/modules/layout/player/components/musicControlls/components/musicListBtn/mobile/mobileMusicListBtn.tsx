'use client'

import { FC } from 'react';
import Image from 'next/image';
import { usePlayerStore } from '@/stores/playerStore';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ListMusic } from 'lucide-react';

import styles from './mobileMobileMusicListBtn.module.scss'

export const MobileMusicListBtn: FC = () => {
    const playerStore = usePlayerStore(state => state);
    const musicData = playerStore.currentPlayList[playerStore.activeIndex];

    return (
        <Sheet>
            <SheetTrigger>
                <ListMusic
                    className={styles.ico}
                />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <Image 
                        src={musicData.avatar}
                        alt='avt'
                        width={1000}
                        height={1000}
                        className={styles.avt}
                    />
                    <span className={styles.name}>{musicData.name}</span>
                    <span className={styles.authors}>{musicData.authorsNames.join(", ")}</span>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}