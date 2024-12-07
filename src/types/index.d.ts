enum MusicCategories {
    Pop = 'Pop',
    HipHop = 'HipHop',
    Rock = 'Rock',
    Electronic = 'Electronic',
    Phonk = 'Phonk',
    Country = 'Country',
    Jazz = 'Jazz',
    Indie = 'Indie',
    Classical = 'Classical'
}

    interface Music {
    id: string;
    avatar: string;
    name: string;
    authors: string[];
    musicAudioId: string;

    category: string;

    createdAt: Date; // DateTime
    updatedAt: Date; // DateTime
}

interface MusicAudio {
    id: string;
    musicId: string;
    audio: string;
}

interface User {
    id: string;

    avatar: string;
    name: string;
    password: string;
    userType: "User" | "UserAuthor";
    listenHistory: Music[];

    createdAt: Date;
    updatedAt: Date;
}

interface Playlist {
    id: string;

    avatar: string;
    name: string;
    creator: User;

    createdAt: Date;
    updatedAt: Date;
}

interface Album {
    id: string;
    authorId: string;

    avatar: string;
    name: string;
    description: string;
}