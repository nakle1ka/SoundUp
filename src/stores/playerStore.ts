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

    isFavourited: false,
    setIsFavourited: (val) => set(state => ({
        ...state,
        isFavourited: val
    })),

    // for playlist
    activeIndex: 0,
    setActiveIndex: (value) => set(state => ({
        ...state,
        activeIndex: state.activeIndex = value
    })),

    currentPlayList: [
        {
            "id": "31702dfc-052e-4d68-9a8d-28081d35906b",
            "authorId": "b68a5425-12f8-4a92-b334-60278dc5fee7",
            "audioId": "3de1eace-66f4-44e1-a5c3-f1293f59ec94",
            "albumId": "756b3751-b6d1-4760-8cd6-e9bd814a1458",
            "albumName": "Hello",
            "name": "возвращение колдуна",
            "avatar": "/assets/test.jpg",
            "category": "Pop" as MusicCategories,
            "isFavourited": false,
            "createdAt": "2025-01-01T19:34:59.858736Z",
            "updatedAt": "2025-01-01T19:34:59.858818Z",
            "authorsNames": [
                "nakle1ka"
            ]
        },
        // {
        //     id: "1",
        //     albumId: "",
        //     albumName: "hello",
        //     audioId: "",
        //     authorId: "",
        //     avatar: "/assets/test.jpg",
        //     name: "Возвращение колдуна",
        //     authorsNames: ["Король и Шут"],
        //     musicAudio: "/sound/test.mp3",

        //     category: 'Pop' as MusicCategories,

        //     createdAt: new Date("2021-01-05"), // DateTime
        //     updatedAt: new Date("2021-01-05"), // DateTime
        // },
        // {
        //     id: "2",
        //     albumId: "",
        //     albumName: "hello",
        //     audioId: "",
        //     authorId: "",
        //     avatar: "/assets/test2.webp",
        //     name: "Спокойная ночь",
        //     authorsNames: ["Кино", "В. Цой"],
        //     musicAudio: "/sound/test2.mp3",

        //     category: 'Pop' as MusicCategories,

        //     createdAt: new Date("2021-01-05"), // DateTime
        //     updatedAt: new Date("2021-01-05"), // DateTime
        // }
    ],
    setCurrentPlayList: (newPlaylist) => set(state => ({
        ...state,
        currentPlayList: newPlaylist
    })),
}))