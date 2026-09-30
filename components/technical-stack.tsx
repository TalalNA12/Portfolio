"use client";

import { Shield, Terminal, Database, FileCheck, Code2, Cpu, Network } from "lucide-react";

const skillNodes = [
  {
    title: "AI_RAG & Neural Nets",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: [
      "DocuMind AI Engine (v1 & v2)",
      "Hybrid Search (pgvector + GIN RRF)",
      "FastAPI SSE Streaming & Async I/O",
      "Deterministic Grounding & Citations",
      "Quantum-Classical ML (PyTorch + PennyLane)",
    ],
  },
  {
    title: "Governance, Risk & Compliance",
    icon: <FileCheck className="w-5 h-5 text-purple-500" />,
    skills: [
      "ISO/IEC 27001 Security Practice (NADRA)",
      "Structured Risk Assessment & Registers",
      "Information Security Auditing",
      "NIST & OWASP Top 10 Governance",
      "ISC2 CC (Candidate) & OPSWAT CIP",
    ],
  },
  {
    title: "Offensive & AppSec",
    icon: <Shield className="w-5 h-5 text-red-500" />,
    skills: [
      "OWASP Top 10 Auditing & Exploitation",
      "Burp Suite & PortSwigger Labs",
      "Nmap, Nessus, Ettercap & Bettercap",
      "Active Defense Honeypots (KAIROS)",
      "ICMP Covert Tunneling (HadesPath)",
    ],
  },
  {
    title: "Full-Stack Engineering",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    skills: [
      "Next.js, React & TypeScript",
      "Python, FastAPI & Node.js",
      "Modern Tailwind CSS & UI Systems",
      "C++ & 8086 Assembly (PathFinder)",
      "Modular Architecture & Reusable UI",
    ],
  },
  {
    title: "Data & Storage Layers",
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    skills: [
      "PostgreSQL (pgvector HNSW + tsvector)",
      "Supabase Cloud Storage Decoupling",
      "Redis Task Queuing & Celery Workers",
      "MongoDB & Prisma ORM",
      "Pydantic Schemas & Zod Validation",
    ],
  },
  {
    title: "DevSecOps & Cloud",
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    skills: [
      "GitHub Actions Security CI/CD (IronGate)",
      "Deterministic Pass/Fail Verification Gates",
      "Secret Detection & Vulnerability Scanning",
      "SonarQube Static Analysis Hardening",
      "Docker Containers, Vercel & AWS Basics",
    ],
  },
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