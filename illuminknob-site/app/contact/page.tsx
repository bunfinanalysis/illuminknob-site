import type { Metadata } from "next";

import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import {
  contactReasons,
  siteConfig,
} from "@/lib/site-content";
import { siteIcons } from "@/lib/site-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Illuminknob for product information, waitlist questions, partnerships, hospitality distribution, and accessibility-related inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const Mail = siteIcons.mail;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a product, partnership, or accessibility conversation."
        description="Distributors, hospitality teams, builders, accessibility partners, property managers, and interested homeowners can use the form below to request information or begin a discussion."
        aside={
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Contact details
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Reach out by email below for product questions, partnerships, and accessibility-related inquiries.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-100" />
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="surface-panel p-6 sm:p-8">
                <span className="section-kicker">Who should reach out</span>
                <p className="mt-6 text-2xl font-semibold text-white">
                  Product information, hospitality, distribution, and accessibility inquiries are welcome.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  If you are evaluating Illuminknob for residential use, guest spaces, new
                  builds, or broader accessibility-minded planning, this page is the right place
                  to start.
                </p>
              </div>

              {contactReasons.map((item) => {
                const Icon = siteIcons[item.icon];

                return (
                  <article key={item.title} className="surface-panel p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
