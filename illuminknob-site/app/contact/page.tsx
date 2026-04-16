import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/lib/site-content";
import { siteIcons } from "@/lib/site-icons";
import { buttonVariants } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Illuminknob through the partnership inquiry form for hospitality, distribution, builder, and accessibility-related conversations.",
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
        title="Start a partnership, investment, or contractor conversation."
        description="If you are interested in manufacturing, distribution, accessibility solutions, investment opportunities, or future product availability, complete the inquiry form and our team may follow up."
        aside={
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Partnership inquiry
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Use the short hosted form to share interest, buying context, and the kind of conversation you want to start.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.partnershipFormUrl}
                className={buttonVariants("primary")}
              >
                Open Partnership Form
              </a>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className={`${buttonVariants("secondary")} justify-start`}
              >
                <Mail className="h-4 w-4 text-cyan-100" />
                {siteConfig.supportEmail}
              </a>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              The inquiry form is hosted on Google Forms for a simpler contact workflow.
            </p>
          </div>
        }
      />
    </>
  );
}
