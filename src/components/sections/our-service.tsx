"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const OurService = () => {
  const { scrollY } = useScroll();

  // Animate margin from 20px → 0px
  const margin = useTransform(scrollY, [30, 300], [50, 0]);

  // Optional: smooth border radius shrink
  const radius = useTransform(scrollY, [0, 300], [24, 24]);
  return (
    <motion.div
      style={{
        marginLeft: margin,
        marginRight: margin,
        borderRadius: radius,
      }}
      className="h-screen bg-black"
    ></motion.div>
  );
};

export default OurService;
