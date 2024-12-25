import { create } from 'zustand'
import { TLayoutStore } from './types/layout'

export const useLayoutStore = create<TLayoutStore>()((set) => ({
    isMusicListOpened: true,
    toggleIsMusicListOpened: () => set((state) => ({
        ...state,
        isMusicListOpened: !state.isMusicListOpened
    })),
}))