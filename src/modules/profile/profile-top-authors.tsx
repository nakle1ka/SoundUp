import { cn } from "@/lib/utils";
import { FC } from "react";
import { ContentCardRow } from "@/components/author/content-card-row";

interface Props {
    className?: string;
}

const users = [
    {
        imageUrl: "/assets/logo.jpg",
        name: "Lil Uzi Vert",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Travis Scott",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Kendrick Lamar",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "J. Cole",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Drake",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "The Weeknd",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "A$AP Rocky",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Tyler, The Creator",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Post Malone",
        description: "Исполнитель",
        link: "#",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Billie Eilish",
        description: "Исполнитель",
        link: "#",
    },
];

export const ProfileTopAuthors: FC<Props> = ({ className }) => {
    return (
        <div className={cn("px-4 text-white bg-black/15", className)}>
            <div className="pl-6">
                <span className=" block py-8 lg:py-12 tracking-widest">
                    •••
                </span>
            </div>
            <ContentCardRow
                className="z-10"
                name="Топ исполнителей этого месяца"
                content={users}
                description="Видны только тебе"
                typeCard={"square"}
            />
        </div>
    );
};
