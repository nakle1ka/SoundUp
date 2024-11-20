import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
    imageUrl: string;
    name: string;
    description: string;
    size?: number;
    typeCard?: "rounded" | "square";
    className?: string;
}

const defaultSize = 150;

export const AuthorCard: FC<Props> = ({
    imageUrl,
    name,
    description,
    size,
    typeCard,
    className,
}) => {
    return (
        <div
            className={cn(
                "inline-flex flex-col gap-1 justify-between",
                className
            )}
        >
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
        </div>
    );
};
