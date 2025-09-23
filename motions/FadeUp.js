"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

export function FadeUpStagger({ title, className, titleTwo }) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      //   initial="hidden"
      //   animate="show"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h2
        className={`${className}`}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {title}
      </motion.h2>
      <motion.h2
        className={`${className}`}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {titleTwo}
      </motion.h2>
    </motion.div>
  );
}
