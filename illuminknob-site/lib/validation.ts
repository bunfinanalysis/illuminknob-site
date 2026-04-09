export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateWaitlistEmail(email: string) {
  const value = email.trim();

  if (!value) {
    return "Please enter your email address.";
  }

  if (!emailPattern.test(value)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a short subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us how we can help.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please add a bit more detail so we can understand your request.";
  }

  return errors;
}

