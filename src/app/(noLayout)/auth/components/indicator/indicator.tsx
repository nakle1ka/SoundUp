import { FC } from 'react';

export const Indicator: FC = ({}) => {
    return ( 
        <div className="absolute left-[-20px] top-0 flex h-full items-center">
            <span className=' w-2.5 h-2.5 bg-[#f00] opacity-80 rounded-full transform -translate-y-1/3'></span>
        </div>
    );
}