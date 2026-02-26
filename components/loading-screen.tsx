"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLogs = [
  "INITIALIZING SECURE_SHELL...",
  "LOADING GREEK_MYTH_PROTOCOL...",
  "MOUNTING /DEV/TALAL_PROJECTS...",
  "ESTABLISHING NEURAL_LINK...",
  "DECRYPTING INTERFACE...",
  "SYSTEM_READY."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    if (currentLog < bootLogs.length - 1) {
      const timeout = setTimeout(() => setCurrentLog(currentLog + 1), 350);
      return () => clearTimeout(timeout);
    } else {
      const finalTimeout = setTimeout(onComplete, 800);
      return () => clearTimeout(finalTimeout);
    }
  }, [currentLog, onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, filter: "blur(10px)" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono p-4"
    >
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 animate-pulse delay-75" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse delay-150" />
        </div>
        
        <div className="space-y-1.5 min-h-[120px]">
          {bootLogs.slice(0, currentLog + 1).map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${i === bootLogs.length - 1 ? "text-emerald-500 font-bold" : "text-neutral-500"} text-xs md:text-sm`}
            >
              <span className="mr-2 text-neutral-800">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              {log}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 h-px w-full bg-neutral-900 overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}