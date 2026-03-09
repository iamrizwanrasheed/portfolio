import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

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
  title: "Muhammad Rizwan | Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience building high-performance web and mobile applications using React.js, React Native, Node.js, and TypeScript.",
  keywords: [
    "Muhammad Rizwan",
    "Senior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "TypeScript",
    "Full Stack Developer",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Muhammad Rizwan" }],
  openGraph: {
    title: "Muhammad Rizwan | Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience building high-performance web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rizwan | Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience building high-performance web and mobile applications.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
