import { ProfileHeader } from "@/modules/shared/profile-header/profile-header";
import Avatar from "../../../../public/assets/logo.jpg";
import { ProfileTopAuthors } from "@/modules/shared/profile-header/profile-top-authors";
import { ProfilePlaylists } from "@/modules/shared/profile-header/profile-playlists";
import { ProfileSubscribers } from "@/modules/shared/profile-header/profile-subscribers";
import { ProfileFooter } from "@/modules/shared/profile-header/profile-footer";

export default function Profile() {
    return (
        <>
            <ProfileHeader
                image={Avatar}
                name="CatMario"
                subsribeCount={5}
                openPlaylistCount={5}
            />
            <ProfileTopAuthors />
            <ProfilePlaylists />
            <ProfileSubscribers />
            <ProfileFooter />
        </>
    );
}
