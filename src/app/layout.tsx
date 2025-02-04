import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar  from "../Components/Navbar"
import Footer from "../Components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Avion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <header className="overflow-x-hidden flex">
         <Navbar />
          </header>
          <main>{children}</main>
    
        <Footer/>
      </body>
    </html>
  );
}
