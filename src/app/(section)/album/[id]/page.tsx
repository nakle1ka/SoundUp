'use client'
import React, { useState } from "react";
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

    const songs = [
        {
            id: '1' ,
            avatar: '',
            name: 'aaaaa',
            authors: 'bbbb',
            musicAudioId: '3:33',
            albumName: 'sssss',
            createdAt: new Date("2024-01-01T10:00:00Z"),
        },
        {
            id: '2' ,
            avatar: '',
            name: 'aaaaa',
            authors: 'bbbb',
            musicAudioId: '3:33',
            albumName: 'sssss',
            createdAt: new Date("2024-01-01T10:00:00Z"),
        },
    ]

    
    const AlbumPage = () => {

    
        return (
            <div>
                <PlaylistsHeadr imageSrc="">asdasd</PlaylistsHeadr>
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
                    {songs.map((song) => (
                        <TableRow key={song.id} className="rounded-md">
                            <TableCell className="font-medium">{song.id}</TableCell>
                            <TableCell>
                                <Link href= '/' className="hover:underline">{song.name}</Link>
                                <Link href = '/' className="hover:underline">{song.authors}</Link>
                            </TableCell>
                            <TableCell><Link href = '/' className="hover:underline">{song.albumName}</Link></TableCell>
                            <TableCell>{song.createdAt.toLocaleDateString()}</TableCell>
                            <TableCell className="text-right">{song.musicAudioId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </div>
        )
    };
    
    export default AlbumPage;