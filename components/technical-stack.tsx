"use client";

import { Shield, Terminal, Database, FileCheck, Code2, Cpu, Bot, Network } from "lucide-react";

const skillNodes = [
  {
    title: "Production RAG & Retrieval",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: [
      "PostgreSQL Hybrid Search (pgvector HNSW + tsvector GIN)",
      "Reciprocal Rank Fusion (RRF k=60) & BM25 Scoring",
      "FastAPI Server-Sent Events (SSE Streaming <800ms TTFT)",
      "In-Memory Cascade Fallback Engine (Multi-Model Resiliency)",
      "Non-Blocking Asynchronous I/O (Google GenAI aio)",
      "Deterministic Grounding & Vector Provenance Inspector",
      "Stateless Persistence via Decoupled Storage Buckets",
    ],
  },
  {
    title: "Autonomous Agents & Chatbots",
    icon: <Bot className="w-5 h-5 text-cyan-400" />,
    skills: [
      "Autonomous Multi-Step Agents (Vermilion Sales Agent)",
      "Custom Conversational Chatbots (LawyerJr Legal Assistant)",
      "Model Context Protocol (MCP) & Sandboxed Tool Execution",
      "Prompt Routing & Pydantic Structured Output Validation",
      "Real-Time Context Streaming & JSON-RPC Daemons",
      "Context Window Optimization & Dynamic Knowledge Injection",
    ],
  },
  {
    title: "Cybersecurity & Active Defense",
    icon: <Shield className="w-5 h-5 text-red-500" />,
    skills: [
      "OWASP Top 10 Auditing & Exploitation (Burp Suite, DVWA)",
      "Network Assessment (Nmap, Nessus, Ettercap, Bettercap)",
      "Active Defense Honeypots & Threat Retaliation (KAIROS)",
      "Covert Firewall Evasion & ICMP Packet Tunneling (HadesPath)",
      "Malware Behavior Simulation & Dynamic Analysis (BlackHook)",
    ],
  },
  {
    title: "Governance, Risk & Compliance",
    icon: <FileCheck className="w-5 h-5 text-purple-500" />,
    skills: [
      "ISO/IEC 27001 Security Practice & Auditing (ex-NADRA GRC)",
      "Structured Risk Assessments, Risk Registers & Treatment Plans",
      "Organizational Asset Classification & Threat Modeling",
      "NIST Framework & Security Governance Alignment",
      "ISC2 Candidate (CC) & OPSWAT Introduction to CIP",
    ],
  },
  {
    title: "Full-Stack & Quantum ML",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    skills: [
      "Next.js 16 (App Router), React 19 & TypeScript",
      "Python, FastAPI, Celery Distributed Workers & Node.js",
      "Quantum-Classical Neural Networks (PyTorch + PennyLane)",
      "16-Bit 8086 Assembly (PathFinder Memory Mapping & DFS)",
      "Modern Tailwind CSS & Reactive Micro-UIs",
    ],
  },
  {
    title: "DevSecOps & Data Infrastructure",
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    skills: [
      "GitHub Actions Security CI/CD Automation (IronGate)",
      "Deterministic Pass/Fail Gates & Secret Regression Testing",
      "PostgreSQL, Supabase Buckets & Redis Task Queuing",
      "SonarQube Static Analysis & Code Vulnerability Hardening",
      "Docker Container Decoupling, Vercel & AWS Fundamentals",
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