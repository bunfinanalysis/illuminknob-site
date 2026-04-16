import { ButtonLink } from "@/components/site/button-link";
import { FaqList } from "@/components/site/faq-list";
import { PrototypeShowcase } from "@/components/site/prototype-showcase";
import { SectionHeading } from "@/components/site/section-heading";
import { WaitlistForm } from "@/components/site/waitlist-form";
import {
  benefitCards,
  brandPrinciples,
  faqs,
  problemPoints,
  siteConfig,
  solutionSteps,
  useCases,
} from "@/lib/site-content";
import { siteIcons } from "@/lib/site-icons";

export default function HomePage() {
  const ArrowRight = siteIcons.arrowRight;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-35" />
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(103,214,255,0.16),transparent_68%)] blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(243,195,92,0.14),transparent_70%)] blur-2xl" />

        <div className="container-shell py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="max-w-3xl">
              <span className="section-kicker">
                Practical visibility for low-light spaces
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {siteConfig.heroHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                {siteConfig.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={siteConfig.waitlistUrl}>
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="surface-panel p-4">
                  <p className="text-sm font-semibold text-white">Clearer handle visibility</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Built around an illuminated base and rim that stand out in dim spaces.
                  </p>
                </div>
                <div className="surface-panel p-4">
                  <p className="text-sm font-semibold text-white">Professional use cases</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Relevant for homes, apartments, guest rooms, and accessibility-minded projects.
                  </p>
                </div>
                <div className="surface-panel p-4">
                  <p className="text-sm font-semibold text-white">Launch-ready messaging</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Join the waitlist or start partnership and distribution conversations now.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-4">
              <PrototypeShowcase showCallouts />
              <p className="mt-4 text-sm text-slate-400">
                Concept illustration area showing the actual saved Illuminknob prototype photo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" aria-labelledby="problem-heading" className="section-space">
        <div className="container-shell">
          <SectionHeading
            id="problem-heading"
            eyebrow="The problem"
            title="When the room gets darker, finding the knob can become the hardest part."
            description="Nighttime routines often happen in bedrooms, hallways, bathrooms, guest corridors, and shared entryways where light is intentionally low. Illuminknob is built around that simple visibility gap."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {problemPoints.map((item) => {
              const Icon = siteIcons[item.icon];

              return (
                <article key={item.title} className="surface-panel p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-amber-200">
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

      <section id="solution" aria-labelledby="solution-heading" className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="surface-panel p-8">
              <SectionHeading
                id="solution-heading"
                eyebrow="The solution"
                title="Illuminknob adds light where the eye naturally looks."
                description="The concept centers on illumination around the base and the outer rim of the knob, helping the hardware read more clearly in low light while keeping the interaction familiar."
              />
              <div className="mt-8 rounded-[1.5rem] border border-amber-300/14 bg-amber-300/8 p-5 text-sm leading-7 text-amber-50/90">
                Plain-language summary: the doorknob stays recognizable, while the illuminated
                edge and base help the handle stand out more clearly against darker surroundings.
              </div>
            </div>

            <div className="grid gap-6">
              {solutionSteps.map((item, index) => {
                const Icon = siteIcons[item.icon];

                return (
                  <article key={item.title} className="surface-panel flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" aria-labelledby="benefits-heading" className="section-space">
        <div className="container-shell">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Key benefits"
            title="Designed to be useful, visible, and easy to understand."
            description="Every part of the concept is framed around clear practical value rather than inflated claims."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefitCards.map((item) => {
              const Icon = siteIcons[item.icon];

              return (
                <article key={item.title} className="surface-panel p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-amber-200">
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

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            id="use-cases-heading"
            eyebrow="How it helps"
            title="Built for real settings where low-light visibility matters."
            description="Illuminknob is positioned to support a range of residential, hospitality, and accessibility-minded use cases."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {useCases.map((item) => {
              const Icon = siteIcons[item.icon];

              return (
                <article key={item.title} className="surface-panel p-7">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <SectionHeading
                id="trust-heading"
                eyebrow="Trust and brand"
                title="Innovation that stays grounded in everyday use."
                description="Illuminknob is positioned as a practical product company focused on visibility, convenience, and accessible design thinking."
              />
              <div className="mt-8 surface-panel p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Company mission statement
                </p>
                <p className="mt-4 text-2xl font-semibold leading-9 text-white">
                  {siteConfig.missionStatement}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Illuminknob was shaped around the idea that better low-light visibility should
                  feel built into the environment, not added as an afterthought. Our goal is to
                  make that improvement feel trustworthy, calm, and easy to adopt.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {brandPrinciples.map((item) => {
                const Icon = siteIcons[item.icon];

                return (
                  <article key={item.title} className="surface-panel p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-amber-200">
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
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="section-space">
        <div className="container-shell">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions buyers, partners, and early supporters are likely to ask."
            description="Clear answers help keep the story realistic while still making the opportunity easy to understand."
          />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <WaitlistForm />
            <div className="surface-panel p-6 sm:p-7">
              <span className="section-kicker">Final call to action</span>
              <h2 className="mt-6 text-3xl font-semibold text-white">
                Ready to follow the product or start a conversation?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Join the waitlist for product updates, or contact Illuminknob about
                partnerships, hospitality, distribution, or accessibility-related inquiries.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact">Request Product Information</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact the Company
                </ButtonLink>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Partnership inquiries
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Hotels, property managers, builders, distributors, and accessibility-minded
                  partners can use the contact page to request information using the demo form or
                  the clearly marked placeholder outreach channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
