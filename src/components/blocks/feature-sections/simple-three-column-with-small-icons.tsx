"use client";

import { Code, Terminal, User } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Curious Builder",
    description: "CSE undergrad exploring the full product path: interface, application logic, data, and deployment.",
    icon: User,
  },
  {
    name: "Readable Code",
    description: "I like practical systems that are simple to reason about, easy to extend, and clear for the next developer.",
    icon: Code,
  },
  {
    name: "Current Focus",
    description: "Modern web apps with Next.js and Tailwind, plus native-feeling mobile flows with Flutter and Dart.",
    icon: Terminal,
  },
];

export default function SimpleThreeColumnWithSmallIcons() {
  return (
    <div className="section-inner">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Small details, solid systems.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="minimal-card p-5"
            >
              <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{feature.name}</h3>
              <p className="section-copy mt-3 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
