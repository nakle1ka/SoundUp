export type TPlayerStore = { 
    isPaused: boolean;
    setIsPaused: (val: boolean) => void;

    volume: number;
    setVolume: (value: number) => void;

    sliderValue: number;
    setSliderValue: (val: number) => void;

    totalTime: number;
    setTotalTime: (val: number) => void;
    
    currentTime: number;
    setCurrentTime: (val: number) => void;

    isLooped: boolean;
    toggleIsLooped: () => void;
    
    currentPlayList: Music[];
    setCurrentPlayList: (newPlaylist: Music[]) => void;
    
    activeIndex: number;
    setActiveIndex: (value: number) => void;
}