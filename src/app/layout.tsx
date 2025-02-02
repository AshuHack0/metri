import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jyoti's Profile",
  description: "Namaste! I am a cultured individual who values both modern thinking and traditional values. I am deeply rooted in our cultural heritage while embracing contemporary lifestyle. - वैवाहिक परिचय",
  openGraph: {
    title: "Jyoti's Profile",
    description: "Namaste! I am a cultured individual who values both modern thinking and traditional values. I am deeply rooted in our cultural heritage while embracing contemporary lifestyle. - वैवाहिक परिचय",
    images: [
      {
        url: '/jyoti.jpg',  // Make sure this matches your image path in public folder
        width: 800,
        height: 600,
        alt: "Jyoti's Profile Picture",
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jyoti's Profile",
    description: "Marriage Biodata - वैवाहिक परिचय",
    images: ['/jyoti.jpg'], // Make sure this matches your image path in public folder
  },
  icons: {
    icon: '/jyoti.jpg',  // This will be used as favicon
    shortcut: '/jyoti.jpg',
    apple: '/jyoti.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/jyoti.jpg',
    },
  },
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
        {children}
      </body>
    </html>
  );
}
