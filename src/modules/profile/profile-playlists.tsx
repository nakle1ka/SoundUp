"use client";

import { ContentCardRow } from "@/components/content/content-card-row";
import { useRequest } from "@/hooks/useRequest";
import { cn } from "@/lib/utils";
import { getUserPlaylists } from "@/services/playlist-service";
import { FC } from "react";

interface Props {
    className?: string;
}

const content = [
    {
        imageUrl: "/assets/logo.jpg",
        name: "Lil Uzi Vert",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Travis Scott",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Kendrick Lamar",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "J. Cole",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Drake",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "The Weeknd",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "A$AP Rocky",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Tyler, The Creator",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Post Malone",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Billie Eilish",
        description: "Профиль",
        link: "#",
    },
];

export type ContentCartType = {
    imageUrl: string;
    name: string;
    description: string;
    link: string;
};

export const ProfilePlaylists: FC<Props> = ({ className }) => {
    const { data, isLoading, error } = useRequest<Playlist[]>(
        "playlists",
        getUserPlaylists
    );

    if (error) return <div>Error: {error}</div>;
    // if (!isLoading && !data) return null;

    return (
        <div className={cn(className, "px-4 mt-12")}>
            <ContentCardRow
                isLoading={isLoading}
                name="Открытые плейлисты"
                content={content}
            />
        </div>
    );
};

// data?.map((playlist) => ({
//     imageUrl: playlist.avatar,
//     name: playlist.name,
//     link: `/playlist/${playlist.id}`,
// }))
