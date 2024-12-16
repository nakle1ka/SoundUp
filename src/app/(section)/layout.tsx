'use client'
import React from "react";
import "../globals.css";

interface LayoutRepertoireProps {
    children: React.ReactNode;
}

const LayoutRepertoire: React.FC<LayoutRepertoireProps> = ({ children }) => {
    return (
        <html>
            <body>
                <div className="bg-[#121212] rounded-lg text-white">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default LayoutRepertoire;