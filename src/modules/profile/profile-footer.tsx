import { ProfileFooterRow } from "@/components/profile/profile-footer-row";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string;
}

export const ProfileFooter: FC<Props> = ({ className }) => {
    return (
        <div className={cn("", className)}>
            <ProfileFooterRow />
        </div>
    );
};
