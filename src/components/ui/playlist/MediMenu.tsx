'use client'
import React from "react";
import { Ellipsis } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { useAlbumStore } from "@/stores/albumStore";
import { Plus } from 'lucide-react';

interface MediaMenuProps {
    className?: string;
}

const MediaMenu: React.FC<MediaMenuProps> = ({ className }) => {
    const { isOpen, setIsOpen } = useAlbumStore();

    return (
        <div className="relative">
            <button className={`w-[35px] h-[35px] ${className}`} onClick={setIsOpen}>
                <Ellipsis />
            </button>
            {isOpen && (
                <div className="absolute w-[200px] h-[80px] bg-[#1f1f1f] rounded shadow-xl p-[5px] z-[222]">
                    <div>
                        <button className="flex h-[30px] mb-[10px] w-full rounded hover:bg-[#ffffff23]"><CirclePlus className="mr-[10px]"/> Add a media library</button>
                        <button className="flex h-[30px] w-full rounded hover:bg-[#ffffff23]"><Plus className="mr-[10px]"/> Add to playlist</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MediaMenu;