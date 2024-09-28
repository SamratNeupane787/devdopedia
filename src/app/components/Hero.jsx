"use client";
import Spline from "@splinetool/react-spline/next";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main className=" relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className=" font-bold text-center text-6xl sm:text-9xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            Developers{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.2 }}
          >
            Assemble
          </motion.span>
        </h1>
      </div>
      <Spline scene="https://prod.spline.design/tSLXAZjI7DVtCDz6/scene.splinecode" />
    </main>
  );
}
