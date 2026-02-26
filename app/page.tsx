"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/hero-section";
import CyberProjectsGrid from "@/components/cyber-projects-grid";
import DynamicBackground from "@/components/dynamic-bg";
import TechnicalStack from "@/components/technical-stack";
import ResumeTerminal from "@/components/terminal-resume";
import LoadingScreen from "@/components/loading-screen";
import { Reveal } from "@/components/reveal";
import { Mail, Github, Linkedin, ShieldCheck, Cpu } from "lucide-react";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-emerald-500/30 relative isolate overflow-x-hidden"
        >
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60] shadow-[0_0_10px_#10b981]" 
            style={{ scaleX }} 
          />

          <DynamicBackground />

          <HeroSection />

          <Reveal>
            <TechnicalStack />
          </Reveal>

          <section id="arsenal" className="py-24 relative border-t border-neutral-900 z-10">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            
            <Reveal>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 uppercase tracking-tighter">
                  <span className="text-emerald-500 font-mono">{'>'}</span> Active_Deployments
                </h2>
                <p className="text-neutral-400 font-mono text-sm max-w-2xl mx-auto">
                  Tactical security tools, evasive networking, and hardened infrastructure.
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <CyberProjectsGrid />
            </Reveal>
          </section>

          <Reveal>
            <section id="contact" className="py-24 bg-neutral-950/60 backdrop-blur-md relative border-t border-neutral-900 z-10">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                
                <div className="font-mono">
                  <div className="flex items-center gap-3 mb-8">
                    <Cpu className="w-6 h-6 text-emerald-500" />
                    <h2 className="text-2xl font-bold tracking-tight text-white font-sans uppercase">System_Specs</h2>
                  </div>
                  
                  <div className="space-y-6 text-sm">
                    <div className="border-l-2 border-emerald-500/30 pl-4 py-1">
                      <span className="text-emerald-500 block text-[10px] uppercase tracking-widest mb-1 font-bold">Identity</span>
                      <p className="text-neutral-300">Talal Nadeem Awan</p>
                      <p className="text-neutral-500 text-xs font-sans">Cyber Security @ COMSATS Islamabad</p>
                    </div>

                    <div className="border-l-2 border-emerald-500/30 pl-4 py-1">
                      <span className="text-emerald-500 block text-[10px] uppercase tracking-widest mb-1 font-bold">Operational_Focus</span>
                      <p className="text-neutral-300">Active Defense & Security-First Full-Stack Architecture</p>
                    </div>

                    <div className="border-l-2 border-emerald-500/30 pl-4 py-1">
                      <span className="text-emerald-500 block text-[10px] uppercase tracking-widest mb-1 font-bold">Key_Objectives</span>
                      <ul className="text-neutral-400 space-y-2 mt-2">
                        <li><span className="text-emerald-500/50">»</span> Engineering evasive networking tools</li>
                        <li><span className="text-emerald-500/50">»</span> Developing automated legal-logic AI systems</li>
                        <li><span className="text-emerald-500/50">»</span> Targeting ISO 27001 Lead Implementation</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-md">
                      <p className="text-neutral-400 leading-relaxed text-xs">
                        <span className="text-emerald-500 font-bold uppercase mr-2">[Mission]</span> 
                        Bridging hardware architecture with hardened web apps. Every deployment is mission-critical.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    <h2 className="text-2xl font-bold tracking-tight text-white font-sans uppercase">Secure_Comms</h2>
                  </div>
                  <p className="text-neutral-400 font-mono text-sm mb-8">
                    Open to security-focused roles, freelance engineering, and collaborative research. Establish handshake.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <a href="mailto:talal.awan20@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-black/80 border border-neutral-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
                      <Mail className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" />
                      <span className="font-mono text-sm text-neutral-300 group-hover:text-emerald-400">Direct_Email</span>
                    </a>
                    <a href="https://github.com/TalalNA12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-black/80 border border-neutral-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
                      <Github className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" />
                      <span className="font-mono text-sm text-neutral-300 group-hover:text-emerald-400">Review_Source_Code</span>
                    </a>
                    <a href="https://linkedin.com/in/talal-nadeem-awan-9431192b7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-black/80 border border-neutral-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
                      <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" />
                      <span className="font-mono text-sm text-neutral-300 group-hover:text-emerald-400">Professional_Network</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <ResumeTerminal />

          <style jsx global>{`
            html { scroll-behavior: smooth; }
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: #000; }
            ::-webkit-scrollbar-thumb { background: #171717; border-radius: 10px; border: 2px solid #000; }
            ::-webkit-scrollbar-thumb:hover { background: #10b981; }
          `}</style>
        </motion.main>
      )}
    </>
  );
}