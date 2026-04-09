import Image from "next/image";

import { cx } from "@/lib/utils";

type PrototypeShowcaseProps = {
  compact?: boolean;
  showCallouts?: boolean;
};

export function PrototypeShowcase({
  compact = false,
  showCallouts = false,
}: PrototypeShowcaseProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,15,28,0.96),rgba(15,25,43,0.94))] shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-7",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(103,214,255,0.15),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(243,195,92,0.12),transparent_68%)] blur-2xl" />

      <div
        className={cx(
          "relative mx-auto",
          compact ? "max-w-[280px] sm:max-w-[300px]" : "max-w-[320px] sm:max-w-[340px]",
        )}
      >
        <div className="absolute inset-0 translate-y-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(103,214,255,0.18),transparent_66%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white shadow-[0_22px_54px_rgba(0,0,0,0.28)]">
          <Image
            src="/illuminknob-prototype-photo.png"
            alt="Prototype view of the Illuminknob showing a brushed metal knob and illuminated rim"
            width={408}
            height={612}
            priority={!compact}
            className="h-auto w-full"
          />
        </div>
      </div>

      {showCallouts ? (
        <>
          <div className="absolute right-4 top-4 hidden rounded-full border border-white/10 bg-slate-950/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:flex">
            Actual prototype photo
          </div>
          <div className="absolute bottom-4 right-4 hidden rounded-full border border-white/10 bg-slate-950/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white md:flex">
            Illuminated rim detail
          </div>
        </>
      ) : null}
    </div>
  );
}
