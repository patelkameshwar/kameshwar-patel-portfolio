import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandwritingAnimation } from "./HandwritingAnimation";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-white dark:bg-gray-900"
        >
          <HandwritingAnimation />
        </motion.div>
      )}
    </AnimatePresence>
  );
}