"use client";

import { useState,useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/hero-section";
import CyberProjectsGrid from "@/components/cyber-projects-grid";
import DynamicBackground from "@/components/dynamic-bg";
import TechnicalStack from "@/components/technical-stack";
import ResumeTerminal from "@/components/terminal-resume";
import LoadingScreen from "@/components/loading-screen";
import { Reveal } from "@/components/reveal";
import { Mail, Github, Linkedin, ShieldCheck, Cpu } from "lucide-react";
import QubitField from "@/components/qubit-field";

// Ghost Protocol Imports
import { useGhostProtocol } from "@/hooks/use-ghost-protocol";
import GhostOverride from "@/components/ghost-override";



// --- 4R3S_VX COMMAND CENTER COMPONENT ---
function AresVortexCommandCenter() {
  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    let isMounted = true;
    fetch(`https://api.github.com/repos/TalalNA12/Schrodingers-Detector/commits?per_page=3`, {
      headers: { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'request' },
      cache: 'no-store'
    })
    .then((res) => res.json())
    .then((data) => { if (isMounted) setCommits(data); })
    .catch((err) => { console.warn("Telemetry offline"); if (isMounted) setCommits([]); });
    return () => { isMounted = false; };
  }, []);

  const pipelinePhases = [
    {
      phase: "PHASE 01: THEORETICAL FOUNDATIONS",
      status: "[ACTIVE]",
      details: "Mapping malware features to Hilbert space state vectors. Quantum gate analysis.",
      color: "text-emerald-500",
      border: "border-emerald-500"
    },
    {
      phase: "PHASE 02: BUILD ENVIRONMENT",
      status: "[PENDING]",
      details: "Python scripting, dataset parsing, and initial QML model integration.",
      color: "text-neutral-500",
      border: "border-neutral-700"
    },
    {
      phase: "PHASE 03: ZERO-DAY DETECTION",
      status: "[PENDING]",
      details: "Live model training against zero-day payloads. Parameter optimization.",
      color: "text-neutral-500",
      border: "border-neutral-700"
    },
    {
      phase: "PHASE 04: C2 DASHBOARD",
      status: "[PENDING]",
      details: "Next.js visual telemetry dashboard deployment. Final integration.",
      color: "text-neutral-500",
      border: "border-neutral-700"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-neutral-300 font-mono p-4 md:p-12 lg:p-24 overflow-x-hidden relative">
      <QubitField /> 
      <div className="relative z-10">
        <header className="mb-16 border-b border-neutral-900 pb-8">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-2">
            4R3S_VX <span className="text-purple-500">_HQ</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 uppercase tracking-widest mb-4">
            Directive: From Qubits to Zero-Days.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Operational Pipeline (Restored Original Structure) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-b border-neutral-900 pb-2 mb-8">
              <span className="text-purple-500 mr-2">/</span> Operational Pipeline
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
              {pipelinePhases.map((phase, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${phase.border} bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                    <div className={`w-1 h-1 bg-current rounded-full ${phase.color}`}></div>
                  </div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-neutral-950 border border-neutral-900 p-4 rounded hover:border-purple-500/30 transition-colors">
                    <span className={`text-[10px] font-bold ${phase.color}`}>{phase.status}</span>
                    <h3 className="font-bold text-sm text-white mt-1">{phase.phase}</h3>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{phase.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Intel Drops & Interactive Socials */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-b border-neutral-900 pb-2 mb-8">
              <span className="text-purple-500 mr-2">/</span> Intel Drops & Broadcasts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 border border-neutral-900 bg-neutral-950 p-2 rounded min-h-[300px] relative group">
                <div className="absolute top-4 left-4 z-10 bg-black/90 px-2 py-1 text-[10px] text-purple-500 font-mono border border-purple-500/30">[4R3S_VX_TRAILER.MP4]</div>
                <iframe className="w-full h-full min-h-[300px] rounded" src="https://www.youtube-nocookie.com/embed/PudEmtZijlQ" title="4R3S_VX" frameBorder="0" allowFullScreen></iframe>
              </div>

              {/* Interactive Social Nodes */}
              <div className="border border-neutral-900 bg-neutral-950/50 p-6 rounded hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-emerald-500 font-bold block mb-2">[SIGNAL: UPLINK]</span>
                  <h4 className="font-bold text-white text-sm">Network Nodes</h4>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <a href="https://www.youtube.com/@4R3S_VX" target="_blank" className="flex items-center justify-between p-2 border border-neutral-800 hover:border-emerald-500 text-xs text-neutral-400 hover:text-emerald-400 font-mono transition-all">
                    <span>[YOUTUBE]</span><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  </a>
                  <a href="https://www.instagram.com/4r3s_vx/" target="_blank" className="flex items-center justify-between p-2 border border-neutral-800 hover:border-purple-500 text-xs text-neutral-400 hover:text-purple-400 font-mono transition-all">
                    <span>[INSTAGRAM]</span><span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
                  </a>
                </div>
              </div>

              {/* Github Feed Node */}
              <a href="https://github.com/TalalNA12/Schrodingers-Detector" target="_blank" className="border border-neutral-900 bg-black p-4 rounded flex flex-col font-mono text-xs hover:border-emerald-500/50 transition-all group">
                <span className="text-neutral-600 mb-2">// ACTIVE TELEMETRY</span>
                <span className="text-emerald-500">{'>'} git status</span>
                <div className="mt-2 space-y-1">
                  {commits.slice(0, 2).map((c, i) => (
                    <p key={i} className="text-neutral-400 truncate text-[10px]">{c.commit.message}</p>
                  ))}
                </div>
                <span className="text-purple-400 mt-auto pt-4 group-hover:underline">[VIEW SOURCE ARCHITECTURE]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- MAIN PORTFOLIO CONTROLLER ---
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Ghost Protocol State Hooks
  const { isGhostMode, isTransitioning } = useGhostProtocol();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Boot Sequence */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Ghost Protocol Override Sequence */}
      <AnimatePresence mode="wait">
        {isTransitioning && <GhostOverride />}
      </AnimatePresence>

      {/* Interface Router */}
      {!isLoading && !isTransitioning && (
        <AnimatePresence mode="wait">
          {isGhostMode ? (
            <motion.div
              key="ares-hq"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AresVortexCommandCenter />
            </motion.div>
          ) : (
            <motion.main
              key="standard-portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-emerald-500/30 relative isolate overflow-x-hidden"
            >
              <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-60 shadow-[0_0_10px_#10b981]" 
                style={{ scaleX }} 
              />

              <DynamicBackground />
              <HeroSection />

              <Reveal>
                <TechnicalStack />
              </Reveal>

              <section id="arsenal" className="py-24 relative border-t border-neutral-900 z-10">
                <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
                
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
        </AnimatePresence>
      )}
    </>
  );
}
