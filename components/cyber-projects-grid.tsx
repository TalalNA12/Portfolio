import { FlippingCard } from "@/components/ui/flipping-card";
import { 
  ShieldAlert, 
  Terminal, 
  Lock, 
  Activity, 
  ServerCrash, 
  Network, 
  Ghost, 
  Route, 
  ShieldCheck, 
  Cpu, 
  AudioWaveform, 
  Flame 
} from "lucide-react";

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  back: {
    description: string;
    buttonText: string;
    link: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "threatlens",
    front: {
      imageSrc: "/icons/ThreatLens.png",
      imageAlt: "ThreatLens Dashboard",
      title: "ThreatLens",
      description: "Next.js Security Monitoring Dashboard",
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
    },
    back: {
      description: "A comprehensive monitoring dashboard providing real-time visualization and oversight of critical system metrics and potential threats.",
      buttonText: "View Deployment Logs",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7408462614441381888/",
    },
  },
  {
    id: "a3g1s",
    front: {
      imageSrc: "/icons/A3G1S.png",
      imageAlt: "A3G1S Extension",
      title: "A3G1S",
      description: "Phishing Detection Browser Extension",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
    },
    back: {
      description: "Browser extension engineered to proactively detect and neutralize phishing attempts and job scam vectors in real-time.",
      buttonText: "Analyze Extension",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_cybersecurity-phishing-jobscams-activity-7375550850439725057-3SA8",
    },
  },
  {
    id: "neon-dominion",
    front: {
      imageSrc: "/icons/4R3S Neon Dominion.png",
      imageAlt: "Neon Dominion Tool",
      title: "4R3S Neon Dominion",
      description: "Python Cryptography Suite",
      icon: <Lock className="w-5 h-5 text-purple-500" />,
    },
    back: {
      description: "A massive multi-algorithmic cryptographic tool built in Python. Supports extensive encryption and decryption methodologies for CTFs and data security.",
      buttonText: "Decrypt Source",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_cybersecurity-ctf-cryptography-activity-7368352116618317825-FKyU",
    },
  },
  {
    id: "vortex-logger",
    front: {
      imageSrc: "/icons/Vortex Logger.png",
      imageAlt: "Vortex Logger Code",
      title: "Vortex Logger",
      description: "SonarQube-Hardened Logging System",
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
    },
    back: {
      description: "A custom logger specifically hardened using SonarQube analysis to eliminate code vulnerabilities and ensure secure, robust event tracking.",
      buttonText: "Audit Code",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_what-i-learned-about-sonars-sonarqube-during-activity-7367143229533683712-2zGz",
    },
  },
  {
    id: "hadespath",
    front: {
      imageSrc: "/icons/HadesPath.png",
      imageAlt: "HadesPath Networking",
      title: "HadesPath",
      description: "ICMP Firewall Evasion Tool",
      icon: <Network className="w-5 h-5 text-orange-500" />,
    },
    back: {
      description: "A covert tool that bypasses firewalls using ICMP packets. Modifies header values to establish hidden communications and execute secure file transfers.",
      buttonText: "Intercept Traffic",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_cybersecurity-networking-icmptunnel-activity-7363581364903788544-obvp",
    },
  },
  {
    id: "kairos",
    front: {
      imageSrc: "/icons/KAIROS.png",
      imageAlt: "Kairos Honeypot",
      title: "Kairos",
      description: "Active Defense Honeypot",
      icon: <ServerCrash className="w-5 h-5 text-yellow-500" />,
    },
    back: {
      description: "An advanced honeypot that traps scanners, logs their IPs, and retaliates with fabricated TCP packets to initiate a Denial of Service (DoS) against the attacker.",
      buttonText: "View Incident Response",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_one-of-my-first-fully-built-projects-crafted-activity-7361116087242870785-0vUy",
    },
  },
  {
    id: "blackhook",
    front: {
      imageSrc: "/icons/BlackHook.png",
      imageAlt: "BlackHook Keylogger Sim",
      title: "BlackHook",
      description: "T1056 Behavior Simulation & Detection",
      icon: <Ghost className="w-5 h-5 text-purple-500" />,
    },
    back: {
      description: "Simulates keylogger-like buffer tracking without capturing real keystrokes. Paired with a Python-based detector using dynamic analysis via ProcMon to flag suspicious file activity.",
      buttonText: "Review Threat Intel",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_cybersecurity-python-malwareanalysis-ugcPost-7477759078040043521-lIdF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwDjwMBPtPx4joIHhHKKbTf6gLurAdchbU",
    },
  },
  {
    id: "pathfinder",
    front: {
      imageSrc: "/icons/PathFinder.png", 
      imageAlt: "PathFinder MASM Array",
      title: "PathFinder",
      description: "16-bit Assembly DFS Algorithm",
      icon: <Route className="w-5 h-5 text-cyan-500" />,
    },
    back: {
      description: "Built for the 8086 microarchitecture using MASM. Maps a directed graph into a 1D memory array and executes an interactive Depth-First Search with hardware interrupt validation.",
      buttonText: "Examine Registers",
      link: "https://www.linkedin.com/posts/talal-nadeem-awan-9431192b7_assemblylanguage-lowlevelengineering-masm-ugcPost-7477739515206385667-PpMJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwDjwMBPtPx4joIHhHKKbTf6gLurAdchbU", 
    },
  },
  {
    id: "irongate",
    front: {
      imageSrc: "/icons/IronGate.png",
      imageAlt: "IronGate CI/CD Security",
      title: "IronGate",
      description: "CI/CD Pipeline Security Scanner",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    },
    back: {
      description: "Advanced CI/CD security scanner designed to intercept vulnerabilities, audit build stages, and enforce compliance before production deployment.",
      buttonText: "Audit Pipeline",
      link: "https://github.com/TalalNA12/irongate-cicd-security",
    },
  },
  {
    id: "documind",
    front: {
      imageSrc: "/icons/DocuMind-AI.png",
      imageAlt: "DocuMind-AI",
      title: "DocuMind-AI",
      description: "LLM Document Intelligence Engine",
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    },
    back: {
      description: "Advanced document processing and conversational intelligence engine designed for complex text extraction and contextual querying.",
      buttonText: "View Deployment Intel",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7495919990353842176/",
    },
  },
  {
    id: "echobrief",
    front: {
      imageSrc: "/icons/EchoBrief.png",
      imageAlt: "EchoBrief",
      title: "EchoBrief",
      description: "Voice Note & Text Summarizer",
      icon: <AudioWaveform className="w-5 h-5 text-cyan-400" />,
    },
    back: {
      description: "Streamlined audio/text information condensation pipeline optimized for high-density information throughput and swift executive review.",
      buttonText: "Access Repository",
      link: "https://github.com/TalalNA12/EchoBrief",
    },
  },
  {
    id: "vermilion-agent",
    front: {
      imageSrc: "/icons/Vermilion_Sales_Agent.png",
      imageAlt: "Vermilion Sales Agent",
      title: "Vermilion Sales Agent",
      description: "Autonomous Competition Sales Agent",
      icon: <Flame className="w-5 h-5 text-red-500" />,
    },
    back: {
      description: "Specialized competitive sales agent engineered for dynamic multi-step negotiation, automated outreach, and intelligent conversion tracking.",
      buttonText: "Review Source",
      link: "https://github.com/TalalNA12/competition-agent",
    },
  },
];

export default function CyberProjectsGrid() {
  return (
    <div className="flex gap-6 flex-wrap justify-center p-8 bg-black min-h-screen">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          width={320}
          height={350}
          frontContent={<GenericCardFront data={card.front} />}
          backContent={<GenericCardBack data={card.back} />}
        />
      ))}
    </div>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-4 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
      />
      <div className="relative z-20 mt-auto p-2">
        <div className="flex items-center gap-2 mb-2">
          {data.icon}
          <h3 className="text-lg font-bold tracking-tight text-white">{data.title}</h3>
        </div>
        <p className="text-sm text-neutral-300 font-mono">
          {data.description}
        </p>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[14px] leading-relaxed text-neutral-300 text-center font-mono">
          {data.description}
        </p>
      </div>
      <a 
        href={data.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full"
      >
        <button className="w-full mt-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-md text-[13.5px] font-mono transition-colors h-10 flex items-center justify-center gap-2">
          {data.buttonText}
        </button>
      </a>
    </div>
  );
}