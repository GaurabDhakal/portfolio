"use client";

import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <motion.div
        className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.2,
        }}
      />
    </div>
  );
}
