import Hero from "@/components/sections/hero";
import OurService from "@/components/sections/our-service";

export default function Home() {
  return (
    <div className="absolute w-full">
      <Hero />
      <div className="-mt-52 relative">
        <OurService />
      </div>
    </div>
  );
}
