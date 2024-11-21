import {
    ContentCardRow,
    ContentCartType,
} from "@/components/author/content-card-row";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string;
}

const content: ContentCartType[] = [
    {
        imageUrl: "/assets/logo.jpg",
        name: "Мой плелист №2",
        description: "CatMario",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Мой плелист №1",
        description: "CatMario",
        link: "#",
    },
];

export const ProfilePlaylists: FC<Props> = ({ className }) => {
    return (
        <div className={cn(className, "px-4 mt-12")}>
            <ContentCardRow name="Открытые плейлисты" content={content} />
        </div>
    );
};
