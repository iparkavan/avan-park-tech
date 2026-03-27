"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax layers
  const yBg = useTransform(scrollY, [0, 500], [0, 150]); // slow
  const yVideo = useTransform(scrollY, [0, 500], [0, 80]); // subtle
  const yText = useTransform(scrollY, [0, 500], [0, 250]); // faster
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // fade out

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
      />

      {/* Video (slight parallax) */}
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

      {/* White fade bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_100%)]" />

      {/* Content with parallax */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl -mt-50 sm:text-7xl md:text-8xl lg:text-8xl font-display font-semibold tracking-tighter leading-[0.85]"
        >
          <span className="block">We build</span>
          <span className="block text-[#043927] mt-2">digital</span>
          <span className="block mt-2 text-[#d38f50]">experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg text-black/80"
        >
          We create powerful digital experiences
        </motion.p>
      </motion.div>
    </section>
  );
}

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Hero() {
//   const { scrollY } = useScroll();

//   // Move slower than scroll (parallax effect)
//   const y = useTransform(scrollY, [0, 500], [0, 150]);

//   return (
//     <section className="h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Layer */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
//       />

//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/videos/puzzle.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_100%)]" />

//       {/* Content */}
//       <div className="relative z-10 text-center">
//         {/* <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl font-bold"
//         >
//           Build Your Future with Us
//         </motion.h1> */}
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-display font-semibold tracking-tighter leading-[0.85]"
//         >
//           <span className="block">We build</span>
//           <span className="block text-[#043927] mt-2">digital</span>
//           <span className="block mt-2 text-[#d38f50]">experiences</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-4 text-lg"
//         >
//           We create powerful digital experiences
//         </motion.p>
//       </div>
//     </section>
//   );
// }
