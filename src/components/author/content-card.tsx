import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
    imageUrl: string;
    name: string;
    description: string;
    link: string;
    typeCard?: "rounded" | "square";
    size?: number;
    className?: string;
}

const defaultSize = 150;

export const ContentCard: FC<Props> = ({
    imageUrl,
    name,
    description,
    link,
    typeCard,
    size,
    className,
}) => {
    return (
        <div
            className={cn(
                "inline-flex flex-col gap-1 justify-between",
                className
            )}
        >
            <Link href={link}>
                <Image
                    className={
                        typeCard == "rounded" ? "rounded-full" : "rounded-2xl"
                    }
                    src={imageUrl}
                    width={size ?? defaultSize}
                    height={size ?? defaultSize}
                    alt={"Avatar"}
                />
                <h3 className="text-white font-semibold">{name}</h3>
                <p className="text-gray-400">{description}</p>
            </Link>
        </div>
    );
};
