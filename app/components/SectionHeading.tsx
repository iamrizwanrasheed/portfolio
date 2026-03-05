"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport } from "../hooks/useScrollAnimation";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function SectionHeading({ title, subtitle, label }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className="text-center mb-16 md:mb-20"
    >
      {label && (
        <span className="inline-block text-xs font-mono font-medium text-primary-500 dark:text-primary-400 tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] },
        }}
        viewport={viewport}
        className="mt-6 mx-auto w-16 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 rounded-full origin-center"
      />
    </motion.div>
  );
}
