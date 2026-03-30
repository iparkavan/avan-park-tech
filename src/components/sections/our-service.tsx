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

  // Expand → shrink
  const margin = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, 50],
  );

  //   // Optional: smooth border radius shrink
  const radius = useTransform(scrollY, [0, 300], [24, 24]);

  // Same parallax feel as hero text
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        marginLeft: margin,
        marginRight: margin,
        borderRadius: radius,
      }}
      className="bg-primary rounded-t-3xl min-h-screen"
    >
      <motion.div>
        <div className="text-center">
          <h1 className="block font-indie underline text-secondary text-[clamp(2.5rem,6vw,6rem)]">
            Our Service
          </h1>
          <p className="text-secondary">
            End-to-end technology solutions tailored to your growth stage and
            ambitions.
          </p>
        </div>

        <motion.section
          className="w-full px-6 container mx-auto"
          style={{ y: yContent, scale: scaleContent }}
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="rounded-3xl bg-secondary border-none shadow-none p-6 hover:scale-[1.02] transition"
                >
                  <CardContent className="p-0 space-y-4">
                    <Icon className="w-12 h-12 text-primary" />

                    <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* UX Card */}
            <Card className="rounded-3xl bg-secondary border-none shadow-none p-6">
              <CardContent className="flex items-start gap-6 p-0">
                <div className="p-4 rounded-full border-2 border-primary">
                  <Circle className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">UX Design and Dev</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    App Design, Prototyping, Interaction Design, 2D Motion
                    Design & App Development
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Card */}
            <Card className="rounded-3xl bg-secondary border-none shadow-none p-6">
              <CardContent className="flex items-start gap-6 p-0">
                <div className="p-4 rounded-full border-2 border-primary">
                  <Infinity className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Social SEO</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Skyrocket your Social Media Presence on Autopilot with
                    little to no Additional Time or Effort Required.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Button className="rounded-full py-5 text-base bg-secondary text-primary hover:bg-secondary/90 flex items-center gap-3">
              <span className="bg-primary p-2 rounded-full">
                <ArrowRight className="w-4 h-4 text-secondary" />
              </span>
              Learn More
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default OurService;
