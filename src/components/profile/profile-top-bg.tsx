"use client";

import { cn } from "@/lib/utils";
import { useElementSize } from "@reactuses/core";
import { FC, PropsWithChildren, useRef } from "react";

interface Props {
    className?: string;
}

const getHeight = (heightWindow: number) => {
    const height = Math.round(heightWindow * 0.75);
    return height > 0 ? height : 0;
};

export const ProfileTopBg: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    const childRef = useRef<HTMLDivElement>(null);
    const [height] = useElementSize(childRef);

    return (
        <div className={cn(className, "relative")} ref={childRef}>
            <div
                className={`absolute w-full h-[${getHeight(
                    height
                )}px] bg-gradient-to-t from-transparent to-orange-800 -z-10`}
            >
                {children}
            </div>
        </div>
    );
};
