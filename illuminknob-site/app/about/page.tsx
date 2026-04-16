import type { Metadata } from "next";

import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import {
  aboutStoryHighlights,
  brandPrinciples,
  siteConfig,
} from "@/lib/site-content";
import { siteIcons } from "@/lib/site-icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Illuminknob exists, the mission behind the product, and the brand’s practical accessibility-minded approach to innovation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Illuminknob"
        title="A product idea shaped by practical visibility needs."
        description="Illuminknob is built around a straightforward goal: make a familiar door interaction easier to see and easier to approach in low-light conditions, while keeping the product clean, modern, and realistic."
        aside={
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Mission
            </p>
            <p className="mt-4 text-2xl font-semibold leading-8 text-white">
              {siteConfig.missionStatement}
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We are focused on thoughtful hardware design that supports convenience, visibility,
              and trust without overstating what the product does.
            </p>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why it exists"
            title="The idea came from a small but common nighttime friction point."
            description="Low-light spaces are often designed to feel calm, but they can also make door hardware harder to find. Illuminknob explores how a subtle illuminated edge could make that interaction easier."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {aboutStoryHighlights.map((item) => (
              <article key={item.title} className="surface-panel p-6">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="surface-panel p-8">
              <span className="section-kicker">Brand story</span>
              <h2 className="mt-6 text-3xl font-semibold text-white">
                Accessibility-minded design should also feel well-designed.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Illuminknob is intentionally presented as a practical, premium-feeling product
                rather than a novelty device. The brand story centers on improving a familiar
                object in a way that feels natural for homeowners, families, property teams, and
                hospitality buyers.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                That means clear communication, realistic expectations, honest placeholder
                labeling, and a product narrative that respects both usability and aesthetics.
              </p>
            </div>

            <div className="surface-panel p-8">
              <span className="section-kicker">Who it serves</span>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-300">
                <li>Homeowners looking for practical low-light convenience.</li>
                <li>Older adults and families seeking easier nighttime wayfinding at home.</li>
                <li>People who benefit from better nighttime visibility and clearer hardware.</li>
                <li>Property managers planning thoughtful upgrades across units and common spaces.</li>
                <li>Hotel and hospitality buyers improving comfort in guest-facing environments.</li>
                <li>Builders, contractors, and accessibility-minded specifiers evaluating future-ready concepts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Design principles"
            title="The company positioning stays centered on clarity, usability, and realism."
            description="These principles shape both the product story and the experience of the website."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brandPrinciples.map((item) => {
              const Icon = siteIcons[item.icon];

              return (
                <article key={item.title} className="surface-panel p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="surface-panel flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-kicker">Next step</span>
              <h2 className="mt-6 text-3xl font-semibold text-white">
                Follow the product story or start a partnership conversation.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Use the waitlist for updates or contact the team for distribution,
                accessibility-related, and hospitality inquiries.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={siteConfig.waitlistUrl}>Join the Waitlist</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
