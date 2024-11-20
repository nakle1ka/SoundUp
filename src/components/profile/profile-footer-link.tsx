import Link from "next/link";
import { FC } from "react";

interface Props {
    link: FooterLink;
}

export const ProfileFooterLink: FC<Props> = ({ link: { link, name } }) => {
    return (
        <Link className="text-gray-400" href={link}>
            {name}
        </Link>
    );
};
