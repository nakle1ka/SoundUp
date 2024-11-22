'use client'
import React from "react";


interface LayoutRepertoireProps {
    children: React.ReactNode;
}

const LayoutRepertoire: React.FC<LayoutRepertoireProps> = ({ children }) => {
    return (
        <div className="bg-[#121212] rounded-lg text-white p-5">
            {children}
        </div>
    );
};

export default LayoutRepertoire;