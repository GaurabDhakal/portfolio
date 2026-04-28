export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-col text-white items-center mt-18  p-2 min-h-screen">{children}</div>;
}
