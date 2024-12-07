"use client";

import { FC, useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import styles from "./styles/layoutPlaylists.module.scss";
import { useRouter } from "next/navigation";

type Props = {};

export const LayoutPlaylists: FC<Props> = () => {
    const router = useRouter();
    const [playlists, setPlaylists] = useState([] as Playlist[]);

    useEffect(() => {
        // async function fetchData() {
        //     try {
        //         apiClient
        //             .get('/api/GetRequestsPlaylist/GetUserPlaylists')
        //             .catch((e: Error) => {
        //                 e.message == 'unauthorized' && router.push('/auth');
        //             })
        //     }
        //     catch (e) {
        //         router.push('/auth')
        //     }
        // }
        // fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {!playlists.length &&
                Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton className={styles.skeleton} key={i} />
                ))}

            {playlists.length && playlists.map((el) => <div></div>)}
        </div>
    );
};
