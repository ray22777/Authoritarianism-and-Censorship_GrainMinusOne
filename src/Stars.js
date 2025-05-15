import React, { useEffect, useRef } from "react";

const StarTunnelCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  // NEW: Refs for left/right exhibition boxes
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  const stars = useRef([]);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const lastTime = useRef(0);

  const starCount = 150;
  const maxDepth = 20;
  const scrollSpeed = 0.5;
  const interpolation = 0.1;

  // Generate golden ratio spiral stars
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
        baseBrightness: Math.random() * 0.5 + 0.6,
        tint: {
          r: 200 + Math.floor(Math.random() * 56),
          g: 200 + Math.floor(Math.random() * 56),
          b: 220 + Math.floor(Math.random() * 36),
        }
      };
    });
  }, []);

  // Drawing and animation loop
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

      // Clear canvas
      ctx.fillStyle = "rgb(0, 0, 8) ";
      ctx.fillRect(0, 0, width, height);

      // Draw stars
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

        const { r, g, b } = star.tint;

        const glowSize = size * 2.3;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.2})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.1})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }

      // Update progress bar
      const maxScrollToShow = -2000;
      const progress = Math.min(
        100,
        (currentScroll.current / maxScrollToShow) * 100
      );
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }

      // NEW: Exhibition Box Positioning Logic
      const boxZ = -1000; // Z-position of the boxes
      const boxXLeft = -0.3; // Relative X coordinate (like stars)
      const boxXRight = 0.3;
      const boxY = 0; // Y offset

      const depth = (boxZ + currentScroll.current * 0.05) % maxDepth;
      const adjustedDepth = depth < 0 ? depth + maxDepth : depth;

      const scale = Math.min(25, 1 / (adjustedDepth * 0.1 + 0.04));

      const isVisible = adjustedDepth >= 0 && adjustedDepth <= maxDepth;

      const boxLeftX = width / 2 + boxXLeft * scale * width * 0.5;
      const boxRightX = width / 2 + boxXRight * scale * width * 0.5;
      const boxYPos = height / 2 + boxY * scale * height * 0.5;

      if (leftBoxRef.current) {
        leftBoxRef.current.style.transform = `
          translate(-50%, -50%)
          scale(${scale})
        `;
        leftBoxRef.current.style.left = `${boxLeftX}px`;
        leftBoxRef.current.style.top = `${boxYPos}px`;
        leftBoxRef.current.style.opacity = isVisible ? 1 : 0;
        leftBoxRef.current.style.pointerEvents = isVisible ? "auto" : "none";
      }

      if (rightBoxRef.current) {
        rightBoxRef.current.style.transform = `
          translate(-50%, -50%)
          scale(${scale})
        `;
        rightBoxRef.current.style.left = `${boxRightX}px`;
        rightBoxRef.current.style.top = `${boxYPos}px`;
        rightBoxRef.current.style.opacity = isVisible ? 1 : 0;
        rightBoxRef.current.style.pointerEvents = isVisible ? "auto" : "none";
      }
    };

    lastTime.current = performance.now();
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Scroll event handling
  useEffect(() => {
    let isDragging = false;
    let lastY = 0;
    let dragVelocity = 0;
    let lastTouchTime = 0;

    const container = containerRef.current;

    const maxScrollLimit = -2000;

    const handleWheel = (e) => {
      e.preventDefault();

      const proposedScroll = targetScroll.current + e.deltaY * scrollSpeed * 0.5 * (e.deltaMode ? 40 : 1);

      if (proposedScroll > 0 || proposedScroll < maxScrollLimit) {
        return;
      }

      targetScroll.current = proposedScroll;
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

      const proposedScroll = targetScroll.current + delta * scrollSpeed * 1.5;

      if (proposedScroll > 0 || proposedScroll < maxScrollLimit) {
        return;
      }

      dragVelocity = delta / (now - lastTouchTime);
      targetScroll.current = proposedScroll;

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

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "4px",
          width: "0%",
          maxWidth: "100%",
          background: "linear-gradient(to right,rgba(0, 219, 0, 0.74),rgba(0, 116, 10, 0.74))",
          transition: "width 0.1s linear",
          zIndex: 1000,
        }}
        ref={progressBarRef}
      />

      {/* Left Exhibition Box */}
      <div
        ref={leftBoxRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
          width: "200px",
          padding: "15px",
          backgroundColor: "rgba(40, 40, 40, 0.9)",
          color: "white",
          borderRadius: "10px",
          pointerEvents: "auto",
          opacity: 0,
          fontFamily: "sans-serif",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
          zIndex: 1001,
          transition: "opacity 0.2s ease",
        }}
        onClick={() => alert("Left box clicked!")}
      >
        <h3>Test</h3>
        <p>testing texts</p>
      </div>

      {/* Right Exhibition Box */}
      <div
        ref={rightBoxRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
          width: "200px",
          padding: "15px",
          backgroundColor: "rgba(40, 40, 40, 0.9)",
          color: "white",
          borderRadius: "10px",
          pointerEvents: "auto",
          opacity: 0,
          fontFamily: "sans-serif",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
          zIndex: 1001,
          transition: "opacity 0.2s ease",
        }}
        onClick={() => alert("Right box clicked!")}
      >
        <h3>Test</h3>
        <p>second text test.</p>
      </div>
    </div>
  );
};

export default StarTunnelCanvas;