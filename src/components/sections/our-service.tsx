"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Fingerprint,
  MousePointerClick,
  PlayCircle,
  Sparkles,
  Circle,
  Infinity,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Branding",
    desc: "Visual Identity, Brand Style Guide & Collateral Design",
    icon: Fingerprint,
  },
  {
    title: "Graphic Design",
    desc: "Social Media Posts, Pitch Decks, Ad Sets & More",
    icon: MousePointerClick,
  },
  {
    title: "Video & Animation",
    desc: "Short and Long form video content",
    icon: PlayCircle,
  },
  {
    title: "AI Image Gen",
    desc: "Transforming Concepts into Stunning Visuals",
    icon: Sparkles,
  },
];

const OurService = () => {
  const ref = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // smoother margin for mobile
  // const margin = useTransform(
  //   scrollYProgress,
  //   [0, 0.3, 0.7, 1],
  //   [60, 0, 0, 60],
  // );

  // const radius = useTransform(scrollY, [0, 300], [20, 24]);

  // // // reduce animation intensity on mobile
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <motion.div
      ref={ref}
      style={{ y: yText, scale: scaleText }}
      // style={{
      //   marginLeft: margin,
      //   marginRight: margin,
      //   borderRadius: radius,
      // }}
      className="bg-primary rounded-3xl md:mx-12 p-6 min-h-375 md:min-h-300 lg:min-h-screen"
    >
      <div className="px-12 container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-indie underline text-secondary text-[clamp(2rem,6vw,5rem)]">
            Our Service
          </h1>
          <p className="text-secondary text-sm sm:text-base mt-2">
            End-to-end technology solutions tailored to your growth stage and
            ambitions.
          </p>
        </div>

        <motion.section
          className="w-full mt-8 sm:mt-12"
          // style={{ y: yText, scale: scaleText }}
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="rounded-2xl sm:rounded-3xl bg-secondary border-none shadow-none p-5 sm:p-6 transition-transform hover:scale-[1.03]"
                >
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />

                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {/* UX Card */}
            <Card className="rounded-2xl sm:rounded-3xl bg-secondary border-none shadow-none p-5 sm:p-6">
              <CardContent className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-0">
                <div className="p-3 sm:p-4 rounded-full border-2 border-primary">
                  <Circle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    UX Design and Dev
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    App Design, Prototyping, Interaction Design, 2D Motion
                    Design & App Development
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Card */}
            <Card className="rounded-2xl sm:rounded-3xl bg-secondary border-none shadow-none p-5 sm:p-6">
              <CardContent className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-0">
                <div className="p-3 sm:p-4 rounded-full border-2 border-primary">
                  <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Social SEO
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Skyrocket your Social Media Presence on Autopilot with
                    little to no Additional Time or Effort Required.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <Button className="rounded-full px-6 py-4 sm:py-5 text-sm sm:text-base bg-secondary text-primary hover:bg-secondary/90 flex items-center gap-2 sm:gap-3">
              <span className="bg-primary p-2 rounded-full">
                <ArrowRight className="w-4 h-4 text-secondary" />
              </span>
              Learn More
            </Button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default OurService;

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Fingerprint,
//   MousePointerClick,
//   PlayCircle,
//   Sparkles,
//   Circle,
//   Infinity,
//   ArrowRight,
// } from "lucide-react";
// import { useRef } from "react";

// const services = [
//   {
//     title: "Branding",
//     desc: "Visual Identity, Brand Style Guide & Collateral Design",
//     icon: Fingerprint,
//   },
//   {
//     title: "Graphic Design",
//     desc: "Social Media Posts, Pitch Decks, Ad Sets & More",
//     icon: MousePointerClick,
//   },
//   {
//     title: "Video & Animation",
//     desc: "Short and Long form video content",
//     icon: PlayCircle,
//   },
//   {
//     title: "AI Image Gen",
//     desc: "Transforming Concepts into Stunning Visuals",
//     icon: Sparkles,
//   },
// ];

// const OurService = () => {
//   const ref = useRef(null);

//   const { scrollYProgress, scrollY } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Expand → shrink
//   const margin = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.7, 1],
//     [50, 0, 0, 50],
//   );

//   //   // Optional: smooth border radius shrink
//   const radius = useTransform(scrollY, [0, 300], [24, 24]);

//   const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
//   const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         marginLeft: margin,
//         marginRight: margin,
//         borderRadius: radius,
//       }}
//       className="bg-primary rounded-t-3xl min-h-screen"
//     >
//       <motion.div>
//         <div className="text-center">
//           <h1 className="block font-indie underline text-secondary text-[clamp(2.5rem,6vw,6rem)]">
//             Our Service
//           </h1>
//           <p className="text-secondary">
//             End-to-end technology solutions tailored to your growth stage and
//             ambitions.
//           </p>
//         </div>

//         <motion.section
//           className="w-full p-6 container mx-auto"
//           style={{ y: yText, scale: scaleText }}
//         >
//           {/* Top Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <Card
//                   key={i}
//                   className="rounded-3xl bg-secondary border-none shadow-none p-6 hover:scale-[1.02] transition"
//                 >
//                   <CardContent className="p-0 space-y-4">
//                     <Icon className="w-12 h-12 text-primary" />

//                     <h3 className="text-xl font-semibold text-black">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm text-muted-foreground leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//             {/* UX Card */}
//             <Card className="rounded-3xl bg-secondary border-none shadow-none p-6">
//               <CardContent className="flex items-start gap-6 p-0">
//                 <div className="p-4 rounded-full border-2 border-primary">
//                   <Circle className="w-8 h-8 text-primary" />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold">UX Design and Dev</h3>
//                   <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
//                     App Design, Prototyping, Interaction Design, 2D Motion
//                     Design & App Development
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* SEO Card */}
//             <Card className="rounded-3xl bg-secondary border-none shadow-none p-6">
//               <CardContent className="flex items-start gap-6 p-0">
//                 <div className="p-4 rounded-full border-2 border-primary">
//                   <Infinity className="w-8 h-8 text-primary" />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold">Social SEO</h3>
//                   <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
//                     Skyrocket your Social Media Presence on Autopilot with
//                     little to no Additional Time or Effort Required.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* CTA */}
//           <div className="flex justify-center mt-12">
//             <Button className="rounded-full py-5 text-base bg-secondary text-primary hover:bg-secondary/90 flex items-center gap-3">
//               <span className="bg-primary p-2 rounded-full">
//                 <ArrowRight className="w-4 h-4 text-secondary" />
//               </span>
//               Learn More
//             </Button>
//           </div>
//         </motion.section>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default OurService;
