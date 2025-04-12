import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Michel Herrera | Software Engineer",
  description: "Associate Software Engineer portfolio showcasing skills, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          .next-logo {
            display: none !important;
          }
        `}</style>
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
