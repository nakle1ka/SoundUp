import React from "react";
import { Music } from "@/types";
import Image from "next/image";

const Song = ({
    id,
    avatar,
    name,
    category,
    createdAt,
    updatedAt,
    }: Music) => {

        const formattedCreatedAt = createdAt.toLocaleDateString();
        const formattedUpdatedAt = updatedAt.toLocaleDateString();

        return(
            <div>
                <div>
                    <div>{id}</div>
                    <div><Image src={avatar} alt="album cover" width={50} height={50}/></div>
                    <div>
                        <div>{name}</div>
                    </div>
                </div>
                <div>
                    <div>{category}</div>
                    <div>{formattedCreatedAt}</div>
                </div>
                <div>
                    {formattedUpdatedAt}
                </div>
            </div>
        )
    }

    export default Song 