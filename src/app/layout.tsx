import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Text Video Generator",
  description: "Create short videos at the speed of thought.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <Provider>
          <main className="max-w-6xl mx-auto">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
