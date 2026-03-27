"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax layers
  // const yBg = useTransform(scrollY, [0, 500], [0, 150]); // slow
  // const yVideo = useTransform(scrollY, [0, 500], [0, 80]); // subtle
  // const yText = useTransform(scrollY, [0, 500], [0, 120]); // 👈 slower for natural feel

  const yBg = useTransform(scrollY, [0, 500], [0, 250]); // slower but noticeable
  const yVideo = useTransform(scrollY, [0, 500], [0, 150]); // mid layer
  const yText = useTransform(scrollY, [0, 500], [0, 300]); // fastest → most visible

  const scaleText = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
      />

      {/* Video */}
      <motion.video
        style={{ y: yVideo }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/puzzle.mp4" type="video/mp4" />
      </motion.video>

      {/* Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_100%)]" />

      {/* TEXT (Parallax + goes under) */}
      <motion.div
        style={{ y: yText, scale: scaleText }}
        className="relative z-0 text-center px-4 -mt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,6vw,6rem)] font-display font-semibold tracking-tighter leading-[0.85]"
        >
          <span className="block">We build</span>
          <span className="block text-[#043927] mt-2">digital</span>
          <span className="block mt-2 text-[#d38f50]">experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Websites & web apps that don't just work — they{" "}
          <span className="text-foreground font-medium">captivate</span>,{" "}
          <span className="text-foreground font-medium">convert</span>, and{" "}
          <span className="text-foreground font-medium">scale</span>.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)]"
          >
            <span className="relative z-10">Start a project</span>
          </a>

          <a
            href="#services"
            className="px-8 py-4 glass rounded-full font-display font-medium text-foreground hover:bg-muted transition-colors duration-300"
          >
            Explore services →
          </a>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col mt-4 sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            <ArrowRight className="size-4 rounded-full transition-transform group-hover:-rotate-45" />
            Start a project
          </Button>
          <Button size="lg" variant="outline" className="group">
            {/* <Play className="mr-2 h-4 w-4" /> */}
            Explore services
            <ArrowRight className="size-4 rounded-full transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
