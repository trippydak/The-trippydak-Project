"use client";

import { FormEvent, useState } from "react";

const inbox = "dakotajensen@trippydak.com";

function openDraft(subject: string, lines: string[]) {
  const body = lines.join("\n");
  window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "General question").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("Opening your email app with a ready-to-send draft…");
    openDraft(`[trippydak.com] ${subject}`, [
      `From: ${name}`,
      `Reply email: ${email}`,
      "",
      message,
    ]);
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
      <button className="primary-action" type="submit">
        Create email <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-fineprint">
        This opens your default email app. The website does not store your message.
      </p>
    </form>
  );
}

export function ScheduleForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    const get = (name: string) => String(data.get(name) || "").trim();
    const subject = `Repair request — ${get("manufacturer")} ${get("model")}`;
    const lines = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Preferred contact: ${get("contactMethod")}`,
      "",
      `Service requested: ${get("service")}`,
      `Device: ${get("manufacturer")} ${get("model")}`,
      `Problem began: ${get("started")}`,
      `Powers on: ${get("powersOn")}`,
      `Liquid damage: ${get("liquidDamage")}`,
      "",
      "Problem description:",
      get("problem"),
      "",
      "I confirm that I own this device or have permission from its owner.",
      "I understand that submitting this form does not guarantee service or create a final quote.",
    ];

    setStatus("Opening your email app with your repair summary…");
    openDraft(subject, lines);
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
            <option>Bootloader or root consultation</option>
            <option>Firmware recovery — experimental</option>
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
        <p className="form-warning">
          Never submit passwords, PINs, recovery codes, payment-card details,
          private keys, or complete identity documents.
        </p>
      </fieldset>

      <label className="honeypot" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="primary-action" type="submit">
        Create repair request <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-fineprint">
        This opens your default email app. Your answers are not stored by this site.
      </p>
    </form>
  );
}
