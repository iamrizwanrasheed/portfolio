"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { fadeInUp, staggerContainer, viewport } from "../hooks/useScrollAnimation";
import { skills } from "../lib/data";

const categoryConfig: Record<string, { icon: string; gradient: string; spotlightColor: string }> = {
  Frontend: {
    icon: "🎨",
    gradient: "from-violet-500 to-purple-600",
    spotlightColor: "rgba(139, 92, 246, 0.07)",
  },
  Backend: {
    icon: "⚙️",
    gradient: "from-emerald-500 to-green-600",
    spotlightColor: "rgba(16, 185, 129, 0.07)",
  },
  Databases: {
    icon: "🗄️",
    gradient: "from-orange-500 to-red-500",
    spotlightColor: "rgba(249, 115, 22, 0.07)",
  },
  Tools: {
    icon: "🛠️",
    gradient: "from-cyan-500 to-blue-600",
    spotlightColor: "rgba(6, 182, 212, 0.07)",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gray-50/80 dark:bg-transparent">
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with daily"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {Object.entries(skills).map(([category, items]) => {
            const config = categoryConfig[category];
            return (
              <motion.div
                key={category}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <SpotlightCard
                  className="premium-card animated-border h-full p-6"
                  spotlightColor={config.spotlightColor}
                >
                  <div className="relative z-10">
                    {/* Gradient top accent */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${config.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <motion.div
                      className="text-3xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {config.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/[0.04] hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
