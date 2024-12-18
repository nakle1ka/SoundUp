"use client";

import { ContentCardRow } from "@/components/content/content-card-row";
import { useRequest } from "@/hooks/useRequest";
import { cn } from "@/lib/utils";
import { getUserPlaylists } from "@/services/playlist-service";
import { FC } from "react";

interface Props {
    className?: string;
}

// const content: ContentCartType[] = [
//     {
//         imageUrl: "/assets/logo.jpg",
//         name: "Мой плелист №2",
//         description: "CatMario",
//         link: "#",
//     },
//     {
//         imageUrl: "/assets/logo.jpg",
//         name: "Мой плелист №1",
//         description: "CatMario",
//         link: "#",
//     },
// ];

// export type ContentCartType = {
//     imageUrl: string;
//     name: string;
//     description: string;
//     link: string;
// };

export const ProfilePlaylists: FC<Props> = ({ className }) => {
    const { data, isLoading, error } = useRequest<Playlist[]>(
        "playlists",
        getUserPlaylists
    );

    if (error) return <div>Error: {error}</div>;
    if (!isLoading && !data) return null;

    return (
        <div className={cn(className, "px-4 mt-12")}>
            <ContentCardRow
                isLoading={isLoading}
                name="Открытые плейлисты"
                content={data?.map((playlist) => ({
                    imageUrl: playlist.avatar,
                    name: playlist.name,
                    link: `/playlist/${playlist.id}`,
                }))}
            />
        </div>
    );
};
