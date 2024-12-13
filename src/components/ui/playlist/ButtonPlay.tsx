'use client'
import React, {ForwardedRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { usePlayStore } from "@/stores/albumStore";

interface ButtonProps {
    className?: string;
    variant?: 'default' | 'primary';
    audioIds: string[]; 
    setCurrentIndex: (index: number) => void; 
    onPlay?: (index: number) => void; 
}

const ButtonPlay = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', audioIds, setCurrentIndex, onPlay, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        const isPlaying = usePlayStore(state => state.isPaus);
        const togglePause = usePlayStore(state => state.paus);
        const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

        const playAudio = (index: number) => {
            if (currentAudio) {
                currentAudio.pause(); 
            }
            const audio = new Audio(audioIds[index]); 
            setCurrentAudio(audio);
            audio.play(); 
            togglePause(); 
            setCurrentIndex(index);
            audio.addEventListener('ended', () => {
                const nextIndex = (index + 1) % audioIds.length; 
                playAudio(nextIndex);
            });
        };

        const handleClick = () => {
            if (isPlaying) {
                currentAudio?.pause();
                togglePause();
            } else {
                if (onPlay) {
                    onPlay(0); 
                }
                playAudio(0); 
            }
        };

        const variantStyles = {
            default: 'bg-[#00ff84] hover:bg-[#5effb1] text-black',
            primary: 'text-white',
        };

        return (
            <button
                ref={ref}
                onClick={handleClick}
                className={`rounded-full flex justify-center items-center ${variantStyles[variant]} ${className}`}
                {...props}
            >
                {isPlaying ? <Pause /> : <Play />}
            </button>
        );
    }
);

export default ButtonPlay;