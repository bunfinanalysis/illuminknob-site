import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";
import { primaryNavItems, siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(4,10,18,0.92)]">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="max-w-xl">
            <BrandLogo size="footer" />
            <p className="mt-4 text-sm text-slate-400">{siteConfig.shortDescription}</p>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Built to communicate Illuminknob’s mission with clear, accessibility-minded
              messaging. Contact details and some product preview details remain clearly
              marked placeholders until launch.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
              Placeholder Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white">
                  {siteConfig.supportEmail}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.partnerEmail}`} className="hover:text-white">
                  {siteConfig.partnerEmail}
                </a>
              </li>
              <li>
                <a href="tel:+15550102486" className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-sm text-slate-500">
          <p>© 2026 Illuminknob. Demo site with placeholder launch details.</p>
        </div>
      </div>
    </footer>
  );
}
