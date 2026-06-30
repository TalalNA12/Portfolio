"use client";
import { useEffect, useRef } from "react";

export default function QubitField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -1000, y: -1000 };

    let particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 300) {
          const force = (300 - dist) / 300;
          p.x += dx * force * 0.02;
          p.y += dy * force * 0.02;
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = dist < 300 ? "#a855f7" : "#6d28d9";
        ctx.beginPath();
        ctx.arc(p.x, p.y, dist < 300 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          const connectionLimit = dist < 300 ? 250 : 120;
          
          if (d < connectionLimit) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${dist < 300 ? 0.6 : 0.15})`;
            ctx.lineWidth = dist < 300 ? 1.5 : 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-auto" />;
}