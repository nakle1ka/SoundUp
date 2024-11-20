"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { AuthorCardRow } from "@/components/author/author-card-row";

interface Props {
    className?: string;
}

const users = [
    {
        imageUrl: "/assets/logo.jpg",
        name: "Lil Uzi Vert",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Travis Scott",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Kendrick Lamar",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "J. Cole",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Drake",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "The Weeknd",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "A$AP Rocky",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Tyler, The Creator",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Post Malone",
        description: "Исполнитель",
    },
    {
        imageUrl: "/assets/logo.jpg",
        name: "Billie Eilish",
        description: "Исполнитель",
    },
];

export const ProfileTopAuthors: FC<Props> = ({ className }) => {
    return (
        <div className={cn(" text-white bg-black/10", className)}>
            <div className="pl-6">
                <span className=" block py-8 lg:py-12 tracking-widest">
                    •••
                </span>
            </div>
            <AuthorCardRow
                name={"Топ исполнителей этого месяца"}
                albums={users}
                description="Видны только тебе"
                typeCard={"square"}
            />
        </div>
    );
};
