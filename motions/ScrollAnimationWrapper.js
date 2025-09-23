"use client";
import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({
  children,
  // className,
  variants, 
  custom,
  ...props
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      // className={className}
         variants={variants}
      custom={custom}
      {...props}
    >
      {children}
    </motion.div>
  );
}