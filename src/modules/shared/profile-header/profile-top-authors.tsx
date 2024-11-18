import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string;
}

export const ProfileTopAuthors: FC<Props> = ({ className }) => {
    return (
        <div className={cn("text-white dark bg-background", className)}>
            <span>•••</span>
        </div>
    );
};
