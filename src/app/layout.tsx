import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sam | Personal",
  metadataBase: new URL("https://www.google.com"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Sam", url: "https://github.com/" },
    { name: "Sam", url: "https://github.com/" },
  ],
  description: "Sam's site",
  openGraph: {
    title: "Sam | Personal",
    description: "Sam's site",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Sam's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
