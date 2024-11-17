import type { Metadata } from "next";

import { Header } from "@/modules/shared/header";
import { Container } from "@/components/container/container";

import { Poppins } from "next/font/google"
import styles from "./styles/layout.module.scss"
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

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
      <body
        className={`${poppins.className}`}
      >
        {/* <div className={styles.wrapper}> */}
          {/* <Header /> */}
          {/* <Container id={styles.container}> */}
            <main>
              {children}
            </main>
          {/* </Container> */}
        {/* </div> */}
      </body>
    </html>
  );
}
