import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Michel Herrera | Software Engineer | Full Stack Developer",
  description: "Software Engineer portfolio showcasing skills in React, Node.js, TypeScript, and modern web technologies. Full-stack developer with expertise in frontend and backend development.",
  keywords: "Software Engineer, Full Stack Developer, React Developer, Web Developer, Frontend Developer, Backend Developer, JavaScript, TypeScript, Node.js, Next.js, Portfolio",
  authors: [{ name: "Michel Herrera" }],
  creator: "Michel Herrera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michelherrera.com",
    title: "Michel Herrera | Software Engineer",
    description: "Software Engineer portfolio showcasing skills in React, Node.js, TypeScript, and modern web technologies.",
    siteName: "Michel Herrera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michel Herrera | Software Engineer",
    description: "Software Engineer portfolio showcasing skills in React, Node.js, TypeScript, and modern web technologies.",
    creator: "@michelherrera",
  },
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
          defaultTheme="dark"
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
