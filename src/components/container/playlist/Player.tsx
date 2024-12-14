'use client'
import React, {useEffect} from "react"
import ButtonPlay from "@/components/ui/playlist/ButtonPlay"
import List from "@/components/ui/playlist/List"
import {useAlbumStore} from "@/stores/albumStore";
import {usePlayStore} from "@/stores/albumStore";
import { useColorAlbum } from "@/stores/albumStore";

const Player = () => {
    const playlist = useAlbumStore(state => state.PlayList)
    const { paus, setCurrentIndex,  setAudioIds } = usePlayStore();
    const {bgColor} = useColorAlbum()

    useEffect(() => {
        const ids = playlist.map(song => song.musicAudioId);
        setAudioIds(ids);
    }, [playlist, setAudioIds]);

    const handlePlay = (index: number) => {
        setCurrentIndex(index); 
        paus();
    };


    return (
        <div 
            className="h-[120px] p-5 flex justify-between items-center" 
        >
            <div className = "w-[50px]">
                <ButtonPlay 
                    className="w-[60px] h-[60px]" 
                    variant="default" 
                    audioIds={playlist.map(s => s.musicAudioId)}
                    setCurrentIndex={setCurrentIndex} 
                    onPlay={handlePlay} 
                />
            </div>
            <div className = "w-[100px]"><List/></div>
        </div>
    )
}

export default Player