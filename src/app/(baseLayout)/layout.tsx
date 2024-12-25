import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { Poppins } from "next/font/google";
import styles from "./styles/layout.module.scss";
import "../globals.css";
import { LayoutWrapper } from "@/modules/layout/layoutWrapper/layoutWrapper";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SoundUp",
    description: "This is SoundUp page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <div className={styles.wrapper}>
                    <Header />
                    <Container id={styles.container}>
                        <LayoutPlaylists />
                        <main className={styles.main}>{children}</main>
                        <MusicList />
                    </Container>
                    <Player />
                </div>
            </body>
        </html>
    );
}
