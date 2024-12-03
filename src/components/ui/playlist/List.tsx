'use client'
import React, {useState} from "react"
import { Logs } from 'lucide-react';
import { AlignJustify } from 'lucide-react';

const List = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return(
        <div className="relative">
            <button className="" onClick={toggleDropdown}>
                <div className="inline-block">list</div>
                <Logs className="inline-block ml-[5px]"/>
            </button>
        {isOpen && (
            <div className="bg-[#1f1f1f] absolute rounded w-[100px]">
                <p>формат библиотеки</p>
                <div><AlignJustify className="inline-block"/><p className="inline-block">сompact</p></div>
                <div><Logs className="inline-block"/><p className="inline-block">list</p></div>
            </div>
        )}
        </div>
    )
}

export default List