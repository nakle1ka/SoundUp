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
import Player from "@/components/container/playlist/Player";
import {usePlayStore, useAlbumStore} from "@/stores/albumStore";



const PlaylistsPage = () => {
    const { hoveredIndex, setHoveredIndex, PlayList } = useAlbumStore();

    return(
        <div className="">
                <PlaylistsHeadr imageSrc="">Plailist</PlaylistsHeadr>
                <Player />
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
                        {PlayList.map((song, index) => (
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