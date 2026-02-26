"use client";

import { useState, useEffect } from "react";
import { FileDown, Terminal, X, Check, Loader2 } from "lucide-react";

export default function ResumeTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  const startDownload = () => {
    setStatus("accessing");
    
    setTimeout(() => setStatus("decrypting"), 1500);
    setTimeout(() => {
      setStatus("complete");
      window.open("/files/TALAL NADEEM AWAN (1).pdf", "_blank");
    }, 3500);
  };

  const closeTerminal = () => {
    setIsOpen(false);
    setTimeout(() => setStatus("idle"), 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 bg-neutral-900 border border-emerald-500/50 rounded-full text-emerald-400 font-mono text-sm hover:bg-emerald-500 hover:text-black transition-all group shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        <FileDown className="w-5 h-5 group-hover:animate-bounce" />
        <span className="hidden md:inline">FETCH_RESUME.pdf</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden font-mono">
            
            <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-neutral-400 underline decoration-emerald-500/50">SECURE_RETRIEVAL_PROTOCOL</span>
              </div>
              <button onClick={closeTerminal} className="hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 min-h-[200px] flex flex-col justify-center">
              {status === "idle" && (
                <div className="text-center">
                  <p className="text-neutral-400 mb-6 uppercase tracking-widest text-xs">Requesting access to personnel_archive.dat</p>
                  <button 
                    onClick={startDownload}
                    className="px-6 py-2 border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10 transition-all text-sm uppercase"
                  >
                    Authorize Decryption
                  </button>
                </div>
              )}

              {(status === "accessing" || status === "decrypting") && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">
                      {status === "accessing" ? "> Establishing handshake..." : "> Cracking RSA-4096 layer..."}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              )}

              {status === "complete" && (
                <div className="text-center animate-in zoom-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-emerald-400 text-sm mb-2 font-bold uppercase">Success: Resume Decrypted</p>
                  <p className="text-neutral-500 text-xs">Download initiated in separate tab.</p>
                  <button 
                    onClick={closeTerminal}
                    className="mt-6 text-neutral-500 hover:text-white text-[10px] underline uppercase"
                  >
                    Close Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  );
}