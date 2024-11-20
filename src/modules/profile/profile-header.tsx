"use client";

import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { useElementSize } from "@reactuses/core";

interface Props {
    image: StaticImageData;
    name: string;
    subsribeCount: number;
    openPlaylistCount: number;
    size?: number;
    className?: string;
}

export const ProfileHeader: FC<Props> = ({
    image,
    name,
    subsribeCount,
    openPlaylistCount,
    size = 350,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width] = useElementSize(ref);

    return (
        <div
            className={cn(
                "flex flex-col items-left bg-black/5 sm:flex-row md:gap-10 sm:items-end px-4 lg:px-8 pb-8 pt-28 gap-6",
                className
            )}
        >
            <div>
                <Image
                    className="rounded-full"
                    width={size}
                    height={size}
                    src={image}
                    alt={"Avatar"}
                />
            </div>

            <div className="flex flex-col md:gap-6 text-white gap-3">
                <span className="text-white font-semibold lg:text-xl md:text-lg">
                    Профиль
                </span>
                <h1 className="font-bold text-white mg:text-9xl lg:text-7xl text-6xl">
                    {name}
                </h1>
                <div
                    className={cn(
                        width <= 300 ? "flex-col" : "items-center",
                        "flex gap-1 flex-wrap"
                    )}
                    ref={ref}
                >
                    <span className="text-gray-200 w-auto lg:text-sm md:text-base">
                        {openPlaylistCount} открытых плейлистов
                    </span>
                    {width >= 300 && <span>•</span>}
                    <span>{subsribeCount} подписок</span>
                </div>
            </div>
        </div>
    );
};
