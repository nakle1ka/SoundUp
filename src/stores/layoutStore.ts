import { create } from 'zustand'

type Store = {
    isMusicListOpened: boolean;
    toggleIsMusicListOpened: () => void;

    isLooped: boolean;
    toggleIsLooped: () => void;

    volume: number;
    setVolume: (value: number) => void;
    
    currentPlayList: Music[];
    setCurrentPlayList: (newPlaylist: Music[]) => void;
    
    activeIndex: number;
    setActiveIndex: (value: number) => void;
}

export const useLayoutStore = create<Store>()((set) => ({
    isMusicListOpened: true,
    toggleIsMusicListOpened: () => set((state) => ({
        ...state,
        isMusicListOpened: !state.isMusicListOpened
    })),

    // player settings
    isLooped: true,
    toggleIsLooped: () => set((state) => ({
        ...state,
        isLooped: !state.isLooped
    })),

    volume: 0.4,
    setVolume: (value) => set(state => ({
        ...state,
        volume: value
    })),

    // for playlist
    activeIndex: 0,
    setActiveIndex: (value) => set(state => ({
        ...state,
        activeIndex: state.activeIndex += value
    })),

    currentPlayList: [
        {
            id: "1",
            avatar: "/assets/test.jpg",
            name: "Возвращение колдуна",
            authors: ["Король и Шут"],
            musicAudioId: "/sound/test.mp3",

            category: 'Pop' as MusicCategories,

            createdAt: new Date("2021-01-05"), // DateTime
            updatedAt: new Date("2021-01-05"), // DateTime
        },
        {
            id: "2",
            avatar: "/assets/test2.webp",
            name: "Спокойная ночь",
            authors: ["Кино", "В. Цой"],
            musicAudioId: "/sound/test2.mp3",

            category: 'Pop' as MusicCategories,

            createdAt: new Date("2021-01-05"), // DateTime
            updatedAt: new Date("2021-01-05"), // DateTime
        }
    ],
    setCurrentPlayList: (newPlaylist) => set(state => ({
        ...state,
        currentPlayList: newPlaylist
    })),
}))