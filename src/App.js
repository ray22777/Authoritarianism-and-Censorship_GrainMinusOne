import React, { useEffect, useRef, useState } from "react";

const StarTunnelCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const fpsRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const [fps, setFps] = useState(0);

  const stars = useRef([]);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const lastTime = useRef(0);

  const starCount = 150;
  const maxDepth = 20;
  const scrollSpeed = 0.5;
  const interpolation = 0.1;

  useEffect(() => {
    const goldenRatio = Math.PI * (3 - Math.sqrt(5));
    stars.current = Array.from({ length: starCount }, (_, i) => {
      const y = 1 - (i / (starCount - 1)) * 2;
      const radius = Math.sqrt(1 - y * y) * 0.9;
      const theta = goldenRatio * i;
      return {
        x: Math.cos(theta) * radius,
        y: y * 0.8,
        z: Math.random() * maxDepth,
        size: Math.random() * 10 + 1,
        speed: Math.random() * 0.015 + 0.025,
        baseBrightness: Math.random() * 0.5 + 0.7
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = (time) => {
      requestAnimationFrame(draw);

      const deltaTime = time - lastTime.current;
      lastTime.current = time;

      const scrollDelta = targetScroll.current - currentScroll.current;
      currentScroll.current += scrollDelta * interpolation * (deltaTime / 16.67);

      ctx.fillStyle = "#000011";
      ctx.fillRect(0, 0, width, height);

      for (const star of stars.current) {
        let depth = (star.z + currentScroll.current * star.speed) % maxDepth;
        if (depth < 0) depth += maxDepth;

        const scale = Math.min(25, 1 / (depth * 0.1 + 0.04));
        const size = star.size * scale;
        if (size < 0.6) continue;

        const x = width / 2 + star.x * scale * width * 0.5;
        const y = height / 2 + star.y * scale * height * 0.5;

        const fadeStart = maxDepth * 0.8;
        const distanceBrightness =
          depth > fadeStart
            ? 1 - ((depth - fadeStart) / (maxDepth - fadeStart)) * 0.9
            : 1;

        const alpha = star.baseBrightness * distanceBrightness * Math.min(1.5, scale * 1.2);

        // --- Soft small bloom ---
        const glowSize = size * 1.8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, `rgba(255, 240, 220, ${alpha * 0.2})`);
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${alpha * 0.1})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // --- Core star ---
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      // --- FPS Counter ---
      const now = performance.now();
      const elapsed = now - lastFrameTimeRef.current;
      fpsRef.current = 1000 / elapsed;
      lastFrameTimeRef.current = now;

      ctx.fillStyle = "white";
      ctx.font = "12px monospace";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(`FPS: ${Math.round(fpsRef.current)}`, 10, 10);
      setFps(Math.round(fpsRef.current));
    };

    lastTime.current = performance.now();
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    let isDragging = false;
    let lastY = 0;
    let dragVelocity = 0;
    let lastTouchTime = 0;

    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll.current += e.deltaY * scrollSpeed * 0.5 * (e.deltaMode ? 40 : 1);
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      lastY = e.touches[0].clientY;
      dragVelocity = 0;
      lastTouchTime = performance.now();
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const now = performance.now();
      const y = e.touches[0].clientY;
      const delta = lastY - y;

      dragVelocity = delta / (now - lastTouchTime);
      targetScroll.current += delta * scrollSpeed * 1.5;

      lastY = y;
      lastTouchTime = now;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      if (Math.abs(dragVelocity) > 0.1) {
        const startTime = performance.now();
        const duration = 500;
        const startScroll = targetScroll.current;
        const distance = dragVelocity * duration * 0.3;

        const momentum = (time) => {
          const elapsed = time - startTime;
          if (elapsed >= duration) return;

          const t = elapsed / duration;
          const ease = 1 - Math.pow(t - 1, 3);
          targetScroll.current = startScroll + distance * ease;
          requestAnimationFrame(momentum);
        };

        requestAnimationFrame(momentum);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        touchAction: "none"
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

export default StarTunnelCanvas;