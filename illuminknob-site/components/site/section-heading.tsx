import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <h2
        id={id}
        className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}

