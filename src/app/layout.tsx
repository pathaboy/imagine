import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
          <div className="max-w-6xl mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
