import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/next";

export const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Thin.otf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: "--font-neue",
  display: "swap",

});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Game Theory",
  description: "A collection of game theory simulations and visualizations.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon",
      url: "/logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myFont.variable} ${myFont.className} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-20">
          {children}
          <div className="flex flex-col items-center text-white justify-center my-8" >
            <p className="hover:cursor-default text-md font-bold">An Aidan Younathan Production</p>
            <p><a className="hover:underline" href="https://github.com/aidanyounathan">My GitHub</a></p>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
