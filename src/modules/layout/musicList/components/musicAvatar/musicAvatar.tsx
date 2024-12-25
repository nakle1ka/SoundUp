import Image from 'next/image';
import { FC, memo } from 'react';

type Props = {
    currentMusicData?: Music;
    className: string;
}

export const MusicAvatar: FC<Props> = memo(({ currentMusicData, className }) => {
    return (
        <Image
            src={currentMusicData?.avatar || ""}
            alt='playlist logo'
            width={1000}
            height={1000}
            className={className}
        />
    );
})