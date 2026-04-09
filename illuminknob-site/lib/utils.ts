export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buttonVariants(
  variant: "primary" | "secondary" | "ghost" = "primary",
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25";

  if (variant === "secondary") {
    return cx(
      base,
      "border border-white/12 bg-white/6 text-white hover:border-white/18 hover:bg-white/10",
    );
  }

  if (variant === "ghost") {
    return cx(base, "text-slate-200 hover:bg-white/6 hover:text-white");
  }

  return cx(
    base,
    "bg-[linear-gradient(135deg,#ffe29b_0%,#f3c35c_46%,#dd9d3f_100%)] text-slate-950 shadow-[0_18px_44px_rgba(243,195,92,0.28)] hover:scale-[1.01] hover:shadow-[0_24px_56px_rgba(243,195,92,0.34)]",
  );
}

