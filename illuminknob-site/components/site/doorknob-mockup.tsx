import { cx } from "@/lib/utils";

type DoorknobMockupProps = {
  compact?: boolean;
  showCallouts?: boolean;
};

export function DoorknobMockup({
  compact = false,
  showCallouts = false,
}: DoorknobMockupProps) {
  return (
    <div
      className={cx(
        "door-visual",
        compact ? "min-h-[320px]" : "min-h-[420px]",
      )}
      role="img"
      aria-label="Concept illustration of a doorknob with a soft illuminated base and rim"
    >
      <div className="door-visual__noise" />
      <div className="door-visual__door" />
      <div className="door-visual__shadow" />
      <div className="door-visual__halo" />
      <div className="door-visual__plate">
        <div className="door-visual__rim" />
      </div>
      <div className="door-visual__knob">
        <div className="door-visual__core" />
      </div>
      <div className="door-visual__reflection" />
      <div className="door-visual__base-glow" />

      {showCallouts ? (
        <>
          <div className="door-visual__callout door-visual__callout--top hidden sm:flex">
            Soft base glow
          </div>
          <div className="door-visual__callout door-visual__callout--left hidden lg:flex">
            Visible rim edge
          </div>
          <div className="door-visual__callout door-visual__callout--bottom hidden md:flex">
            Familiar round-knob form
          </div>
        </>
      ) : null}
    </div>
  );
}

