"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface AlbumCardProps {
    album: {
        avatar: string;
        name: string;
        date: string; 
    };
}

const AlbumCard: React.FC<AlbumCardProps> = (props) => {
    return(
        <div className="hover:bg-[#ffffff12] w-[180px] h-[220px] inline-block mx-[7px] p-3 rounded-lg">
            <Link href = "/">
                <div>
                    <Image src={props.album.avatar} alt='album' width={170} height={170} className="rounded"/>
                </div>
                <div>
                    <p>{props.album.name}</p>
                    <p>{props.album.date}</p>
                </div>
            </Link>
        </div>
    )
}

export default AlbumCard