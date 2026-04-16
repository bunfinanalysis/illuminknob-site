"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/site/brand-logo";
import { ButtonLink } from "@/components/site/button-link";
import { primaryNavItems, siteConfig } from "@/lib/site-content";
import { cx } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function isActiveLink(href: string) {
    if (href === pathname) {
      return true;
    }

    if (href.startsWith("/#")) {
      return pathname === "/";
    }

    return false;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,12,22,0.78)] backdrop-blur-xl">
      <div className="container-shell">
        <nav
          className="flex items-center justify-between gap-6 py-4"
          aria-label="Primary"
        >
          <Link href="/" className="shrink-0 text-white" aria-label="Illuminknob home">
            <BrandLogo priority />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActiveLink(item.href)
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/6 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <ButtonLink href={siteConfig.waitlistUrl}>Join the Waitlist</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="mb-4 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_18px_54px_rgba(0,0,0,0.3)] md:hidden"
          >
            <div className="flex flex-col gap-2">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href={siteConfig.waitlistUrl} className="mt-3 justify-center">
                Join the Waitlist
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
