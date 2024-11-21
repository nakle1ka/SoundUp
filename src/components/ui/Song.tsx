import React from "react";
import { Music } from "@/types";
import Image from "next/image";



const Song: React.FC<Music> = ({id, name, authors}) => {
    return (
    <div>
        <div>
            {id}
            <div>
                {/* <Image src={} alt=""/> */}
            </div>
            <div>
                <div>{name}</div>
                <div>{authors}</div>
            </div>
        </div>
        <div>
            
        </div>
        <div>

        </div>
    </div>
    );
};

export default Song;