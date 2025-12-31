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
  metadataBase: new URL("https://samuel-onyebueke.netlify.app/"),
  title: {
    default: "Samuel Onyebueke — Software Developer Portfolio",
    template: "%s | Samuel Onyebueke"
  },
  description:
    "Full-stack developer specializing in Next.js, React, Node.js, Laravel and scalable systems. Explore projects, services, and blog posts.",
  keywords: [
    "Samuel Onyebueke",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Samuel Onyebueke" }],
  creator: "Samuel Onyebueke",
  publisher: "Samuel Onyebueke",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://samuel-onyebueke.netlify.app/",
    title: "Samuel Onyebueke — Full-Stack Developer Portfolio",
    description:
      "Projects, services, and articles on modern web development and performance.",
    siteName: "Samuel Onyebueke Portfolio",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Onyebueke Portfolio"
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Onyebueke — Full-Stack Developer Portfolio",
    description:
      "Projects, services, and articles on modern web development and performance.",
    images: ["/images/hero/hero.jpg"],
    creator: "@samuel_onyebueke",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel='stylesheet' href='https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
