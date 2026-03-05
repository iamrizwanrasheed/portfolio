"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { slideInLeft, slideInRight, staggerContainer, viewport } from "../hooks/useScrollAnimation";
import { experiences } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gray-50/80 dark:bg-transparent">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="container-custom">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and career milestones"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto pl-8 md:pl-0"
        >
          {/* Animated timeline line */}
          <motion.div
            variants={{
              hidden: { scaleY: 0 },
              visible: {
                scaleY: 1,
                transition: { duration: 1.5, ease: [0.25, 0.4, 0.25, 1] },
              },
            }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/20 md:-translate-x-px origin-top"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={index % 2 === 0 ? slideInRight : slideInLeft}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-2 top-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 },
                  }}
                  viewport={viewport}
                  className="w-4 h-4 bg-primary-500 rounded-full ring-4 ring-white dark:ring-[#050507] shadow-[0_0_0_1px_rgba(99,102,241,0.3),0_0_12px_rgba(99,102,241,0.3)]"
                />
              </div>

              {/* Content */}
              <div className={`flex-1 pl-8 ${index % 2 === 0 ? "md:pr-12 md:pl-0" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <SpotlightCard className="premium-card p-6">
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-[10px] font-mono font-medium rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-3 tracking-wider uppercase">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary-500 font-medium text-sm mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-white/[0.04]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
