'use client'
import React, { useState } from "react";
import { CirclePlus, Check } from 'lucide-react';

interface AddMediaButtonProps {
    className?: string
}

const AddMediaButton: React.FC<AddMediaButtonProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <button 
            className={`flex items-center justify-center p-2 rounded-full ${isOpen ? 'bg-[#00ff84]' : 'bg-transparent'} ${className}`} 
            onClick={toggleDropdown}
        >
            {isOpen ? <Check className="w-[20px] h-[20px] text-black" /> : <CirclePlus className={`w-[35px] h-[35px]`} />}
        </button>
    );
}

export default AddMediaButton;