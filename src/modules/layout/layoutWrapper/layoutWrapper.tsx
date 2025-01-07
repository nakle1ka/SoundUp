'use client'

import { FC, useEffect, useState } from 'react';

import { Header } from '../header';
import { Container } from '@/components/container/container';
import { MusicList } from '../musicList';
import { LayoutPlaylists } from '../layoutPlaylists';
import { Player } from '../player';

import { responsive } from '@/types/responsive';
import styles from './styles/layoutWrapper.module.scss';

export const LayoutWrapper: FC<React.PropsWithChildren> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= responsive.mobile);
    };

    handleResize(); // Проверяем размер при монтировании
    window.addEventListener('resize', handleResize); // Обновляем состояние при изменении размера

    return () => {
      window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
    };
  }, []);

  return (
    <div className={`${styles.wrapper} app-root`}>
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
