import React, { useState } from "react";
import { motion } from "framer-motion";
import { letterPaths } from "./svgPaths";

export function HandwritingAnimation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <svg
        viewBox="0 0 1158.6 200.001"
        className="w-[85%] max-w-5xl h-auto"
      >
        {letterPaths.map((letter, index) => (
          <motion.path
            key={letter.id}
            d={letter.path}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              opacity: 0,
              fill: "transparent",
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
              fill: animationCompleted
                ? "#3b82f6"
                : "transparent",
            }}
            transition={{
              pathLength: {
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.3,
                delay: index * 0.08,
              },
              fill: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="text-blue-600 dark:text-blue-400"
            onAnimationComplete={() => {
              if (index === letterPaths.length - 1) {
                setAnimationCompleted(true);
              }
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}