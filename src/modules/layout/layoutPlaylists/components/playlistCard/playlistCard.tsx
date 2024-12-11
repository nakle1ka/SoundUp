'use client'

import Image from 'next/image';
import { FC } from 'react';

import Link from 'next/link';
import styles from './playlistCard.module.scss';

type Props = {
    image: string;
    isAlbum: boolean;
    id: string;
}

export const PlaylistCard: FC<Props> = ({ image, isAlbum, id }) => {

    return (
        <Link
            href={isAlbum ? `/playlists/${id}` : `/albums/${id}`}
            className={styles.container}
        >
            <Image
                src={image}
                alt='playlist\nlogo'
                width={150}
                height={150}

                className={styles.image}
            />
        </Link>
    );
}