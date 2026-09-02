export const SPARK_BADGE_MARKUP = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%;
      height: 100%;
      background: #000000;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: grab;
      user-select: none;
    }
    canvas:active { cursor: grabbing; }
  </style>
</head>
<body>
  <canvas id="stage"></canvas>

  <script>
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    window.addEventListener("resize", resize);
    resize();

    // 1. Slanted Downpour Rain Streaks (Pure White/Chalk)
    const rain = Array.from({ length: 160 }, () => ({
      x: Math.random() * (width + 300) - 150,
      y: Math.random() * height,
      len: Math.random() * 32 + 14,
      speed: Math.random() * 16 + 12,
      opacity: Math.random() * 0.8 + 0.2,
      weight: Math.random() * 1.2 + 0.4
    }));

    // 2. Pendulum Physics
    let angle = 0;
    let targetAngle = 0;
    let angularVel = 0;

    window.addEventListener("mousemove", (e) => {
      const dx = (e.clientX - width / 2) / (width / 2);
      targetAngle = dx * 0.16;
    });

    window.addEventListener("mouseleave", () => {
      targetAngle = 0;
    });

    function drawChalkLine(x1, y1, x2, y2, jitter = 3, count = 1) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.hypot(dx, dy);
      const steps = Math.floor(dist * 0.85 * count);
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const px = x1 + dx * t + (Math.random() - 0.5) * jitter;
        const py = y1 + dy * t + (Math.random() - 0.5) * jitter;
        const len = Math.random() * 3.5 + 1;
        const ang = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.8;
        
        ctx.strokeStyle = Math.random() > 0.25 ? "#ffffff" : "#737373";
        ctx.lineWidth = Math.random() * 1.2 + 0.3;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + Math.cos(ang) * len, py + Math.sin(ang) * len);
        ctx.stroke();
      }
    }

    function drawChalkRect(x, y, w, h, radius = 6) {
      drawChalkLine(x + radius, y, x + w - radius, y, 3, 1.2);
      drawChalkLine(x + w, y + radius, x + w, y + h - radius, 3, 1.2);
      drawChalkLine(x + w - radius, y + h, x + radius, y + h, 3, 1.2);
      drawChalkLine(x, y + h - radius, x, y + radius, 3, 1.2);
    }

    // Load Architecture Image and apply High-Contrast Monochrome filter
    const archImg = new Image();
    archImg.src = "/writeups/documind-arch.jpg";

    function loop() {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Draw Slanted Rain
      rain.forEach(r => {
        ctx.strokeStyle = "rgba(255, 255, 255, " + r.opacity + ")";
        ctx.lineWidth = r.weight;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - r.len * 0.45, r.y + r.len);
        ctx.stroke();

        r.y += r.speed;
        r.x -= r.speed * 0.45;
        if (r.y > height + 30) {
          r.y = -35;
          r.x = Math.random() * (width + 300) - 100;
        }
      });

      // Pendulum Physics Update
      angularVel += (targetAngle - angle) * 0.08;
      angularVel *= 0.88;
      angle += angularVel;

      const anchorX = width / 2;
      const anchorY = -40;
      const cardW = 220;
      const cardH = 280;
      const lanyardY = height * 0.25;

      ctx.save();
      ctx.translate(anchorX, anchorY);
      ctx.rotate(angle);

      // Lanyard Straps
      drawChalkLine(-130, -10, -16, lanyardY, 2.5, 1.4);
      drawChalkLine(130, -10, 16, lanyardY, 2.5, 1.4);

      // Top Clip Fixture
      drawChalkRect(-20, lanyardY - 10, 40, 24, 2);
      drawChalkRect(-12, lanyardY + 14, 24, 8, 2);

      // Badge Outline Frame
      const bx = -cardW / 2;
      const by = lanyardY + 22;
      drawChalkRect(bx, by, cardW, cardH, 10);

      // Header Slot
      drawChalkRect(bx + 14, by + 14, cardW - 28, 22, 3);

      // Image Display Area with High-Contrast Grading Filter
      const imgX = bx + 14;
      const imgY = by + 42;
      const imgW = cardW - 28;
      const imgH = cardH - 60;

      drawChalkRect(imgX, imgY, imgW, imgH, 6);

      if (archImg.complete) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(imgX + 2, imgY + 2, imgW - 4, imgH - 4);
        ctx.clip();
        
        // Exact monochrome high-contrast grading matching your reference style
        ctx.filter = "grayscale(100%) contrast(220%) brightness(90%)";
        ctx.drawImage(archImg, imgX + 2, imgY + 2, imgW - 4, imgH - 4);
        ctx.restore();
      }

      ctx.restore();

      requestAnimationFrame(loop);
    }

    archImg.onload = () => {
      loop();
    };

    if (archImg.complete) {
      loop();
    }
  </script>
</body>
</html>`;