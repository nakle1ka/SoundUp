'use client'

import { FC, useEffect, useState } from 'react';

import apiClient from '@/axios';

import { Skeleton } from '@/components/ui/skeleton';

import styles from './styles/layoutPlaylists.module.scss';
import { useRouter } from 'next/navigation';

type Props = {

}

export const LayoutPlaylists: FC<Props> = () => {
    const [playlists, setPlaylists] = useState([] as Playlist[])

    useEffect(() => {
        async function fetchData() {
            try {
                const playlistsData: Playlist[] = await apiClient
                    .get('/api/GetRequestsPlaylist/GetUserPlaylists')

                setPlaylists(playlistsData)
            }
            catch (e) {
                console.error(e)
            }
        }

        fetchData();
    }, [])

    return (
        <div className={styles.container} >
            {
                !playlists.length && (
                    Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton
                            className={styles.skeleton}
                            key={i}
                        />
                    ))
                )
            }

            {
                playlists.length && (
                    playlists.map(el => (
                        <div>sdsad</div>
                    ))
                )
            }
        </div>
    );
}