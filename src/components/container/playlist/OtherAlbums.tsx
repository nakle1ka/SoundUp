'use client'
import React from "react"
import Link from "next/link"
import AlbumCard from "@/components/ui/playlist/AlbumCard"

interface LayoutOtherAlbums {
    children: React.ReactNode;
}

const albums = [
    {
        id: 1,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'gaga',
        date: '1988',
    },
    {
        id: 2,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'gaga',
        date: '1988',
    },
    {
        id: 3,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'gaga',
        date: '1988',
    },
]

const OtherAlbums: React.FC<LayoutOtherAlbums> = ({ children }) => {
    return(
        <div className="p-5">
            <div className="flex justify-between "><h1>{children}: other albums</h1><Link href="/" className="hover:underline">open a discography</Link></div>
            <div>
                {albums.map(albums => 
                    <AlbumCard album={albums} key = {albums.id}/>
                )}
            </div>
        </div>
    )
}

export default OtherAlbums