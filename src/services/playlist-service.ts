import { getData } from "./utils";

export const getUserPlaylists = getData<Playlist[]>(
    "http://83.222.24.157/api/GetRequestsPlaylist/GetUserPlaylists"
);
