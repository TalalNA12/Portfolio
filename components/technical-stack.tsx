"use client";

import { Shield, Terminal, Database, FileCheck, Code2, Cpu, Network } from "lucide-react";

const skillNodes = [
  {
    title: "AI_RAG & LLM",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: ["DocuMind AI Engine", "PGVector & HNSW Indexing", "Gemini 768D Pipelines", "Deterministic Grounding", "Hybrid Quantum-Classical Neural Nets"]
  },
  {
    title: "Agentic_&_MCP",
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    skills: ["Model Context Protocol (MCP)", "JSON-RPC Daemons", "Sandboxed Tool Execution", "Real-time Context Streaming", "Autonomous Workflows"]
  },
  {
    title: "Offensive_Security",
    icon: <Shield className="w-5 h-5 text-red-500" />,
    skills: ["Nmap", "Wireshark", "Metasploit", "ICMP Tunneling", "Honeypot Engineering"]
  },
  {
    title: "Core_Development",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    skills: ["Next.js 15", "TypeScript", "Python", "Tailwind CSS", "React"]
  },
  {
    title: "Backend_&_Data",
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    skills: ["PostgreSQL", "Prisma ORM", "Secure API Logic", "Zod Validation"]
  },
  {
    title: "Compliance_&_Audit",
    icon: <FileCheck className="w-5 h-5 text-purple-500" />,
    skills: ["ISO 27001 (In-Progress)", "SonarQube Hardening", "Risk Assessment", "Vulnerability Mapping"]
  }
];

export default function TechnicalStack() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-sans text-white flex items-center gap-3">
            <Terminal className="text-emerald-500 w-6 h-6" />
            <span className="uppercase tracking-[0.2em]">Technical_Arsenal</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillNodes.map((node, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-950/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                {node.icon}
                <h3 className="text-sm font-bold font-mono text-neutral-200 group-hover:text-white">
                  {node.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {node.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-2 text-xs font-mono text-neutral-500 group-hover:text-neutral-300">
                    <span className="text-emerald-500/50">└─</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}