'use client'
import React, {useEffect} from "react";
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
import ButtonPlay from "@/components/ui/playlist/ButtonPlay";
import {usePlayStore, useAlbumStore} from "@/stores/albumStore";
import { useColorAlbum } from "@/stores/albumStore";


    
    const AlbumPage = () => {
        const { isPaus, paus, setCurrentIndex,  setAudioIds } = usePlayStore();
        const { hoveredIndex, setHoveredIndex, PlayList } = useAlbumStore();
        const { bgColor } = useColorAlbum()

        useEffect(() => {
            const ids = PlayList.map(song => song.musicAudioId);
            setAudioIds(ids);
        }, []);
    
        const handlePlay = (index: number) => {
            setCurrentIndex(index); 
            paus();
        };

        const hexToRgb = (hex: string) => {

            hex = hex.replace(/^#/, '');
        

            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
        
            return `${r}, ${g}, ${b}`;
        };
    
        return (
            <div className="">
                <PlaylistsHeadr imageSrc="https://avatars.mds.yandex.net/i?id=7391869d7a8a7141305333985804969b_l-5222489-images-thumbs&n=13">album</PlaylistsHeadr>
                <div 
                    style={{background: `linear-gradient(to bottom, rgba(${hexToRgb(bgColor)}, 0.6), #121212)` }}
                >
                    <Player />
                    <div className="p-5 mb-[70px]">
                        <Table>
                            <TableHeader className="rounded-md">
                                <TableRow className="rounded-[20px]">
                                    <TableHead className="w-[100px] ">#</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Album</TableHead>
                                    <TableHead>Date of addition</TableHead>
                                    <TableHead className="flex justify-end items-center "><Clock3 /></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {PlayList.map((song, index) => (
                                    <TableRow 
                                        key={song.id} 
                                        className="rounded-md" 
                                        onMouseEnter={() => setHoveredIndex(index)} 
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <TableCell className={`font-medium group relative ${isPaus ? 'text-[#21de83]' : ''}`}>
                                            {hoveredIndex === index ? 
                                                <ButtonPlay 
                                                    className="p-2 rounded text-sm" 
                                                    variant="primary" 
                                                    audioIds={PlayList.map(s => s.musicAudioId)}
                                                    setCurrentIndex={setCurrentIndex} 
                                                    onPlay={handlePlay} 
                                                    mode="fromCurrent"
                                                />
                                                : 
                                                index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <div className="inline-block relative group">
                                                <Image src={song.avatar} alt="sdf" width={50} height={50} className="rounded" />
                                            </div>
                                            <div className="inline-block ml-[10px] align-top">
                                                <div><Link href='/' className={`hover:underline ${isPaus ? 'text-[#21de83]' : ''}`}>{song.name}</Link></div>
                                                <div><Link href='/' className="hover:underline">{song.authors.join(", ")}</Link></div>
                                            </div>
                                        </TableCell>
                                        <TableCell><Link href='/' className="hover:underline">{song.album}</Link></TableCell>
                                        <TableCell>{song.createdAt.toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right"></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div>
                    <OtherAlbums>Name album</OtherAlbums>
                </div>
            </div>
        );
    };
    
    export default AlbumPage;