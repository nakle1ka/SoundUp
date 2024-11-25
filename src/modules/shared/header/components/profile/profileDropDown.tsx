import { FC } from 'react';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar';

import styles from "./profileDropDown.module.scss"

type Props = {

}

export const ProfileDropDown: FC<Props> = ({ }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={styles.container}>

                <div className={styles.avatarContainer}>
                    <Avatar className={styles.avatar}>
                        <AvatarImage src="https://github.com/shadcn.png" className={styles.image} />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                </div>

            </DropdownMenuTrigger>
            <DropdownMenuContent>

                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    );
}