"use client";

import { useState } from "react";

import { buttonVariants } from "@/lib/utils";
import { validateWaitlistEmail } from "@/lib/validation";

type WaitlistFormProps = {
  id?: string;
  title?: string;
  description?: string;
};

export function WaitlistForm({
  id = "waitlist",
  title = "Join the waitlist",
  description = "Get product updates, launch timing, and early information as Illuminknob progresses.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextError = validateWaitlistEmail(email);

    if (nextError) {
      setError(nextError);
      setStatus("");
      return;
    }

    setError("");
    setStatus(
      "Thanks for your interest. This demo validates on the front end only, so connect a mailing list or CRM before launch.",
    );
    setEmail("");
  }

  return (
    <div id={id} className="surface-panel p-6 sm:p-7">
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
      </div>

      <form className="mt-6 space-y-4" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`${id}-email`} className="text-sm font-medium text-slate-100">
            Email address
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={`${id}-note ${error ? `${id}-error` : `${id}-status`}`}
            className="input-shell"
          />
          {error ? (
            <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
              {error}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" className={buttonVariants("primary")}>
            Join the Waitlist
          </button>
          <p id={`${id}-note`} className="text-sm leading-6 text-slate-400">
            Demo form UI with front-end validation. Submission handling can be connected later.
          </p>
        </div>

        <div aria-live="polite">
          {status ? (
            <p
              id={`${id}-status`}
              className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
            >
              {status}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

