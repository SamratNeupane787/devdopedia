import Spline from "@splinetool/react-spline";
import Image from "next/image";
import HeroSection from "./components/Hero";
import { BentoGridThirdDemo } from "./components/InfoSection";
import { InfiniteMovingCardsDemo } from "./components/Timeline";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <BentoGridThirdDemo />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
