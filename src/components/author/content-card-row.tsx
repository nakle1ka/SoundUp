"use client";

import { FC, useRef } from "react";
import { useElementSize } from "@reactuses/core";
import { cn } from "@/lib/utils";
import { ContentCard } from "./content-card";

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
    content: ContentCartType[];
    description?: string;
    typeCard?: "rounded" | "square";
    className?: string;
}

export type ContentCartType = {
    imageUrl: string;
    name: string;
    description: string;
    link: string;
};

export const ContentCardRow: FC<Props> = ({
    className,
    name,
    content,
    description,
    typeCard,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width] = useElementSize(ref);

    return (
        <div className={cn(" text-white", className)} ref={ref}>
            <div>
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <h2 className="font-bold lg:text-xl text-lg">{name}</h2>
                        <span className="block text-gray-400 text-sm lg:text-base">
                            {description}
                        </span>
                    </div>
                    <span className="font-bold lg:text-base text-sm">
                        Показать {width < 450 && <br />} все
                    </span>
                </div>
            </div>
            <div
                className={cn(
                    // getCountAuthorCards(width) <= content.length &&
                    //     "justify-between",
                    "flex gap-7 overflow-hidden 2xl:gap-10"
                )}
            >
                {content
                    .slice(0, getCountAuthorCards(width))
                    .map(({ imageUrl, name, description, link }, index) => (
                        <ContentCard
                            imageUrl={imageUrl}
                            name={name}
                            description={description}
                            key={index}
                            typeCard={typeCard}
                            link={link}
                        ></ContentCard>
                    ))}
            </div>
        </div>
    );
};
