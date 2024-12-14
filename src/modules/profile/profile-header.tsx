"use client";

import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRequest } from "@/hooks/useRequest";
import { getUser } from "@/services/user-service";
import { getUserPlaylists } from "@/services/playlist-service";

interface Props {
    className?: string;
}

const defaultSize = 350;

export const ProfileHeader: FC<Props> = ({ className }) => {
    const userReq = useRequest<User>("user", getUser);
    const playlistsReq = useRequest<Playlist[]>("playlists", getUserPlaylists);

    const openPlaylistCount = playlistsReq.data?.length;
    const user = userReq.data;

    if (userReq.error) return <div>Error: {userReq.error}</div>;

    return (
        <div
            className={cn(
                "flex flex-col items-left bg-black/5 sm:flex-row md:gap-10 sm:items-end px-4 lg:px-8 pb-8 pt-28 gap-6",
                className
            )}
        >
            <div>
                <Image
                    className="rounded-full"
                    width={defaultSize}
                    height={defaultSize}
                    src={"/assets/logo.jpg"}
                    alt={"Avatar"}
                />
            </div>

            <div className="flex flex-col md:gap-6 text-white gap-3">
                <span className="text-white font-semibold lg:text-xl md:text-lg">
                    Профиль
                </span>
                <h1 className="font-bold text-white mg:text-9xl lg:text-7xl text-6xl">
                    {user ? user.name : "User"}
                </h1>
                <div className={cn("flex gap-1 flex-wrap items-center")}>
                    <span className="text-gray-200 w-auto lg:text-sm md:text-base">
                        {openPlaylistCount ?? 0} открытых плейлистов
                    </span>
                </div>
            </div>
        </div>
    );
};
