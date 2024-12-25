'use client'

import { FC } from 'react';
import { useMediaQuery } from 'react-responsive'

import { Header } from '../header';
import { Container } from '@/components/container/container';
import { LayoutPlaylists } from '../layoutPlaylists';
import { MusicList } from '../musicList';
import { Player } from '../player';

import { responsive } from '@/types/responsive';
import styles from './styles/layoutWrapper.module.scss';


export const LayoutWrapper: FC<React.PropsWithChildren> = ({ children }) => {
    const isMobile: boolean = useMediaQuery({ query: `(max-width: ${responsive.mobile}px)` })

    return ( 
        <div className={styles.wrapper}>
          <Header />
          <Container id={styles.container}>
            {!isMobile && <LayoutPlaylists />}
            <div className={styles.main}>
              {children}    
            </div>
            {!isMobile && <MusicList />}
          </Container>
          <Player />
        </div>
    );
}
