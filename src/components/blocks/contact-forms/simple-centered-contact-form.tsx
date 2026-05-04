"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export function SimpleCenteredContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic
  };

  const contacts = [
    {
      type: "email",
      label: "Email",
      value: "sandeepsarkar316@gmail.com",
      href: "mailto:sandeepsarkar316@gmail.com",
      icon: <Mail className="h-5 w-5" />
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Sandeep Sarkar",
      href: "https://www.linkedin.com/in/sandeep-sarkar-cse/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      type: "github",
      label: "GitHub",
      value: "@sandy4242",
      href: "https://github.com/sandy4242",
      icon: <Github className="h-5 w-5" />
    },
    {
      type: "location",
      label: "Location",
      value: "Siliguri, India",
      href: "#",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-teal-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-2xl bg-card/80 backdrop-blur-xl px-6 sm:px-12 py-12 shadow-xl rounded-3xl border border-border"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
              Let's Build Something Together
            </h2>
            <p className="mt-4 text-lg leading-6 text-muted-foreground font-sans">
              Always interested in new opportunities and interesting projects. Feel free to reach out!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground font-sans">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="block w-full rounded-xl border-0 py-3 px-4 bg-background text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground font-sans">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="block w-full rounded-xl border-0 py-3 px-4 bg-background text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium leading-6 text-foreground font-sans">
                Subject
              </label>
              <div className="mt-2">
                <input
                  id="subject"
                  type="text"
                  placeholder="Project collaboration, job opportunity..."
                  className="block w-full rounded-xl border-0 py-3 px-4 bg-background text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground font-sans">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  className="block w-full rounded-xl border-0 py-3 px-4 bg-background text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 resize-none transition-all"
                />
              </div>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:scale-[1.02] active:scale-[0.98]">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {contacts.map((contact) => (
                <div key={contact.type} className="flex flex-col items-center justify-center group">
                  {contact.href === "#" ? (
                    <div className="p-3 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {contact.icon}
                    </div>
                  ) : (
                    <Link href={contact.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {contact.icon}
                    </Link>
                  )}
                  <span className="mt-2 text-xs font-medium text-muted-foreground font-sans">
                    {contact.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}