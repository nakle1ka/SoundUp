'use client'

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/axios';

import Link from 'next/link';

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

import { deleteCookieByName } from '@/utils/tokens';

import routes from '@/types/routes';
import styles from "./profileDropDown.module.scss"
import { LogOut, User } from 'lucide-react';

export const ProfileDropDown: FC = () => {
    const router = useRouter();

    const [userData, setUserData] = useState<User>({} as User);

    useEffect(() => {
        async function fetchData() {
            const resData: User = (await apiClient.get(routes.GET_USER)).data;
            setUserData(resData);
        }

        fetchData()
    }, [])

    function handleLogout() {
        deleteCookieByName('accessToken');
        deleteCookieByName('refreshToken');
        deleteCookieByName('userId');
        router.push('/auth');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={styles.container}>

                <div className={styles.avatarContainer}>
                    <Avatar className={styles.avatar}>
                        <AvatarImage src={userData.avatar} className={styles.image} />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                </div>

            </DropdownMenuTrigger>
            <DropdownMenuContent>

                <DropdownMenuLabel className={styles.username}>
                    {userData.name}
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Link href="/profile" className={styles.profile}>
                        <User />
                        Профиль
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        <LogOut />
                        Выход
                    </button>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    );
}