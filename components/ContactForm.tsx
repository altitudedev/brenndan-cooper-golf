'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 rounded-xl border border-crimson/30 bg-white p-8 text-center">
        <div className="eyebrow">Sent</div>
        <h4 className="mt-3 font-display text-2xl uppercase tracking-tight text-navy-950">
          Thanks — your message is on its way.
        </h4>
        <p className="mt-3 text-sm text-muted">Brenndan or the team will be back in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mt-8 grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Your Name" required />
        <Field name="email" label="Your Email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="phone" label="Your Phone" type="tel" />
        <Field name="subject" label="Subject" />
      </div>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-[15px] text-navy-950 outline-none transition focus:border-crimson"
        />
      </label>
      <button type="submit" className="btn btn-primary mt-2 justify-center">
        Send Message
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-[15px] text-navy-950 outline-none transition focus:border-crimson"
      />
    </label>
  );
}
