"use client";

import { FooterColumn } from "@/components/profile/profile-footer-column";
import { ProfileFooterIcon } from "@/components/profile/profile-footer-icon";
import { ProfileFooterRow } from "@/components/profile/profile-footer-row";
import { cn } from "@/lib/utils";
import { useElementSize } from "@reactuses/core";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FC, useRef } from "react";

interface Props {
    className?: string;
}

const footerColums: { name: string; links: FooterLink[] }[] = [
    {
        name: "Компания",
        links: [
            {
                name: "Impressum / Transparenzinformation",
                link: "#",
            },
            {
                name: "О нас",
                link: "#",
            },
            {
                name: "Вакансии",
                link: "#",
            },
            {
                name: "For the Record",
                link: "#",
            },
        ],
    },
    {
        name: "Сообщества",
        links: [
            {
                name: "Для исполнителей",
                link: "#",
            },
            {
                name: "Для разработчиков",
                link: "#",
            },
            {
                name: "Реклама",
                link: "#",
            },
            {
                name: "Для инвестеров",
                link: "#",
            },
            {
                name: "Для вендеров",
                link: "#",
            },
        ],
    },
    {
        name: "Полезные ссылки",
        links: [
            {
                name: "Справка",
                link: "#",
            },
            {
                name: "Бесплатное мобильное приложение",
                link: "#",
            },
            {
                name: "Vertrage hier kundigen",
                link: "#",
            },
        ],
    },
    {
        name: "Планы Spotify",
        links: [
            {
                name: "Инвидуальная подписка Spotify Premium",
                link: "#",
            },
            {
                name: "Premium для двоих",
                link: "#",
            },
            {
                name: "Premium для семьи",
                link: "#",
            },
            {
                name: "Premium для студентов",
                link: "#",
            },
            {
                name: "Бесплатная версия Spotify",
                link: "#",
            },
        ],
    },
];

export const ProfileFooter: FC<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width] = useElementSize(ref);

    return (
        <div className={cn("px-4 mt-auto pt-24", className)}>
            <div
                ref={ref}
                className={cn(
                    "flex justify-between border-b-gray-800 border-b pb-12",
                    width >= 1024 ? "gap-16" : "gap-8",
                    width >= 768 ? "flex-row" : "flex-col"
                )}
            >
                <div
                    className={cn(
                        "flex justify-between gap-2",
                        width >= 768 ? "flex-row" : "flex-col"
                    )}
                >
                    {footerColums.map(({ name, links }, index) => (
                        <FooterColumn name={name} links={links} key={index} />
                    ))}
                </div>
                <div className="flex gap-2">
                    <ProfileFooterIcon>
                        <Instagram color="white" />
                    </ProfileFooterIcon>

                    <ProfileFooterIcon>
                        <Twitter color="white" />
                    </ProfileFooterIcon>

                    <ProfileFooterIcon>
                        <Facebook color="white" />
                    </ProfileFooterIcon>
                </div>
            </div>
            <ProfileFooterRow />
        </div>
    );
};
