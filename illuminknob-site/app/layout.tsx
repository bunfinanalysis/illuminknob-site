import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteAccessGate } from "@/components/site/site-access-gate";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/lib/site-content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://illuminknob.example"),
  title: {
    default: "Illuminknob | Illuminated Door Hardware for Better Night Visibility",
    template: "%s | Illuminknob",
  },
  description:
    "Illuminknob is a modern illuminated doorknob concept designed to make doors easier to find in low-light spaces for homes, hospitality, and accessibility-minded environments.",
  keywords: [
    "illuminated doorknob",
    "low-light visibility",
    "accessible hardware",
    "night visibility",
    "hospitality door hardware",
    "home accessibility",
  ],
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Illuminknob | Illuminated Door Hardware for Better Night Visibility",
    description:
      "A practical, modern doorknob concept with built-in illumination around the base and rim.",
    url: "/",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Illuminknob",
    description:
      "A clearer way to find the door at night through practical illuminated hardware design.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteAccessGate>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
          >
            Skip to content
          </a>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </SiteAccessGate>
      </body>
    </html>
  );
}
