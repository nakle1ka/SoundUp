import { TPlayerStore } from '@/stores/types/player';

export const handleClickNext = (store: TPlayerStore) => {
    if (store.activeIndex < store.currentPlayList.length - 1) {
        store.setActiveIndex(store.activeIndex + 1)
        store.setSliderValue(0)
        store.setIsFavourited(false)
    }
    else if (store.activeIndex === store.currentPlayList.length - 1 && store.isLooped && store.currentPlayList.length != 1) {
        store.setActiveIndex(0)
        store.setSliderValue(0)
        store.setIsFavourited(false)
    }
}

export const handleClickPrev = (store: TPlayerStore) => {
    if (store.activeIndex > 0) store.setActiveIndex(store.activeIndex - 1)
}