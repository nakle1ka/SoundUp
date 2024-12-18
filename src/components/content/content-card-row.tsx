"use client";

import { FC, useRef } from "react";
import { useElementSize } from "@reactuses/core";
import { cn } from "@/lib/utils";
import { ContentCard } from "./content-card";
import {
    contentCardBreakPoint,
    contentCardGaps,
    contentCardSize,
    countContentCardsInRow,
} from "./constants";
import { Skeleton } from "../ui/skeleton";

const getCartWidth = (width: number) =>
    contentCardSize +
    (width < contentCardBreakPoint ? contentCardGaps[0] : contentCardGaps[1]);

const getCountAuthorCards = (width: number) => {
    let count = 0;
    let currentWidth = getCartWidth(width) * countContentCardsInRow;

    while (width < currentWidth) {
        currentWidth -= getCartWidth(width);
        count += 1;
    }

    return countContentCardsInRow - count;
};

interface Props {
    name: string;
    content?: ContentCartType[];
    isLoading?: boolean;
    description?: string;
    typeCard?: "rounded" | "square";
    className?: string;
}

export type ContentCartType = {
    imageUrl: string;
    name: string;
    link: string;
    description?: string;
};

export const ContentCardRow: FC<Props> = ({
    className,
    name,
    isLoading,
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
                    "flex",
                    width > contentCardBreakPoint ? "gap-6" : "gap-4"
                )}
            >
                {content
                    ? content
                          .slice(0, getCountAuthorCards(width))
                          .map(
                              (
                                  { imageUrl, name, description, link },
                                  index
                              ) => (
                                  <ContentCard
                                      imageUrl={imageUrl}
                                      name={name}
                                      description={description}
                                      key={index}
                                      typeCard={typeCard}
                                      link={link}
                                  ></ContentCard>
                              )
                          )
                    : isLoading &&
                      Array.from({ length: 8 }).map((_, index) => (
                          <Skeleton
                              key={index}
                              className="min-w-[150px] min-h-[150px] opacity-50"
                          />
                      ))}
            </div>
        </div>
    );
};
