import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

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
    return (
        <div
            className={cn(
                "flex gap-10 items-end pb-8 pl-8 pt-28 bg-gradient-to-t from-orange-900 to-orange-700 border-b-[100px]",
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

            <div className="flex flex-col gap-6 text-white">
                <span className="text-white font-semibold text-xl">
                    Профиль
                </span>
                <h1 className="font-bold text-white text-9xl">{name}</h1>
                <div className="flex gap-1">
                    <span className="text-gray-200">
                        {openPlaylistCount} открытых плейлистов
                    </span>
                    <span>•</span>
                    <span>{subsribeCount} подписок</span>
                </div>
            </div>
        </div>
    );
};
