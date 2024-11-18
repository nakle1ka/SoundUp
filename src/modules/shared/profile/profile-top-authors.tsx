import { cn } from "@/lib/utils";
import { UserType } from "@/types/types";
import { StaticImageData } from "next/image";
import { FC } from "react";
import Avatar from "../../../../public/assets/logo.jpg";
import { AuthorCart } from "@/components/author/author-cart";

interface Props {
    className?: string;
}

const users: user[] = [
    {
        name: "Lil Uzi Vert",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Travis Scott",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Kendrick Lamar",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "J. Cole",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Drake",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "The Weeknd",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "A$AP Rocky",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Tyler, The Creator",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Post Malone",
        avatar: Avatar,
        userType: "Исполнитель",
    },
    {
        name: "Billie Eilish",
        avatar: Avatar,
        userType: "Исполнитель",
    },
];

type user = {
    name: string;
    avatar: StaticImageData;
    userType: UserType;
};

export const ProfileTopAuthors: FC<Props> = ({ className }) => {
    return (
        <div className={cn(" text-white dark bg-background", className)}>
            <div className="pl-6 bg-gradient-to-t from-background to-orange-950">
                <span className=" block py-12 tracking-widest">•••</span>
                <div>
                    <h2 className="font-bold text-xl">
                        Топ исполнителей этого месяца
                    </h2>
                    <div className="flex justify-between">
                        <span className="block text-gray-400 mb-3">
                            Видны только тебе
                        </span>
                        <span className="font-bold mr-4">Показать все</span>
                    </div>
                </div>
            </div>
            <div className="pl-6 flex gap-4">
                {users.splice(0, 7).map((user, index) => (
                    <AuthorCart
                        key={index}
                        name={user.name}
                        imageUrl={user.avatar}
                        userType={user.userType}
                    />
                ))}
            </div>
        </div>
    );
};
