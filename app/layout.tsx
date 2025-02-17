import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interSans.className} antialiased min-h-screen flex flex-col bg-black bg-[radial-gradient(#262d26_1px,transparent_1px)] [background-size:16px_16px] selection:bg-[#e0e0e0] selection:text-[#3f3f3f]`}
            >
                <div className="fixed bottom-0 lg:fixed lg:top-0 lg:bottom-auto w-full z-50 sm:backdrop-blur-md">
                    <Navbar />
                </div>
                <main className="flex-grow p-4 lg:p-0 mb-16 lg:mb-0 lg:mt-16">
                    <Suspense
                        fallback={
                            <span className="text-red-800 flex items-center justify-center">
                                Loading......
                            </span>
                        }
                    >
                        <Providers>{children}</Providers>
                    </Suspense>
                </main>
                <Footer />
            </body>
        </html>
    );
}
