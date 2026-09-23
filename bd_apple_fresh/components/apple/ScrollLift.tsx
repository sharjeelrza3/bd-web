"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const spring = { stiffness: 110, damping: 28, mass: 0.7 } as const;

export default function ScrollLift({
  children,
  className = "",
  distance = 34,
  scaleFrom = 0.985,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  scaleFrom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 94%", "start 58%"],
  });
  const progress = useSpring(scrollYProgress, spring);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const y = useTransform(progress, [0, 1], [distance, 0]);
  const scale = useTransform(progress, [0, 1], [scaleFrom, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}
