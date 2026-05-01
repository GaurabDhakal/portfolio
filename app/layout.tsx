import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  applicationName: "Gaurab Dhakal",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Gaurab Dhakal",
    "Gaurab Dhakal developer",
    "Gaurab Dhakal portfolio",
    "Gaurab Dhakal Nepal",
    "web developer Nepal",
    "full stack developer Nepal",
    "Next.js developer Nepal",
    "React developer portfolio",
    "JavaScript developer portfolio",
    "AI enthusiast Nepal",
    "aspiring data scientist Nepal",
    "frontend developer portfolio",
    "backend developer portfolio",
    "student developer Nepal",
    "hire web developer Nepal",
    "portfolio website developer Nepal",
  ],
  creator: "Gaurab Dhakal",

  title: {
    default: "Gaurab Dhakal",
    template: "%s - Gaurab",
  },
  description: "Full stack developer and aspiring Ai/ML Engineer",
  openGraph: {
    url: "https://gaurabdhakal.com.np",
    siteName: "Gaurab Dhakal",
    title: "Gaurab Dhakal",
    description: "Full stack developer and aspiring Ai/ML Engineer",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans dark", geist.variable)}>
      <body
        className={`${interSans.className} antialiased h-screen flex flex-col bg-[#1A181B] selection:bg-[#e0e0e0] selection:text-[#3f3f3f] `}
      >
        <div className="fixed top-0 bottom-auto w-full z-50 backdrop-blur-md">
          <Navbar />
        </div>
        <main className="py-4 px-3 flex grow items-center flex-col mt-16 md:mt-22">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
