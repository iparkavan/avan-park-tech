import PageTransition from "@/components/common/page-transition/page-transition";
import TransitionLink from "@/components/common/page-transition/transition-link";
import Hero from "@/components/sections/hero";
import OurService from "@/components/sections/our-service";
import Overview from "@/components/sections/overview";

export default function Home() {
  return (
    <div>
      <div className="absolute w-full">
        <Hero />
        <div className="relative z-20 -mt-[20vh]">
          <OurService />
        </div>

        <div className="relative z-20 md:-mt-[10vh]">
          <Overview />
        </div>
      </div>
    </div>
  );
}
