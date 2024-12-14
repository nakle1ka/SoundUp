import { cn } from "@/lib/utils";
import { FC, useRef } from "react";
import { ProfileFooterLink } from "./profile-footer-link";
import { useElementSize } from "@reactuses/core";

interface Props {
    className?: string;
}

const links: FooterLink[] = [
    {
        name: "Юридическая информация",
        link: "#",
    },
    {
        name: "Центр безопасности и конфиденциальности",
        link: "#",
    },
    {
        name: "Политика конфиденциальности",
        link: "#",
    },
    {
        name: "Настройки файлов coockie",
        link: "#",
    },
    {
        name: "О рекламе",
        link: "#",
    },
    {
        name: "Специальные возможности",
        link: "#",
    },
    {
        name: "© 2024 SoundUp",
        link: "#",
    },
];

export const ProfileFooterRow: FC<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width] = useElementSize(ref);

    return (
        <div
            ref={ref}
            className={cn(
                "flex justify-between mx-4 mt-12 pb-32 gap-1",
                width >= 1024 ? "flex-row" : "flex-col",
                className
            )}
        >
            {links.map((link, index) => (
                <ProfileFooterLink link={link} key={index} />
            ))}
        </div>
    );
};
