"use client";

import { useState, useEffect } from "react";

export function useGhostProtocol() {
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const triggerSequence = ['a', 'r', 'e', 's'];
  
  useEffect(() => {
    let inputSequence: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();
      inputSequence.push(key);

      if (inputSequence.length > triggerSequence.length) {
        inputSequence.shift();
      }

      if (inputSequence.join('') === triggerSequence.join('')) {
        if (!isGhostMode && !isTransitioning) {
          triggerOverride();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGhostMode, isTransitioning]);

  const triggerOverride = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsGhostMode(true);
      setIsTransitioning(false);
    }, 4500); 
  };

  return { isGhostMode, isTransitioning, triggerOverride };
}