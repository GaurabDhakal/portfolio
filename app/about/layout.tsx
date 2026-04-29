import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my personl life, like my studies and technologies I'm good at.",
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
