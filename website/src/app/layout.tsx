import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = {
  default: "The Leverage Report — Free AI-Money Toolkit",
  template: "%s — The Leverage Report",
};
const description =
  "Free tools to write better AI prompts, cut wasted subscriptions, plan savings, and ask for more money. No fluff, no signup, no cost.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, siteName: "The Leverage Report", type: "website" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#FBF6E9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-surface"
        >
          Skip to content
        </a>
        <Header />
        {/* tabIndex={-1}: makes the target programmatically focusable so the
            skip link actually moves keyboard focus here, not just scrolls to
            it. Without this, activating the skip link leaves focus on
            <body> — confirmed via a real focus() + click() test — so the
            very next Tab press silently starts back at the top of the page,
            defeating the whole point of the link. `outline-none` here only
            suppresses the ring around this one giant wrapper (which would
            otherwise draw an ugly box around the entire page); the very next
            Tab press moves to the first real focusable element inside main,
            which still shows its own normal focus ring. */}
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
