'use client'
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Clock3 } from 'lucide-react';
import PlaylistsHeadr from "@/components/container/playlist/PlaylistHeadr";
import Link from "next/link";
import Image from "next/image";
import Player from "@/components/container/playlist/Player";
import OtherAlbums from "@/components/container/playlist/OtherAlbums";


    const songs = [
        {
            id: '1' ,
            avatar: 'c',
            name: 'aaaaa',
            authors: 'bbbb',
            musicAudioId: '3:33',
            albumName: 'sssss',
            createdAt: new Date("2024-01-01T10:00:00Z"),
        },
        {
            id: '2' ,
            avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
            name: 'aaaaa',
            authors: 'bbbb',
            musicAudioId: '3:33',
            albumName: 'sssss',
            createdAt: new Date("2024-01-01T10:00:00Z"),
        },
    ]

    
    const AlbumPage = () => {


    
        return (
            <div className="">
                <PlaylistsHeadr imageSrc="https://avatars.yandex.net/get-music-content/10103188/da7dc9b8.a.26575538-1/m1000x1000?webp=false">album</PlaylistsHeadr>
                <Player/>
                    <div className="p-5">
                        <Table>
                            <TableHeader className="rounded-md">
                                <TableRow className="rounded-[20px]">
                                    <TableHead className="w-[100px] ">#</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Album</TableHead>
                                    <TableHead>Date of addition</TableHead>
                                    <TableHead className="flex justify-end items-center "><Clock3/></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {songs.map((song, index) => (
                                    <TableRow key={song.id} className="rounded-md">
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div className="inline-block"><Image src={song.avatar} alt="sdf" width={50} height={50} className="rounded"></Image></div>
                                            <div className="inline-block ml-[10px] align-top">
                                                <div><Link href= '/' className="hover:underline">{song.name}</Link></div>
                                                <div><Link href = '/' className="hover:underline">{song.authors}</Link></div>
                                            </div>
                                        </TableCell>
                                        <TableCell><Link href = '/' className="hover:underline">{song.albumName}</Link></TableCell>
                                        <TableCell>{song.createdAt.toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">{song.musicAudioId}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                <div>
                    <OtherAlbums>name album</OtherAlbums>
                </div>
            </div>
        )
    };
    
    export default AlbumPage;