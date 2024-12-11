import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string;
}
export const ProfileTopBg: FC<Props> = ({ className }) => {
    return (
        <div className={cn(className)}>
            <div
                className={`absolute w-full h-[100vh] bg-gradient-to-t from-transparent to-orange-800 z-[5]`}
            ></div>
        </div>
    );
};
