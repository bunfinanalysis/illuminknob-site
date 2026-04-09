import Image from "next/image";

import { cx } from "@/lib/utils";

type BrandLogoProps = {
  size?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  size = "header",
  priority = false,
  className,
}: BrandLogoProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-xl",
        size === "header" ? "w-[190px] sm:w-[230px] lg:w-[280px]" : "w-[240px] sm:w-[300px]",
        className,
      )}
    >
      <Image
        src="/illuminknob-logo.png"
        alt="Illuminknob"
        width={1296}
        height={198}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

