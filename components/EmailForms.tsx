"use client";

import { FormEvent, useState } from "react";

const inbox = "dakotajensen@trippydak.com";
const formEndpoint = "https://formspree.io/f/myeygvlz";

async function submitForm(payload: Record<string, string>) {
  const response = await fetch(formEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("The message could not be delivered.");
  }
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "General question").trim();
    const message = String(data.get("message") || "").trim();

    setSubmitting(true);
    setStatus("Sending securely…");

    try {
      await submitForm({
        _subject: `[trippydak.com] ${subject}`,
        form_type: "General contact",
        name,
        email,
        subject,
        message,
      });
      form.reset();
      setStatus("Message sent. You should normally receive a reply within 48 hours.");
    } catch (error) {
      setStatus(`${error instanceof Error ? error.message : "The message could not be delivered."} Email ${inbox} instead.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field-pair">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Your email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={7} required />
      </label>
      <label className="honeypot" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="form-warning">
        Never send passwords, PINs, recovery codes, payment-card details, private
        keys, or identity documents.
      </p>
      <label className="check-row">
        <input name="privacy" type="checkbox" required />
        <span>
          I have read the <a href="/privacy">privacy policy</a> and consent to this
          information being processed to answer my message.
        </span>
      </label>
      <button className="primary-action" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-fineprint">
        Formspree securely processes this submission for delivery to trippydak.
        You can also email <a href={`mailto:${inbox}`}>{inbox}</a> directly.
      </p>
    </form>
  );
}

export function ScheduleForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    const get = (name: string) => String(data.get(name) || "").trim();
    const subject = `Repair request — ${get("manufacturer")} ${get("model")}`;

    setSubmitting(true);
    setStatus("Sending your repair request securely…");

    try {
      await submitForm({
        _subject: subject,
        form_type: "Repair inquiry",
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        preferred_contact: get("contactMethod"),
        service: get("service"),
        manufacturer: get("manufacturer"),
        model: get("model"),
        problem_started: get("started"),
        powers_on: get("powersOn"),
        liquid_damage: get("liquidDamage"),
        problem: get("problem"),
        ownership_confirmed: "Yes",
        repair_terms_accepted: "Yes",
        privacy_consent: "Yes",
      });
      form.reset();
      setStatus("Repair request sent. You should normally receive a reply within 48 hours.");
    } catch (error) {
      setStatus(`${error instanceof Error ? error.message : "The repair request could not be delivered."} Email ${inbox} instead.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-card intake-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>01 / How can I reach you?</legend>
        <div className="field-pair">
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <div className="field-pair">
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Preferred contact
            <select name="contactMethod" defaultValue="Text" required>
              <option>Text</option>
              <option>Call</option>
              <option>Email</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>02 / What needs attention?</legend>
        <label>
          Service requested
          <select name="service" defaultValue="Diagnostics" required>
            <option>Diagnostics</option>
            <option>Laptop or desktop repair</option>
            <option>Screen or battery replacement</option>
            <option>Storage or RAM upgrade</option>
            <option>Operating-system installation</option>
            <option>Data backup or transfer</option>
            <option>Malware cleanup</option>
            <option>Android software troubleshooting</option>
            <option>Bootloader, root, or firmware consultation</option>
            <option>Console or miscellaneous electronics</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <div className="field-pair">
          <label>
            Manufacturer
            <input name="manufacturer" required />
          </label>
          <label>
            Model
            <input name="model" required />
          </label>
        </div>
        <label>
          Describe the problem
          <textarea name="problem" rows={7} required />
        </label>
        <label>
          When did it start?
          <input name="started" required />
        </label>
        <div className="field-pair">
          <label>
            Does it power on?
            <select name="powersOn" defaultValue="Yes" required>
              <option>Yes</option>
              <option>No</option>
              <option>Sometimes</option>
              <option>Not sure</option>
            </select>
          </label>
          <label>
            Any liquid damage?
            <select name="liquidDamage" defaultValue="No" required>
              <option>No</option>
              <option>Yes</option>
              <option>Possibly</option>
              <option>Not sure</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>03 / Before you send</legend>
        <label className="check-row">
          <input name="ownership" type="checkbox" required />
          <span>I own this device or have permission from its owner.</span>
        </label>
        <label className="check-row">
          <input name="terms" type="checkbox" required />
          <span>
            I have read the <a href="/repair-terms">repair terms</a> and understand
            that this is a request—not a guaranteed appointment or quote.
          </span>
        </label>
        <label className="check-row">
          <input name="privacy" type="checkbox" required />
          <span>
            I have read the <a href="/privacy">privacy policy</a> and consent to this
            information being processed to evaluate my request.
          </span>
        </label>
        <p className="form-warning">
          Never submit passwords, PINs, recovery codes, payment-card details,
          private keys, or complete identity documents.
        </p>
      </fieldset>

      <label className="honeypot" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="primary-action" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send repair request"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-fineprint">
        Formspree securely processes this submission for delivery to trippydak.
        You can also email <a href={`mailto:${inbox}`}>{inbox}</a> directly.
      </p>
    </form>
  );
}
