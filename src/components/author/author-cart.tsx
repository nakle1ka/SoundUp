import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { UserType } from "@/types/types";

interface Props {
    imageUrl: StaticImageData;
    name: string;
    userType: UserType;
    size?: number;
    className?: string;
}

const defaultSize = 150;

export const AuthorCart: FC<Props> = ({
    imageUrl,
    name,
    userType,
    size,
    className,
}) => {
    return (
        <div className={cn("inline-flex flex-col gap-1", className)}>
            <Image
                className="rounded-full"
                src={imageUrl}
                width={size ?? defaultSize}
                height={size ?? defaultSize}
                alt={"Avatar"}
            />
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-gray-400">{userType}</p>
        </div>
    );
};
