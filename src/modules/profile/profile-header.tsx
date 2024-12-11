"use client";

import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import apiClient from "@/axios";
import { useRequest } from "@/hooks/useRequest";

const avatarSize = 350;

type profileHeaderProps = { className: string };

const getUser = async (): Promise<User | null> => {
    try {
        const userRes = await apiClient.get<User>(
            "http://83.222.24.157/api/GetRequestsUsers/GetUser"
        );
        const playlistsRes = await apiClient.get<Playlist[]>(
            "http://83.222.24.157/api/GetRequestsPlaylist/GetUserPlaylists"
        );
        const user = userRes.data;
        const playlists = playlistsRes.data;

        return user;
    } catch (e) {
        console.error("Error fetching data:", e);
        return null;
    }
};

const getUserPlaylists = async () => {
    try {
        const playlistsRes = await apiClient.get<Playlist[]>(
            "http://83.222.24.157/api/GetRequestsPlaylist/GetUserPlaylists"
        );
        const playlists = playlistsRes.data;

        return playlists;
    } catch (e) {
        console.error("Error fetching data:", e);
        return null;
    }
};

export const ProfileHeader: FC<profileHeaderProps> = ({ className }) => {
    const userReq = useRequest<User>("user", getUser);
    const playlistsReq = useRequest<Playlist[]>("playlists", getUserPlaylists);
    const openPlaylistCount = playlistsReq.data?.length;
    const user = userReq.data;

    if (userReq.loading) return <div>Loading...</div>;
    if (userReq.error) return <div>Error: {userReq.error}</div>;
    if (!user) return <div>No data</div>;

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
                    width={avatarSize}
                    height={avatarSize}
                    src={user.avatar}
                    alt="Avatar"
                />
            </div>

            <div className="flex flex-col md:gap-6 text-white gap-3">
                <span className="text-white font-semibold lg:text-xl md:text-lg">
                    Профиль
                </span>
                <h1 className="font-bold text-white mg:text-9xl lg:text-7xl text-6xl">
                    {user.name}
                </h1>
                <div className={cn("flex gap-1 flex-wrap items-center")}>
                    <span className="text-gray-200 w-auto lg:text-sm md:text-base">
                        {openPlaylistCount} открытых плейлистов
                    </span>
                </div>
            </div>
        </div>
    );
};
