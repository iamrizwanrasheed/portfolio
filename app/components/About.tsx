"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import AnimatedCounter from "./AnimatedCounter";
import { fadeInUp, staggerContainer, viewport } from "../hooks/useScrollAnimation";
import { personalInfo } from "../lib/data";

const stats = [
  { label: "Years Experience", value: "6+", icon: "01" },
  { label: "Projects Delivered", value: "25+", icon: "02" },
  { label: "Technologies", value: "20+", icon: "03" },
  { label: "Companies Served", value: "5", icon: "04" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves building great products"
        />

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
        >
          {/* Main bio card - spans 2 cols */}
          <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-2">
            <SpotlightCard className="premium-card h-full p-7 md:p-8">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-xs font-medium mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Who I am
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                    {personalInfo.summary}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    I&apos;ve worked remotely with US-based startups, enterprise SaaS companies,
                    and R&amp;D institutes — shipping products that handle millions of page views,
                    thousands of daily users, and complex real-time workflows.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/[0.06] flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Based in {personalInfo.location}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stat cards */}
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <SpotlightCard className="premium-card h-full p-6 group">
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 tracking-wider">
                    {stat.icon}
                  </span>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mt-3 mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}

          {/* Code snippet card - spans 2 cols */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <SpotlightCard className="premium-card h-full p-6" spotlightColor="rgba(6, 182, 212, 0.06)">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] text-gray-500 dark:text-gray-500 font-mono ml-2">about.ts</span>
                </div>
                <pre className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-400 leading-relaxed overflow-x-auto">
                  <code>
{`const developer = {
  name: "${personalInfo.name}",
  role: "Senior Software Engineer",
  experience: "6+ years",
  stack: ["React", "Next.js", "Node.js"],
  remote: true 🌍,
  coffee: true ☕
};`}
                  </code>
                </pre>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
