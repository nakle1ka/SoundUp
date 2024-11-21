import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props {
    className?: string;
}

export const ProfileFooterIcon: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn(className, "h-12 p-3 bg-gray-800 rounded-full")}>
            {children}
        </div>
    );
};
