import { ProfileHeader } from "@/modules/shared/profile/profile-header";
import Avatar from "../../../../public/assets/logo.jpg";
import { ProfileTopAuthors } from "@/modules/shared/profile/profile-top-authors";
import { ProfilePlaylists } from "@/modules/shared/profile/profile-playlists";
import { ProfileSubscribers } from "@/modules/shared/profile/profile-subscribers";
import { ProfileFooter } from "@/modules/shared/profile/profile-footer";
import { Container } from "@/components/container/container";

export default function Profile() {
    return (
        <Container>
            <div className="before:content-[''] before:absolute before:w-screen before:h-3/4 bg-gradient-to-t from-black to-orange-800 before:-z-10">
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
            </div>
        </Container>
    );
}
