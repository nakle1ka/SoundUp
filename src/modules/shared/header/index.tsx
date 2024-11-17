import { FC } from 'react';

import Image from 'next/image';
import { Container } from '@/components/container/container';
import { Search } from './components/search/search';
import { ProfileDropDown } from './components/profile/profileDropDown';

import styles from './styles/header.module.scss';
import Link from 'next/link';

type Props = {

}

export const Header: FC<Props> = ({ }) => {
    return (
        <header className={styles.header}>
            <Container id={styles.headerContent}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src='/assets/logo.jpg'
                        alt='Logo'
                        width={100}
                        height={100}
                        className={styles.logo}
                    />
                </Link>

                <Search />

                <ProfileDropDown />
            </Container>
        </header>
    );
}