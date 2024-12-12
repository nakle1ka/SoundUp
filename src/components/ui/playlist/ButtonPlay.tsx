"use client";
import React, { ButtonHTMLAttributes, ForwardedRef, useState } from "react";
import { Play, Pause } from 'lucide-react';
import { usePlayStore } from "@/stores/albumStore";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
    variant?: 'default' | 'primary'; 
    audioId?: string;
}

const ButtonPlay = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, audioId, variant = 'default', ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        const isOpen = usePlayStore(state => state.isPaus);
        const paus = usePlayStore(state => state.paus);
        
        const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

        const playAudio = (audioId: string) => {
            try {
                if (currentAudio) {
                    currentAudio.pause(); 
                }
                const audio = new Audio(audioId); 
                setCurrentAudio(audio); 
                audio.play();
                audio.onended = () => setCurrentAudio(null); 
            } catch (error) {
                console.error("Ошибка при воспроизведении аудио:", error); 
            }
        };

        const handleClick = () => {
            playAudio(audioId);
            paus();
        };

        const variantStyles = {
            default: 'bg-[#00ff84] hover:bg-[#5effb1] text-black',
            primary: 'text-white',
        };

        return(
            <button 
                ref={ref}
                onClick={handleClick}
                className={`rounded-full flex justify-center items-center ${variantStyles[variant]} ${className}`}
                {...props}
            >
                {isOpen ? <Pause/> : <Play/>}
            </button>
        );
    }
);

export default ButtonPlay;