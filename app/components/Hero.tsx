"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { personalInfo } from "../lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const roles = [
  "Senior Software Engineer",
  "React & Next.js Expert",
  "Full Stack MERN Developer",
  "React Native Developer",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            setText(currentRole.slice(0, text.length - 1));
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-primary-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: orbY1 }}
          className="absolute top-[15%] -left-[10%] w-[500px] h-[500px] bg-primary-500/[0.12] dark:bg-primary-500/[0.08] rounded-full blur-[100px] animate-float"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-accent-400/[0.10] dark:bg-accent-500/[0.07] rounded-full blur-[120px] animate-float-delayed"
        />
        <motion.div
          style={{ y: orbY3 }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-500/[0.06] dark:bg-purple-500/[0.05] rounded-full blur-[100px] animate-float-slow"
        />
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ opacity: contentOpacity, y: contentY }}
        className="container-custom text-center px-4 relative"
      >
        {/* Available badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl mb-6 font-medium text-gray-800 dark:text-gray-200 h-[1.4em]"
        >
          <TypewriterText />
        </motion.div>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Building high-performance web &amp; mobile applications with
          modern technologies from{" "}
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {personalInfo.location}
          </span>
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-all duration-300 hover:border-primary-500/50"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">
              Scroll
            </span>
            <div className="w-5 h-8 border border-gray-300 dark:border-gray-700 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-primary-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
