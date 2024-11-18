import { FC } from "react";

interface Props {
    className?: string;
}

export const ProfileFooter: FC<Props> = ({ className }) => {
    return <div className={className}></div>;
};
