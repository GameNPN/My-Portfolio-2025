
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const Noto_Sans_Thai_init = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "400"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Noto_Sans_Thai_init.className}>
            {children}
      </body>
    </html>
  );
}
