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
        avatar: '',
        name: 'aaaaa',
        authors: 'bbbb',
        musicAudioId: '3:33',
    },
    {
        id: '2' ,
        avatar: '',
        name: 'aaaaa',
        authors: 'bbbb',
        musicAudioId: '3:33',
    },
]

const PlaylistsPage = () => {

    return(
        <div className="">
            <div>
                <PlaylistsHeadr imageSrc="https://avatars.yandex.net/get-music-content/33216/66f656c7.a.2043390-1/m1000x1000?webp=false">sddsds</PlaylistsHeadr>
            </div>
            <div>
                <Table>
                    <TableHeader className="">
                        <TableRow>
                            <TableHead className="w-[100px]">#</TableHead>
                            <TableHead>title</TableHead>
                            <TableHead className="flex justify-end items-center"><Clock3/></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {songs.map((song) => (
                            <TableRow key={song.id}>
                                <TableCell className="font-medium">{song.id}</TableCell>
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