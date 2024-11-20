import { FC } from "react";
import { ProfileFooterLink } from "./profile-footer-link";
import { cn } from "@/lib/utils";

interface Props {
    name: string;
    links: FooterLink[];
    className?: string;
}

export const FooterColumn: FC<Props> = ({ name, links, className }) => {
    return (
        <div className={cn(className, "flex flex-col gap-1")}>
            <h3 className="text-white font-semibold">{name}</h3>

            {links.map((link, index) => (
                <ProfileFooterLink link={link} key={index} />
            ))}
        </div>
    );
};
