import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "axdrsh",
  description: "my personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="absolute right-4 top-4">
            <ModeToggle />
          </div>
          <main className="min-h-screen p-8 md:p-24 max-w-2xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
