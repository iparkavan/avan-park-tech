import Hero from "@/components/sections/hero";
import OurService from "@/components/sections/our-service";

export default function Home() {
  return (
    <div className="absolute w-full">
      <Hero />
      <div className="relative z-20 -mt-40">
        <OurService />
      </div>
    </div>
  );
}
