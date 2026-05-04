"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    type: "email",
    label: "Email",
    value: "sandeepsarkar316@gmail.com",
    href: "mailto:sandeepsarkar316@gmail.com",
    icon: Mail,
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "Sandeep Sarkar",
    href: "https://www.linkedin.com/in/sandeep-sarkar-cse/",
    icon: Linkedin,
  },
  {
    type: "github",
    label: "GitHub",
    value: "@sandy4242",
    href: "https://github.com/sandy4242",
    icon: Github,
  },
  {
    type: "location",
    label: "Location",
    value: "Siliguri, India",
    href: "",
    icon: MapPin,
  },
];

export function SimpleCenteredContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="section-inner">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something useful.</h2>
          <p className="section-copy mt-5">
            Reach out for projects, internships, collaborations, or just a good technical conversation.
          </p>

          <div className="mt-8 grid gap-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const content = (
                <div className="minimal-card flex items-center gap-3 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">{contact.label}</p>
                    <p className="text-sm font-semibold text-foreground">{contact.value}</p>
                  </div>
                </div>
              );

              return contact.href ? (
                <Link key={contact.type} href={contact.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                <div key={contact.type}>{content}</div>
              );
            })}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="minimal-card p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" placeholder="Your name" />
            <Field id="email" label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="mt-4">
            <Field id="subject" label="Subject" placeholder="Project, role, or collaboration" />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me what you are building..."
              className="mt-2 block w-full resize-none rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
