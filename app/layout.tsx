import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800", "900"],
});
import { Footer } from "@/components/Footer";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` selection:bg-[#e0e0e0] selection:text-[#3f3f3f] ${interSans.className} antialiased absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#262d26_1px,transparent_1px)] [background-size:16px_16px] space-y-10`}
            >
                <div className="fixed bottom-0 w-full  lg:sticky lg:top-0">
                    <Navbar></Navbar>
                </div>
                <main className="p-4 lg:p-0"> <Providers>{children}</Providers></main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
