'use client'

import { FC, useEffect, useRef, useState } from 'react';
import apiClient from '@/axios';

import { getVisibleElements } from './utils/getVisibleElements';

import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { PlaylistCard } from './components/playlistCard/playlistCard';
import { Ellipsis } from 'lucide-react';

import { getUserId } from '@/utils/tokens';

import styles from './styles/layoutPlaylists.module.scss';

export const LayoutPlaylists: FC = () => {
    const [playlists, setPlaylists] = useState<(Playlist | Album)[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleElements, setVisibleElements] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);

                const userId = getUserId();
                const playlistsData: Playlist[] = (
                    await apiClient.get(
                        `/api/GetRequestsPlaylist/GetUserPlaylists?page=1&pageSize=30&userId=${userId}`
                    )
                ).data;

                setPlaylists(playlistsData);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        const visibleElementsCount = getVisibleElements(containerRef);
        setVisibleElements(visibleElementsCount);
    }, [visibleElements])

    return (
        <div className={styles.container} >
            <div className={styles.main} ref={containerRef}>
                {
                    isLoading && (
                        Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton
                                className={styles.skeleton}
                                key={i}
                            />
                        ))
                    )
                }

                {
                    !isLoading && (
                        playlists
                            .slice(0, visibleElements)
                            .map(el => (
                                <PlaylistCard
                                    image={el.avatar}
                                    isAlbum={!('authorId' in el)}
                                    id={el.id}
                                    key={el.id}
                                />
                            ))
                    )
                }
            </div>

            <Link href="/profile/collections" className={styles.more}>
                <Ellipsis
                    className={styles.ellipsis}
                />
            </Link>
        </div>
    );
}