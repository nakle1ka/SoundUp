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
        <div className={cn(className)}>
            <div
                className={`absolute w-full h-[100vh] bg-gradient-to-t from-transparent to-orange-800 z-[5]`}
            >
                {children}
            </div>
        </div>
    );
};
