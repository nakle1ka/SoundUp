import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { contentCardSize } from "./constants";

interface Props {
    imageUrl: string;
    name: string;
    description?: string;
    link: string;
    typeCard?: "rounded" | "square";
    size?: number;
    className?: string;
}

export const ContentCard: FC<Props> = ({
    imageUrl,
    name,
    description,
    link,
    typeCard,
    className,
}) => {
    return (
        <div
            className={cn(
                "inline-flex flex-col gap-1 justify-between hover:bg-gray-50/5 rounded-xl relative z-30",
                className,
                `min-w-[150px]`
            )}
        >
            <Link href={link}>
                <Image
                    className={
                        typeCard == "rounded" ? "rounded-full" : "rounded-2xl"
                    }
                    layout="fixed"
                    src={imageUrl}
                    width={contentCardSize}
                    height={contentCardSize}
                    alt={"Avatar"}
                />
                <h3 className="text-white font-semibold">{name}</h3>
                <p className="text-gray-400">{description}</p>
            </Link>
        </div>
    );
};
