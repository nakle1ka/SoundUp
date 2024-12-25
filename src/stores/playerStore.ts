import { create } from 'zustand'
import { TPlayerStore } from './types/player'

export const usePlayerStore = create<TPlayerStore>()((set) => ({
    isPaused: true,
    setIsPaused: (val) => set((state) => ({
        ...state,
        isPaused: val
    })),

    volume: 0.4,
    setVolume: (value) => set(state => ({
        ...state,
        volume: value
    })),

    sliderValue: 0,
    setSliderValue: (value) => set(state => ({
        ...state,
        sliderValue: value
    })),

    totalTime: 0,
    setTotalTime: (value) => set(state => ({
        ...state,
        totalTime: value
    })), 

    currentTime: 0,
    setCurrentTime: (value: number) => set(state => ({
        ...state,
        currentTime: value
    })), 

    isLooped: true,
    toggleIsLooped: () => set((state) => ({
        ...state,
        isLooped: !state.isLooped
    })),

    // for playlist
    activeIndex: 0,
    setActiveIndex: (value) => set(state => ({
        ...state,
        activeIndex: state.activeIndex = value
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