"use client";
import { FC, useEffect, useState } from "react";

import apiClient from "@/axios";
import { getUserId } from "@/utils/tokens";

import styles from "./full.module.scss";
import { Header } from "@/modules/layout/header";
import { ContentCardRow } from "@/components/content/content-card-row";
import { useParams } from "next/navigation";

interface FullPlaylist {}

const testPlyslist = [
  {
    name: "First",
    img: "",
  },
  {
    name: "Second",
    img: "",
  },
  {
    name: "Three",
    img: "",
  },
  {
    name: "Fourth",
    img: "",
  },
  {
    name: "LOLLLLOLL",
    img: "",
  },
  {
    name: "MonsterLOLOOLLOLO",
    img: "",
  },
  {
    name: "Akiro YOYOOYOYOOYOOYOYOYO",
    img: "",
  },
];

const FullPlaylist: FC<FullPlaylist> = ({}) => {
  const [isPlaylist, setIsPlaylist] = useState<boolean>(true);
  const [playList, setplayList] = useState<unknown[]>([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = getUserId();
        console.log(userId);
        /**
                const playlistsDataAll: Playlist[] = (
                    await apiClient.get(
                        `/api/GetRequestsPlaylist/GetUserPlaylists?page=1&pageSize=10&userId=${userId}`
                    )
                ).data;

                setplayList(playlistsDataAll)
                */
      } catch (e: any) {
        setIsPlaylist(true);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isPlaylist ? (
        <>
          <section className={styles.playlist}>
            <div className={styles.fullPlaylist}>
              <ContentCardRow
                name="Ваши плейлисты"
                isMatrix={true}
                content={testPlyslist.map((item) => {
                  return {
                    imageUrl: "/assets/logo.jpg",
                    name: item.name,
                    link: "/",
                  };
                })}
              />
            </div>
          </section>
        </>
      ) : (
        <p>Плейлисты не найдены</p>
      )}
    </>
  );
};

export default FullPlaylist;
