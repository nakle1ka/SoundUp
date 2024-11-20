"use client";

import { FC, useRef } from "react";
import { AuthorCard } from "./author-card";
import { useElementSize } from "@reactuses/core";
import { cn } from "@/lib/utils";

const initialWidth = 1650;

const getCountAuthorCards = (width: number) => {
    let count = 0;
    let currentWidth = initialWidth;

    while (width < currentWidth) {
        currentWidth -= 182;
        count += 1;
    }
    return 10 - count;
};

interface Props {
    name: string;
    albums: Album[];
    description?: string;
    typeCard?: "rounded" | "square";
    className?: string;
}

type Album = {
    imageUrl: string;
    name: string;
    description: string;
    link: string;
};

export const AuthorCardRow: FC<Props> = ({
    className,
    name,
    albums,
    description,
    typeCard,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width] = useElementSize(ref);

    return (
        <div className={cn("px-4 text-white", className)} ref={ref}>
            <div>
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <h2 className="font-bold lg:text-xl text-lg">{name}</h2>
                        <span className="block text-gray-400 text-sm lg:text-base">
                            {description}
                        </span>
                    </div>
                    <span className="font-bold mr-4 text-sm lg:text-base">
                        Показать все
                    </span>
                </div>
            </div>
            <div className="flex gap-4 justify-between overflow-hidden">
                {albums
                    .slice(0, getCountAuthorCards(width))
                    .map(({ imageUrl, name, description, link }, index) => (
                        <AuthorCard
                            imageUrl={imageUrl}
                            name={name}
                            description={description}
                            key={index}
                            typeCard={typeCard}
                            link={link}
                        ></AuthorCard>
                    ))}
            </div>
        </div>
    );
};
