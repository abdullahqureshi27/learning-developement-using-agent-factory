import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Factory — Authentication & Agent Portal",
  description: "Secure multi-provider authentication and AI agent management dashboard built with Next.js and Better Auth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between bg-background text-foreground">
        <AuthProvider>{children}</AuthProvider>
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-4 px-6 text-center text-xs text-gray-600 dark:text-gray-400">
          Designed &amp; Built by{" "}
          <a
            href="https://abdullah-qureshi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
          >
            Abdullah Qureshi
          </a>
        </footer>
      </body>
    </html>
  );
}

