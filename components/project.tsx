"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Project({
  container,
}: {
  container: React.RefObject<HTMLDivElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, container });

  const y = useParallax(scrollYProgress, 300);

  return (
    <motion.div className="flex h-[60vh] w-3/4 flex-col gap-2 sm:flex-row">
      <motion.div ref={ref} className="w-2/3 bg-slate-600" />
      <motion.div
        className="mx-auto flex w-1/3 flex-col"
        initial={{ y: 0 }}
        style={{ y }}
      >
        <h2 className="text-3xl font-semibold text-accent">Project Title</h2>
        <p className="text-xl text-primary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          at hic provident nam iure ratione nulla, rem nobis reiciendis tempore
          necessitatibus ex quo
        </p>
      </motion.div>
    </motion.div>
  );
}
