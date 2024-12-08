'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FastAverageColor } from "fast-average-color";

interface LayoutPlaylistsHeadr {
    children: React.ReactNode;
    imageSrc: string;
}

const PlaylistsHeadr: React.FC<LayoutPlaylistsHeadr> = ({ children, imageSrc }) => {
    const [bgColor, setBgColor] = useState<string>("transparent");

    useEffect(() => {
        const fac = new FastAverageColor();
        const img = document.createElement("img");

        img.src = imageSrc;
        img.crossOrigin = "anonymous"; // Важно для работы с изображениями из других доменов

        img.onload = () => {
            const color = fac.getColor(img);
            setBgColor(color.hex);
        };

        return () => {
            fac.destroy();
        };
    }, [imageSrc]);

    return (
        <div className="w-full h-[270px] p-5" style={{ backgroundColor: bgColor }}>
            <div className="inline-block">
                <Link href='/'>
                    <Image
                        src={imageSrc}
                        alt="icon"
                        width={230}
                        height={230}
                        className="hover:scale-105 shadow-2xl duration-1000 rounded"
                    />
                </Link>
            </div>
            <div className="inline-block ml-[20px] align-middle">
                {children}
            </div>
        </div>
    );
};

PlaylistsHeadr.displayName = "PlaylistsHeadr";
export default PlaylistsHeadr;