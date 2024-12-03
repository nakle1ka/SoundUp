'use client'
import React from "react"
import { Play } from 'lucide-react';

const ButtonPlay = () => {
    return(
        <button className="w-[55px] h-[55px] bg-[#00ff84] rounded-full flex justify-center items-center hover:scale-105 hover:bg-[#5effb1]">
            <Play className="text-black "/>
        </button>
    )
}

export default ButtonPlay