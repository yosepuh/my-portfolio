"use client";

import { useEffect, useRef } from "react";

export default function IronManPlasmaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // --- Noise Function for Organic Motion ---
    const noise = (x: number, y: number) => {
      return (Math.sin(x * 0.05) + Math.cos(y * 0.05)) * 0.5;
    };

    // --- Particle setup ---
    type Particle = { x: number; y: number; radius: number; speed: number; angle: number; color: string };
    const particleCount = 150;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        color: `hsla(${Math.random() * 20 + 0}, 100%, 50%, 0.8)` // dark red hues
      });
    }

    let frame = 0;

    const animate = () => {
      if (!ctx) return;

      // Dark gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, "#0a0c1a");
      bgGrad.addColorStop(1, "#000000");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Silk Plasma Flow (multiple layers)
      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        ctx.lineWidth = 1.5 + layer * 0.5;
        const hue = 0 + layer * 5;
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.35)`;
        ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.7)`;
        ctx.shadowBlur = 20;

        for (let x = 0; x <= w; x += 2) {
          const y = h / 2 + Math.sin(x * 0.01 + frame * 0.02 + layer) * (80 + layer * 10)
                            + noise(x, frame + layer * 50) * 40;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Particles following silk flow
      particles.forEach(p => {
        const flowY = h / 2 + Math.sin(p.x * 0.01 + frame * 0.02) * 80;
        p.y += (flowY - p.y) * 0.02; // follow silk
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      frame += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
