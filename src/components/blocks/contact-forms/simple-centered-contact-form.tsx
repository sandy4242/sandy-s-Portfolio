"use client";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export function SimpleCenteredContactForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
  };

  const contacts = [
    {
      type: "email",
      label: "Email",
      value: "sandeepsarkar316@gmail.com",
      href: "mailto:sandeepsarkar316@gmail.com",
      icon: <Mail className="h-5 w-5 text-neutral-600 hover:text-accent transition-colors" />
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Sandeep Sarkar",
      href: "https://www.linkedin.com/in/sandeep-sarkar-cse/",
      icon: <Linkedin className="h-5 w-5 text-neutral-600 hover:text-accent transition-colors" />
    },
    {
      type: "github",
      label: "GitHub",
      value: "@sandy4242",
      href: "https://github.com/sandy4242",
      icon: <Github className="h-5 w-5 text-neutral-600 hover:text-accent transition-colors" />
    },
    {
      type: "location",
      label: "Location",
      value: "Siliguri, West Bengal, India",
      href: "#",
      icon: <MapPin className="h-5 w-5 text-neutral-600" />
    }
  ];

  return (
    <div className=" w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-20">
        <div className="mx-auto w-full max-w-lg bg-subtle-background px-6 md:px-10 py-12 shadow-sm rounded-2xl border border-border">
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-charcoal font-[var(--font-heading)]">
              Let's Build Something Together
            </h1>
            <p className="mt-4 text-neutral-600 text-base max-w-md mx-auto font-[var(--font-body)]">
              Always interested in new opportunities and interesting projects. Feel free to reach out!
            </p>
          </div>

          <div className="py-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-charcoal font-[var(--font-body)]"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="block w-full bg-white px-4 rounded-lg border border-border py-3 text-charcoal placeholder:text-neutral-400 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none sm:text-sm font-[var(--font-body)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-charcoal font-[var(--font-body)]"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="block w-full bg-white px-4 rounded-lg border border-border py-3 text-charcoal placeholder:text-neutral-400 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none sm:text-sm font-[var(--font-body)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium leading-6 text-charcoal font-[var(--font-body)]"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project collaboration, job opportunity, etc."
                      className="block w-full bg-white px-4 rounded-lg border border-border py-3 text-charcoal placeholder:text-neutral-400 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none sm:text-sm font-[var(--font-body)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-charcoal font-[var(--font-body)]"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={5}
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      className="block w-full bg-white px-4 rounded-lg border border-border py-3 text-charcoal placeholder:text-neutral-400 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none sm:text-sm font-[var(--font-body)] resize-vertical transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-emerald hover:bg-emerald/90 text-white text-sm transition-all duration-300 rounded-full transform hover:scale-105 hover:bg-[#10B981]shadow-md px-6 py-3 flex items-center justify-center w-full font-medium font-[var(--font-body)] focus:outline-none focus:ring-2 focus:ring-emerald focus:ring-offset-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <div key={contact.type} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {contact.href === "#" ? (
                      <div>{contact.icon}</div>
                    ) : (
                      <Link href={contact.href} target="_blank" rel="noopener noreferrer">
                        {contact.icon}
                      </Link>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-neutral-500 font-[var(--font-body)]">
                      {contact.label}
                    </p>
                    <p className="text-sm text-charcoal font-[var(--font-body)] truncate">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}