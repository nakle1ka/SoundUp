import { ProfileHeader } from "@/modules/profile/profile-header";
import { ProfileTopAuthors } from "@/modules/profile/profile-top-authors";
import { ProfilePlaylists } from "@/modules/profile/profile-playlists";
import { ProfileSubscribers } from "@/modules/profile/profile-subscribers";
import { ProfileFooter } from "@/modules/profile/profile-footer";
import { ProfileTopBg } from "@/components/profile/profile-top-bg";

export default function Profile() {
    return (
        <div className="relative z-10 flex flex-col min-h-full">
            <ProfileTopBg />
            <ProfileHeader className="relative z-30" />
            <ProfileTopAuthors className="relative z-30" />
            <ProfilePlaylists className="relative z-30" />
            <ProfileSubscribers className="relative z-30" />
            <ProfileFooter className="relative z-30" />
        </div>
    );
}
