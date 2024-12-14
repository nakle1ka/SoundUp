import { FC } from "react";
import { ContentCardRow } from "@/components/content/content-card-row";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const users = [
    {
        imageUrl: "/assets/logo.jpg",
        name: "Lil Uzi Vert",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Travis Scott",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Kendrick Lamar",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "J. Cole",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Drake",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "The Weeknd",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "A$AP Rocky",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Tyler, The Creator",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Post Malone",
        description: "Профиль",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Billie Eilish",
        description: "Профиль",
        link: "#",
    },
];

export const ProfileSubscribers: FC<Props> = ({ className }) => {
    return (
        <div className={cn(className, "px-4 mt-12")}>
            <ContentCardRow
                name="Уже подписаны"
                typeCard="rounded"
                content={users}
            />
        </div>
    );
};
