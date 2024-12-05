'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"

interface LayoutOtherAlbums {
    children: React.ReactNode;
}

const albums = [
    {
        id: 1,
        avatar: 'https://avatars.mds.yandex.net/i?id=ea6699b8e531b3a9c151ab4756a52ece720fd700-5235116-images-thumbs&n=13',
        name: 'gaga',
        data: '1988',
    },
]

const OtherAlbums: React.FC<LayoutOtherAlbums> = ({ children }) => {
    return(
        <div>
            <div><h1>{children}: other albums</h1><Link href="/">open a discography</Link></div>
            <div>
                {albums.map((album) => (
                    <div key = {album.id}>
                        <div>
                            <Image src = {album.avatar} alt="album" width={50} height={50}/>
                        </div>
                        <div>
                            <div>{album.name}</div>
                            <div>{album.data}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherAlbums