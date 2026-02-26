"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function DynamicBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
                color: "#10b981",
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#10b981", "#06b6d4"],
          },
          links: {
            color: "#10b981",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "char",
            character: {
              value: ["Δ", "Σ", "Ω", "Ψ", "π"],
              font: "Verdana",
              style: "",
              weight: "400",
            },
          },
          size: {
            value: { min: 4, max: 9 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}