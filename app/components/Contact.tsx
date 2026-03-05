"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { fadeInUp, staggerContainer, viewport } from "../hooks/useScrollAnimation";
import { personalInfo } from "../lib/data";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/iamrizwanrasheed",
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "iamrizwanrasheed",
    href: personalInfo.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const InputTag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputTag
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 5 : undefined}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl bg-white dark:bg-white/[0.03] border text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 resize-none ${
          focused
            ? "border-primary-500 ring-2 ring-primary-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
            : "border-gray-200 dark:border-white/[0.06]"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-2 text-[10px] font-medium text-primary-500 uppercase tracking-wider"
            : "top-4 text-sm text-gray-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-20" />

      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let&apos;s work together"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <SpotlightCard className="premium-card p-4 flex items-center gap-4 group cursor-pointer">
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider font-medium">
                        {link.label}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {link.value}
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </SpotlightCard>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <SpotlightCard className="premium-card p-6 md:p-7">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <FloatingInput
                  id="name"
                  label="Your Name"
                  value={formState.name}
                  onChange={(v) => setFormState({ ...formState, name: v })}
                />
                <FloatingInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formState.email}
                  onChange={(v) => setFormState({ ...formState, email: v })}
                />
                <FloatingInput
                  id="message"
                  label="Your Message"
                  value={formState.message}
                  onChange={(v) => setFormState({ ...formState, message: v })}
                  textarea
                />
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                  {status === "sending" && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "sent" && (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Message Sent!
                    </>
                  )}
                </motion.button>
              </form>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
