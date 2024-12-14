import { ProfileHeader } from "@/modules/profile/profile-header";
import { ProfilePlaylists } from "@/modules/profile/profile-playlists";
import { ProfileFooter } from "@/modules/profile/profile-footer";
import { ProfileTopBg } from "@/components/profile/profile-top-bg";

export default function Profile() {
    return (
        <div className="relative z-10 flex flex-col min-h-full">
            <ProfileTopBg />
            <ProfileHeader className="relative z-30" />
            <ProfilePlaylists className="relative z-30" />
            <ProfileFooter className="relative z-30" />
        </div>
    );
}
