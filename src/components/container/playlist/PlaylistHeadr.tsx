'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";


interface LayoutPlaylistsHeadr {
    children: React.ReactNode;
    imageSrc: string;
}

const PlaylistsHeadr: React.FC<LayoutPlaylistsHeadr> = ({ children, imageSrc }) => {
    

    return (
        <div className={`w-full h-[200px]`}>
            <div className="inline-block">
                <Link href='/'>
                    <Image
                        src={'/'}
                        alt="icon"
                        width={150}
                        height={150}
                        className="hover:scale-110 shadow-2xl duration-1000"
                    />
                </Link>
            </div>
            <div className="inline-block">
                {children}
            </div>
        </div>
    );
}

PlaylistsHeadr.displayName = "PlaylistsHeadr";
export default PlaylistsHeadr;