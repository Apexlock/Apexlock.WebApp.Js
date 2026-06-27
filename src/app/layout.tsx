import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} - Sistemas que resisten la escala`,
  description: siteConfig.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${siteConfig.brandName} - Sistemas que resisten la escala`,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.brandName,
    locale: "es_AR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
