"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { NavigationMenuBar } from "../common/navigation-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const prevScroll = useRef(0);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll.current) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }

      prevScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center 
        transition-transform duration-300 ease-in-out
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      {/* <div
        className="font-bold text-lg cursor-pointer text-black"
        onClick={() => router.push("/")}
      >
        AVAN PARK
      </div> */}
      <Link href="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          {/* <BookOpen className="h-8 w-8 text-primary" /> */}
          <span className="text-2xl font-bold text-secondary">AVAN PARK</span>
        </motion.div>
      </Link>

      {/* Navigation */}
      <div className="rounded-xl backdrop-blur-lg bg-white/40 p-1 flex items-center">
        <NavigationMenuBar />
      </div>

      {/* Button */}
      <Button>Connect</Button>
    </div>
  );
};

export default Navbar;

// "use client";

// import { useRef, useState } from "react";
// import { NavigationMenuBar } from "../common/navigation-menu";
// import { Button } from "../ui/button";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// const Navbar = () => {
//   const { scrollY } = useScroll();

//   const [visible, setVisible] = useState(true);
//   const prevScroll = useRef(0);

//   useMotionValueEvent(scrollY, "change", (current) => {
//     const diff = current - prevScroll.current;

//     if (diff > 0) {
//       // scrolling down → hide
//       setVisible(false);
//     } else {
//       // scrolling up → show
//       setVisible(true);
//     }

//     prevScroll.current = current;
//   });

//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: visible ? 0 : -100 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="fixed top-0 left-0 w-full z-50 p-3 flex justify-between items-center bg-black/70 backdrop-blur-md"
//     >
//       {/* Logo */}
//       <div className="text-white font-bold text-lg">AVAN PARK</div>

//       {/* Navigation */}
//       <div className="bg-amber-600 rounded-xl p-1 flex items-center">
//         <NavigationMenuBar />
//       </div>

//       {/* Button */}
//       <Button>Connect</Button>
//     </motion.div>
//   );
// };

// export default Navbar;
