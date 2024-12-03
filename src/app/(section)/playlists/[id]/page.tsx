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



const songs = [
    {
        id: '1' ,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'aaaaa',
        authors: 'bbbb',
        musicAudioId: '3:33',
    },
    {
        id: '2' ,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'aaaaa',
        authors: 'bbbb',
        musicAudioId: '3:33',
    },
]

const PlaylistsPage = () => {

    return(
        <div className="">
                <PlaylistsHeadr imageSrc="">Plailist</PlaylistsHeadr>
            <div className="p-5">
                <Table>
                    <TableHeader className="">
                        <TableRow>
                            <TableHead className="w-[100px]">#</TableHead>
                            <TableHead>title</TableHead>
                            <TableHead className="flex justify-end items-center"><Clock3/></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {songs.map((song, index) => (
                            <TableRow key={song.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell><div>{song.name}</div><div>{song.authors}</div></TableCell>
                                <TableCell className="text-right">{song.musicAudioId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default PlaylistsPage;                                                                                                                                    