import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props {
    className?: string;
}
export const ProfileTopBg: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                className,
                "absolute w-full h-[850px] sm:h-[700px] bg-gradient-to-t from-transparent to-orange-800 -z-10"
            )}
        >
            {children}
        </div>
    );
};
