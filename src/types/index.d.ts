enum MusicCategories {
    Pop,
    HipHop,
    Rock,
    Electronic,
    Phonk,
    Country,
    Jazz,
    Indie,
    Classical
}

interface Music {
    id: string;
    avatar: string;
    name: string;
    musicAudioId: string;

    category: MusicCategories;

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