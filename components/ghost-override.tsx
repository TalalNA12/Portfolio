"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const overrideLogs = [
  "FATAL EXCEPTION: standard_portfolio.exe terminated.",
  "OVERRIDE ENGAGED.",
  "Bypassing security protocols...",
  "Mounting QML_Research_Environment...",
  "Loading Hilbert space mappings...",
  "Resolving state vectors: |ψ⟩ = α|0⟩ + β|1⟩...",
  "WELCOME TO 4R3S_VX HQ."
];

export default function GhostOverride() {
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    if (currentLog < overrideLogs.length - 1) {
      const delay = currentLog === 0 ? 800 : currentLog === 1 ? 600 : 300;
      const timeout = setTimeout(() => setCurrentLog(currentLog + 1), delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLog]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 bg-black flex flex-col items-start justify-center p-8 md:p-24 font-mono overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="space-y-2 relative z-10 w-full max-w-3xl">
        {overrideLogs.slice(0, currentLog + 1).map((log, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-sm md:text-xl tracking-tight ${
              i === 0 ? "text-red-500 font-bold uppercase" : 
              i === overrideLogs.length - 1 ? "text-purple-500 font-bold text-2xl md:text-4xl mt-8" : 
              "text-neutral-400"
            }`}
          >
            <span className="text-neutral-700 mr-4">
              [{new Date().toISOString().split('T')[1].slice(0, -1)}]
            </span>
            {log}
          </motion.div>
        ))}
        
        {currentLog === overrideLogs.length - 1 && (
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-4 h-6 bg-purple-500 mt-4 inline-block"
          />
        )}
      </div>

      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>
    </motion.div>
  );
}