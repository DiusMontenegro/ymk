import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Poppins, Roboto, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import React from "react";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"],
});

const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    variable: "--font-bodoni-moda",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: { default: "YMK Beauty Japan", template: "%s - YMK Beauty Japan" },
    description:
        "Reveal Your Radiance with YMK Beauty All-in-One Facial Lotion Our All-in-One Facial Lotion is expertly crafted to deliver everything your skin needs in a single bottle. Formulated in Japan and assembled in the Philippines, it combines cutting-edge nano-tech innovation with the nourishing power of nature to hydrate, protect, and rejuvenate your skin. Enriched with skin-loving ingredients, this lightweight lotion is designed for all skin types, leaving your face soft, smooth, and glowing. YMK Beauty ensures every product is cruelty-free, responsibly crafted, and meets the highest standards of skincare. Let your journey to radiant, healthy skin start with YMK Beauty—a brand that takes care of your skin and celebrates your beauty.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${roboto.variable} ${bodoniModa.variable} antialiased`}>
                <header>
                    <Navbar />
                </header>

                {children}

                <Footer />
            </body>
        </html>
    );
}
