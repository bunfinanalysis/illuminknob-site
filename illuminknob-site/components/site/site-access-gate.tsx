"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/site/brand-logo";
import { buttonVariants } from "@/lib/utils";

const ACCESS_CODE = "Illuminknob26";
const ACCESS_STORAGE_KEY = "illuminknob-site-access-granted";

type SiteAccessGateProps = {
  children: ReactNode;
};

export function SiteAccessGate({ children }: SiteAccessGateProps) {
  const [isReady, setIsReady] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedValue = window.localStorage.getItem(ACCESS_STORAGE_KEY);

    if (storedValue === "true") {
      setHasAccess(true);
    }

    setIsReady(true);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.trim() !== ACCESS_CODE) {
      setError("That developer code is incorrect.");
      return;
    }

    window.localStorage.setItem(ACCESS_STORAGE_KEY, "true");
    setHasAccess(true);
    setError("");
  }

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="surface-panel w-full max-w-md p-8 text-center">
          <div className="mx-auto w-fit">
            <BrandLogo priority />
          </div>
          <p className="mt-6 text-sm text-slate-400">Loading site access…</p>
        </div>
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(103,214,255,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(243,195,92,0.12),transparent_68%)] blur-3xl" />

      <div className="surface-panel relative z-10 w-full max-w-lg p-8 sm:p-10">
        <div className="mx-auto w-fit">
          <BrandLogo priority className="w-[240px] sm:w-[300px]" />
        </div>

        <div className="mt-8 text-center">
          <p className="section-kicker">Developer Access</p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Site access required
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Sorry, this site is underconstruction. Please enter the developer code below.
          </p>
        </div>

        <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="developer-access-code"
              className="text-sm font-medium text-slate-100"
            >
              Developer code
            </label>
            <input
              id="developer-access-code"
              name="developer-access-code"
              type="password"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              autoComplete="off"
              spellCheck={false}
              autoFocus
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "developer-access-error" : undefined}
              className="input-shell"
              placeholder="Enter developer code"
            />
            {error ? (
              <p id="developer-access-error" className="mt-2 text-sm text-rose-300">
                {error}
              </p>
            ) : null}
          </div>

          <button type="submit" className={`${buttonVariants("primary")} w-full`}>
            Enter Site
          </button>
        </form>
      </div>
    </div>
  );
}

