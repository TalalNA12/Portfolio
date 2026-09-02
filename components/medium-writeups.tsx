import { BookOpen, ExternalLink, ArrowUpRight, Cpu } from "lucide-react";
import { SparkBadge } from "@/components/ui/spark-badge";

interface WriteupData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

const writeups: WriteupData[] = [
  {
    id: "documind-rag",
    title: "Beyond Toy RAG",
    subtitle: "Building an Asynchronous, Production-Ready Document AI Engine",
    description:
      "A deep architectural dissection of scaling document intelligence beyond basic vector retrieval. Covers asynchronous task decoupling with FastAPI, Redis, and Celery, HNSW indexing on PGVector, and grounded verification pipelines.",
    date: "Aug 2026",
    readTime: "8 min read",
    link: "https://medium.com/@talal.awan20/beyond-toy-rag-building-an-asynchronous-production-ready-document-ai-engine-708e91e15faa",
    tags: ["FastAPI", "Celery", "PGVector", "Gemini", "DevSecOps", "RAG"],
    metrics: [
      { label: "Vector Index", value: "HNSW + L2" },
      { label: "Pipeline", value: "Decoupled Async" },
      { label: "Model", value: "Gemini 768D" },
    ],
  },
];

export function MediumWriteupsSection() {
  return (
    <section className="py-20 bg-black text-white px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-wider uppercase mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Technical Publications & Systems Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-neutral-100">
              FIELD INTEL & WRITEUPS
            </h2>
          </div>
          <a
            href="https://medium.com/@talal.awan20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-emerald-400 transition-colors self-start md:self-auto"
          >
            <span>View Medium Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Display */}
        <div className="grid grid-cols-1 gap-8">
          {writeups.map((item) => (
            <div
              key={item.id}
              className="group relative bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] flex flex-col lg:flex-row"
            >
              {/* Interactive Spark Badge Visualizer */}
              <div className="lg:w-1/2 relative bg-black overflow-hidden min-h-[360px] lg:min-h-full flex items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-neutral-800">
                <div className="w-full h-full max-w-[340px] aspect-square flex items-center justify-center">
                  <SparkBadge className="w-full h-full rounded-xl overflow-hidden" />
                </div>
                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pointer-events-none">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Architecture Teardown</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-emerald-400 font-bold">{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors mb-2">
                    {item.title}: {item.subtitle}
                  </h3>

                  <p className="text-neutral-400 text-sm font-mono leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Architecture Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-neutral-900/60 border border-neutral-800/80 rounded-lg mb-6">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-[10px] font-mono uppercase text-neutral-400">
                          {metric.label}
                        </div>
                        <div className="text-xs font-mono font-semibold text-emerald-400 truncate">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dispatch Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 py-3 rounded-lg text-sm font-mono transition-all flex items-center justify-center gap-2 group-hover:border-emerald-400">
                    <span>Inspect Payload on Medium</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}