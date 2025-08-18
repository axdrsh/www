import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "adarsh.",
  description: "my personal website - a graph of thoughts, notes, and ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <nav className="max-w-2xl mx-auto px-6 py-6 font-mono">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                /home
              </Link>
              <Link
                href="/devlog"
                className="hover:opacity-70 transition-opacity"
              >
                /devlog
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-2xl mx-auto px-6 pb-12 font-mono">
          {children}
        </main>
        <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-gray-700 font-mono">
          <div className="flex justify-between items-center text-xs opacity-70">
            <p>© 2025 adarsh.</p>
            <Link href="#top" className="hover:opacity-70 transition-opacity">
              to the top
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
