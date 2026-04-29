import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans dark", geist.variable)}>
      <body
        className={`${interSans.className} antialiased h-screen flex flex-col bg-[#1A181B] selection:bg-[#e0e0e0] selection:text-[#3f3f3f] `}
      >
        <div className="fixed top-0 bottom-auto w-full z-50 backdrop-blur-md">
          <Navbar />
        </div>
        <main className="p-4 flex grow items-center flex-col mt-16 md:mt-22">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
