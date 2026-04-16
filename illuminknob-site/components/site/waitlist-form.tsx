import { ButtonLink } from "@/components/site/button-link";
import { siteConfig } from "@/lib/site-content";

type WaitlistFormProps = {
  id?: string;
  title?: string;
  description?: string;
};

export function WaitlistForm({
  id = "waitlist",
  title = "Join the waitlist",
  description = "Use the official Illuminknob waitlist form to request product updates, launch timing, and early information.",
}: WaitlistFormProps) {
  return (
    <div id={id} className="surface-panel p-6 sm:p-7">
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Waitlist form</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Clicking below opens the live Google Form where visitors can submit their waitlist information directly.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href={siteConfig.waitlistUrl}>Join the Waitlist</ButtonLink>
        <p className="text-sm leading-6 text-slate-400">
          The waitlist now routes straight to the hosted signup form.
        </p>
      </div>
    </div>
  );
}
