import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Artist Portfolio",
  description: "Artist Portfolio Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 flex min-h-screen">
        <ThemeProvider>
          <Sidebar />
          <div className="flex flex-col flex-grow pl-20"> {/* pl-20 to offset the fixed 20 (w-20) width sidebar */}
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
