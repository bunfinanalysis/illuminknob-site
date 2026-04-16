import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";
import { primaryNavItems, siteConfig, teamLinkedInLinks } from "@/lib/site-content";

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
              messaging. Some product preview details remain clearly marked placeholders
              until launch.
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
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white">
                  {siteConfig.supportEmail}
                </a>
              </li>
              {siteConfig.partnerEmail && siteConfig.partnerEmail !== siteConfig.supportEmail ? (
                <li>
                  <a href={`mailto:${siteConfig.partnerEmail}`} className="hover:text-white">
                    {siteConfig.partnerEmail}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <section
          aria-labelledby="footer-team-linkedin"
          className="mt-10 rounded-[28px] border border-white/8 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                Team Contact
              </p>
              <h2
                id="footer-team-linkedin"
                className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Connect with the Illuminknob team on LinkedIn
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Reach out directly for founder introductions, partnership conversations, and
                product-related networking.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {teamLinkedInLinks.map((member) => (
                <a
                  key={member.name}
                  href={member.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-[rgba(12,20,34,0.9)] px-5 py-5 text-base font-medium text-slate-100 transition hover:border-amber-300/30 hover:text-white"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    LinkedIn
                  </span>
                  <span className="mt-3 block text-lg font-semibold tracking-tight text-white">
                    {member.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 border-t border-white/8 pt-6">
          <p className="text-sm text-slate-500">
            © 2026 Illuminknob. Demo site with placeholder launch details.
          </p>
        </div>
      </div>
    </footer>
  );
}
