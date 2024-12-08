"use client"
import React, { ButtonHTMLAttributes, ForwardedRef } from "react";
import { Play, Pause } from 'lucide-react';
import {usePlayStore} from "@/stores/albumStore";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
    variant?: 'default' | 'primary'; 
}

const ButtonPlay = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        const isOpen = usePlayStore(state => state.isPaus);
        const paus = usePlayStore(state => state.paus);

        const variantStyles = {
            default: 'bg-[#00ff84] hover:bg-[#5effb1] text-black',
            primary: 'text-white',
        };

        return(
            <button 
                ref={ref}
                onClick={paus}
                className={`rounded-full flex justify-center items-center ${variantStyles[variant]} ${className}`}
                {...props}
            >
                {isOpen ? <Pause/> : <Play/>}
            </button>
        );
    }
);

export default ButtonPlay;