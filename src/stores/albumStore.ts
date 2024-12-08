import { create } from 'zustand';

interface ButtonStore {
    isPaus: boolean;
    paus: () => void;
}

const usePlayStore = create<ButtonStore>((set) => ({
    isPaus: false,
    paus: () => set((state) => ({ isPaus: !state.isPaus })),
}));


interface AlbumStore {
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
}

const useAlbumStore = create<AlbumStore>((set) => ({
    hoveredIndex: null,
    setHoveredIndex: (index) => set({ hoveredIndex: index }),
}));


export { usePlayStore, useAlbumStore };