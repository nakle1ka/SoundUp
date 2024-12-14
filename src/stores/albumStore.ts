import { create } from 'zustand';

interface ButtonStore {
    isPaus: boolean;
    paus: () => void;
    audioIds: string[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    setAudioIds: (ids: string[]) => void;
}

const usePlayStore = create<ButtonStore>((set) => ({
    isPaus: false,

    paus: () => set((state) => ({ isPaus: !state.isPaus })),

    audioIds: [], 

    currentIndex: 0, 
    setCurrentIndex: (index) => set({ currentIndex: index }),

    setAudioIds: (ids) => set({ audioIds: ids }),

}));

interface AlbumStore {
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;

    PlayList: Music[];
    setPlayList: (newPlaylist: Music[]) => void;
}

const useAlbumStore = create<AlbumStore>((set) => ({

    PlayList: [
        {
            id: "1",
            avatar: "/assets/test.jpg",
            name: "Возвращение колдуна",
            authors: ["Король и Шут"],
            musicAudioId: "/sound/test.mp3",
            album:"asd",
            category: 'Pop' as MusicCategories,
            createdAt: new Date("2021-01-05"), // DateTime
            updatedAt: new Date("2021-01-05"),
        },
        {
            id: "2",
            avatar: "/assets/test2.webp",
            name: "Спокойная ночь",
            authors: ["Кино", "В. Цой"],
            musicAudioId: "/sound/test2.mp3",
            album:"asd",
            category: 'Pop' as MusicCategories,

            createdAt: new Date("2021-01-05"), // DateTime
            updatedAt: new Date("2021-01-05"),
        },
        {
            id: "1",
            avatar: "/assets/test3.PNG",
            name: "DARE",
            authors: ["Gorillaz"],
            musicAudioId: "/sound/test3.mp3",
            album:"asas",
            category: 'Pop' as MusicCategories,
            createdAt: new Date("2021-01-05"), // DateTime
            updatedAt: new Date("2021-01-05"),
        },
    ],
    setPlayList:(newPlaylist) => set(state => ({
        ...state,
        PlayList: newPlaylist
    })),

    hoveredIndex: null,
    setHoveredIndex: (index) => set({ hoveredIndex: index }),
}));

interface ColorAlbum {
    bgColor: string;
    setBgColor: (color: string) => void;
}

const useColorAlbum = create<ColorAlbum>((set) => ({
    bgColor: 'transparent',
    setBgColor: (color: string) => set({ bgColor: color }),
}))

export { usePlayStore, useAlbumStore, useColorAlbum};