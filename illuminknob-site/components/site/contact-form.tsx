"use client";

import { useState } from "react";

import { buttonVariants } from "@/lib/utils";
import {
  type ContactFormErrors,
  type ContactFormValues,
  validateContactForm,
} from "@/lib/validation";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState("");

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("");
      return;
    }

    setErrors({});
    setStatus(
      "Thanks for reaching out. This demo form validates in the browser only, so connect an inbox, CRM, or server action to send real submissions.",
    );
    setValues(initialValues);
  }

  return (
    <form className="surface-panel p-6 sm:p-8" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-100">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="input-shell"
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2 text-sm text-rose-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-100">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="input-shell"
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-2 text-sm text-rose-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-company" className="text-sm font-medium text-slate-100">
            Company / Organization
          </label>
          <input
            id="contact-company"
            name="company"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            className="input-shell"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-sm font-medium text-slate-100">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            className="input-shell"
          />
          {errors.subject ? (
            <p id="contact-subject-error" className="mt-2 text-sm text-rose-300">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-100">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : "contact-form-note"
          }
          className="textarea-shell"
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p id="contact-form-note" className="max-w-2xl text-sm leading-6 text-slate-400">
          Demo contact workflow with front-end validation. Integrate a backend endpoint,
          email service, or CRM before production launch.
        </p>
        <button type="submit" className={buttonVariants("primary")}>
          Send Message
        </button>
      </div>

      <div aria-live="polite" className="mt-5">
        {status ? (
          <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}

