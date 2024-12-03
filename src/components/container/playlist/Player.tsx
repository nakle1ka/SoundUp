'use client'
import React from "react"
import ButtonPlay from "@/components/ui/playlist/ButtonPlay"
import List from "@/components/ui/playlist/List"

const Player = () => {
    return (
        <div className="h-[120px] p-5 flex justify-between items-center">
            <div className = "w-[50px]"><ButtonPlay/></div>
            <div className = "w-[100px]"><List/></div>
        </div>
    )
}

export default Player