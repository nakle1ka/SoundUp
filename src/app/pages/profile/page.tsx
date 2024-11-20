import { ProfileHeader } from "@/modules/profile/profile-header";
import Avatar from "../../../../public/assets/logo.jpg";
import { ProfileTopAuthors } from "@/modules/profile/profile-top-authors";
import { ProfilePlaylists } from "@/modules/profile/profile-playlists";
import { ProfileSubscribers } from "@/modules/profile/profile-subscribers";
import { ProfileFooter } from "@/modules/profile/profile-footer";
import { Container } from "@/components/container/container";

export default function Profile() {
    return (
        <Container>
            <div className="before:content-[''] before:absolute before:w-screen before:h-3/4 before:bg-gradient-to-t before:from-transparent before:to-orange-800 before:-z-10">
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
