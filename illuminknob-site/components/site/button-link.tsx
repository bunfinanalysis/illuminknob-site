import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${buttonVariants(variant)} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

