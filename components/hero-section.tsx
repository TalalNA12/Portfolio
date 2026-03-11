"use client";

import { Terminal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-0 -translate-y-1/2 w-150 h-150 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-8 cursor-default">
          <Terminal className="w-4 h-4 animate-pulse" />
          <span>System initialized. Connection secure.</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-sans">
             Hi, I'm <span className="text-emerald-500">Talal</span>.
        </h1>
        
        <div className="h-20 md:h-16 mb-10 flex items-center justify-center">
          <p className="text-neutral-300 text-lg md:text-2xl font-mono leading-relaxed">
            <span className="text-neutral-500 mr-2">{'>'}</span>
            <TypeAnimation
              sequence={[
                "Secure Full-Stack Engineer.",
                2000,
                "Active Defense & Threat Analyst.",
                2000,
                "Architecting Hardened Infrastructure.",
                2000,
                "ISO 27001 Compliance Integration.",
                2000,
                "Bridging Hardware & Web Security.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-emerald-400 font-bold"
              repeat={Infinity}
            />
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-4">
          <a 
            href="#arsenal" 
            className="px-8 py-3 rounded-md bg-emerald-500 text-black font-bold tracking-wide hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] text-center border border-emerald-400"
          >
            View Arsenal
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-md bg-neutral-950/50 backdrop-blur-sm border border-neutral-700 text-neutral-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors font-mono text-center"
          >
            Initiate Contact
          </a>
        </div>

      </div>
    </div>
  );
}