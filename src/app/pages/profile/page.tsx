import { ProfileHeader } from "@/modules/profile/profile-header";
import Avatar from "../../../../public/assets/logo.jpg";
import { ProfileTopAuthors } from "@/modules/profile/profile-top-authors";
import { ProfilePlaylists } from "@/modules/profile/profile-playlists";
import { ProfileSubscribers } from "@/modules/profile/profile-subscribers";
import { ProfileFooter } from "@/modules/profile/profile-footer";
import { ProfileTopBg } from "@/components/profile/profile-top-bg";

export default function Profile() {
    return (
        <div className="w-3/4 h-[800px] overflow-auto relative">
            <ProfileTopBg>
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
            </ProfileTopBg>
        </div>
    );
}
