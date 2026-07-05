import type { Metadata } from "next";
import { sunghyunSans } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SiteDock } from "@/components/layout/SiteDock";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ExternalLinkConfirm } from "@/components/shared/ExternalLinkConfirm";
import { BackToTop } from "@/components/shared/BackToTop";
import "./globals.css";

const title = "Liam Flores — Portfolio";
const description =
  "Portfolio of Liam Jed M. Flores - IT Specialist & Systems Engineer specializing in Laravel, PHP, JavaScript, and web development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://liamflores.onrender.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sunghyunSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Footer />
            <SiteDock />
            <ExternalLinkConfirm />
            <BackToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
