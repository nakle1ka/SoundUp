'use client'
import React from "react";
import { CirclePlus } from 'lucide-react';


interface AddMediaButtonProps {
    className?: string
}

const AddMediaButton: React.FC<AddMediaButtonProps>  = ({className}) => {

    return(
        <button>
            <CirclePlus className={`w-[35px] h-[35px] ${className}`}/>
        </button>
    )
}

export default AddMediaButton