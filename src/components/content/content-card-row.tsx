import { FC } from "react";
import { cn } from "@/lib/utils";
import { ContentCard } from "./content-card";
import { Skeleton } from "../ui/skeleton";

interface Props {
    name?: string;
    isMatrix?: boolean;
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
    isMatrix,
    name,
    isLoading,
    content,
    description,
    typeCard,
}) => {
    return (
        <div className={cn(" text-white @container", className)}>
            <div>
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <h2 className="font-bold lg:text-xl text-lg">{name}</h2>
                        <span className="block text-gray-400 text-sm lg:text-base">
                            {description}
                        </span>
                    </div>
                    <span className="font-bold lg:text-base text-sm">
                        Показать <br className="@[450px]:hidden" /> все
                    </span>
                </div>
            </div>
            <div
                className={cn(
                    "flex @7xl:overflow-hidden @6xl:flex-wrap overflow-clip @[1413px]:gap-6 gap-4",
                    isMatrix ? "flex-wrap" : "max-h-48"
                )}
            >
                {content
                    ? content.map(
                          ({ imageUrl, name, description, link }, index) => (
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
