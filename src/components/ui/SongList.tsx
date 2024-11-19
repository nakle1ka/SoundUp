import { useState } from "react";
import React  from "react";
import Song from "./Song";


const SongList = () => {

    const [songs, setSongs] = useState()

    return(
        <div>
            {songs.map((songs) =>
                <Song songs = />
            )}
        </div>
    )
}

export default SongList