import React, { useEffect, useRef, useState } from "react";
import { leftContents } from "./content";
import { rightContents } from "./content";
import { useNavigate } from "react-router-dom";
import onExplore from "./App"
const StarTunnelCanvas = ({}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/conclusion');
    setTimeout(() => {
      window.location.reload(); 
    }, 2); 
  };
const styles = {
    colors: {
      primary: 'rgba(30, 30, 40, 0.95)',
      secondary: 'rgba(250, 255, 203, 1)',
      accent: 'rgba(255, 100, 60, 0.9)',
      accentHover: 'rgba(255, 120, 80, 0.95)',
      starTint: 'rgba(200, 220, 255, 0.8)',
      background: 'rgb(0, 0, 8)',
      boxHighlight: 'rgba(255, 215, 0, 0.3)',
      progressStart: 'rgba(0, 219, 0, 0.74)',
      progressEnd: 'rgba(0, 160, 80, 0.74)',
      overlayBg: 'rgba(20, 20, 30, 0.7)',
      overlayBlur: 'rgba(40, 40, 50, 0.5)',
    },
    shadows: {
      box: '0 4px 20px rgba(0, 0, 0, 0.3)',
      boxHover: '0 0 25px rgba(255, 200, 100, 0.4)',
      centerBox: '0 4px 25px rgba(255, 100, 60, 0.5)',
      centerBoxHover: '0 0 30px rgba(255, 120, 80, 0.7)',
    },
    transitions: {
      fast: '0.15s ease',
      medium: '0.2s ease',
      slow: '0.3s ease',
    }
  };
  
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const stars = useRef([]);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const lastTime = useRef(0);
  const isFocused = useRef(false);
  const starCount = 120;
  const maxDepth = 20;
  const scrollSpeed = 0.5;
  const interpolation = 0.1;
  const textBoxColor = 'rgb(250, 255, 203)'
  let previousScroll = 0;
  const centerZoomRef = useRef(null);
  const currentLeftIndex = useRef(0);
  const currentRightIndex = useRef(0);
  const centerBoxHover = useRef(false);
  const leftBoxHover = useRef(false);
  const rightBoxHover = useRef(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState(null);
  const [overlaySide, setOverlaySide] = useState("left");

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
        },
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
    let fpsCounter = 0;
    let fpsLast = performance.now();
    const draw = (time) => {
      fpsCounter++;
      if (time - fpsLast >= 1000) {
        console.log("FPS:", fpsCounter);
        fpsCounter = 0;
        fpsLast = time;
      }
      requestAnimationFrame(draw);
      const deltaTime = time - lastTime.current;
      lastTime.current = time;
      const scrollDelta = targetScroll.current - currentScroll.current;
      currentScroll.current += scrollDelta * interpolation * (deltaTime / 16.67);
      ctx.fillStyle = "rgb(0, 0, 8)";
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
      const maxScrollToShow = -2190;
      const progress = Math.min(
        100,
        (currentScroll.current / maxScrollToShow) * 100
      );
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }

     
      const boxZ = -1000; // Z-position of the boxes
      const boxXLeft = -0.3;
      const boxXRight = 0.3;
      const boxY = 0;

      const baseDepth = (boxZ + currentScroll.current * 0.05) % maxDepth;
      const leftDepth = baseDepth;
      const rightDepth = (baseDepth + maxDepth * 0.5) % maxDepth;

      const adjustedLeftDepth = leftDepth < 0 ? leftDepth + maxDepth : leftDepth;
      const adjustedRightDepth = rightDepth < 0 ? rightDepth + maxDepth : rightDepth;

      const leftScale = Math.min(25, 1 / (adjustedLeftDepth * 0.1 + 0.04));
      const rightScale = Math.min(25, 1 / (adjustedRightDepth * 0.1 + 0.04));

      const isLeftVisible = adjustedLeftDepth >= 0 && adjustedLeftDepth <= maxDepth;
      const isRightVisible = adjustedRightDepth >= 0 && adjustedRightDepth <= maxDepth;

      const boxLeftX = width / 2 + boxXLeft * leftScale * width * 0.5;
      const boxRightX = width / 2 + boxXRight * rightScale * width * 0.5;
      const boxLeftYPos = height / 2 + boxY * leftScale * height * 0.5;
      const boxRightYPos = height / 2 + boxY * rightScale * height * 0.5;

      // Update section indices based on scroll position
      const sectionLength = maxDepth * 20;
      const sectionIndex = Math.floor(-currentScroll.current / sectionLength) % leftContents.length;
      const clampedSectionIndex = Math.max(0, Math.min(sectionIndex, leftContents.length - 1));
      currentLeftIndex.current = Math.floor(-(currentScroll.current + 400) / 400) + 1;
      currentRightIndex.current = Math.floor(-(currentScroll.current + 180) / 400) + 1;
      if (previousScroll + 20 < -currentScroll.current || previousScroll - 20 > -currentScroll.current) {
        const contentLeft = leftContents[Math.floor(-(currentScroll.current + 370) / 400) + 1];
      
        if (leftBoxRef.current && contentLeft && currentScroll.current > -1960) {
          leftBoxRef.current.innerHTML = `
            <img 
              alt="Icon" 
              src="${contentLeft.img}" 
              style="display: block; margin: 0 auto 12px; border-radius: 8px; max-width: 100%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);" 
            />
            <h3 
              class="nametitle" 
              style="color: ${styles.colors.secondary}; margin: 0 0 8px 0; font-size: 18px; font-weight: 600; font-family: sans-serif;"
            >
              ${contentLeft.title}
            </h3>
            <p 
              style="margin: 0; font-size: 14px; line-height: 1.4; color: rgba(255, 255, 255, 0.8); font-family: sans-serif;"
            >
              <i>${contentLeft.description}</i>
            </p>
          `;
          
        }
        else if(  currentScroll.current <= -1960){
            leftBoxRef.current.style.transform = "translate(-50%, -50%)";
            leftBoxRef.current.style.left = "absolute";
        }

        const contentRight = rightContents[Math.floor(-(currentScroll.current + 180) / 400) + 1];
        if (rightBoxRef.current && contentRight) {
          rightBoxRef.current.innerHTML = `
            <img 
              alt="Icon" 
              src="${contentRight.img}" 
              style="display: block; margin: 0 auto 12px; border-radius: 8px; max-width: 100%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);" 
            />
            <h3 
              class="nametitle" 
              style="color: ${styles.colors.secondary}; margin: 0 0 8px 0; font-size: 18px; font-weight: 600; font-family: sans-serif;"
            >
              ${contentRight.title}
            </h3>
            <p 
              style="margin: 0; font-size: 14px; line-height: 1.4; color: rgba(255, 255, 255, 0.8); font-family: sans-serif;"
            >
              <i>${contentRight.description}</i>
            </p>
          `;
        }

        previousScroll = -currentScroll.current;
      }
      if (centerZoomRef.current && currentScroll.current < -2000) {
      const centerDepth = (boxZ + currentScroll.current * 0.05) % maxDepth;
      const adjustedCenterDepth = centerDepth < 0 ? centerDepth + maxDepth : centerDepth;
      const centerScale = Math.min(25, 1 / (adjustedCenterDepth * 0.1 + 0.04));

      const fadeStart = maxDepth * 1000;
      const distanceBrightness =
        adjustedCenterDepth > fadeStart
          ? 1 - ((adjustedCenterDepth - fadeStart) / (maxDepth - fadeStart)) * 2
          : 1;
      const alpha = Math.min(1, centerScale * 1.2 * distanceBrightness);
      if(centerBoxHover.current){
        centerZoomRef.current.style.transform = `translate(-50%, -50%) scale(${centerScale * 1.1})`;
        
        
      }
      else{

        centerZoomRef.current.style.transform = `translate(-50%, -50%) scale(${centerScale})`;
      }
      if(centerZoomRef.current){
        centerZoomRef.current.style.opacity = alpha;
        centerZoomRef.current.style.pointerEvents = alpha > 0.2 ? "auto" : "none";
        centerZoomRef.current.style.visibility = "visible";
      }
    }
    else{
      if(centerZoomRef.current){
        centerZoomRef.current.style.visibility = "hidden";
      }
      
    }
          // Update styles
      if (leftBoxRef.current && currentScroll.current > -1960) {
        leftBoxRef.current.style.transform = `translate(-50%, -50%) scale(${leftScale})`;
        leftBoxRef.current.style.left = `${boxLeftX}px`;
        leftBoxRef.current.style.top = `${boxLeftYPos}px`;
        leftBoxRef.current.style.opacity = isLeftVisible ? 1 : 0;
        leftBoxRef.current.style.pointerEvents = isLeftVisible ? "auto" : "none";
        leftBoxRef.current.style.visibility = "visible";
      }
      else{
        if(leftBoxRef.current){
          leftBoxRef.current.style.visibility = "hidden";
        }
      }
      if (rightBoxRef.current) {
        rightBoxRef.current.style.transform = `translate(-50%, -50%) scale(${rightScale})`;
        rightBoxRef.current.style.left = `${boxRightX}px`;
        rightBoxRef.current.style.top = `${boxRightYPos}px`;
        rightBoxRef.current.style.opacity = isRightVisible ? 1 : 0;
        rightBoxRef.current.style.pointerEvents = isRightVisible ? "auto" : "none";
      }
    };

    lastTime.current = performance.now();
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [leftContents, rightContents]);

  // Scroll event handling
  useEffect(() => {
    let isDragging = false;
    let lastY = 0;
    let dragVelocity = 0;
    let lastTouchTime = 0;
    const container = containerRef.current;
    const maxScrollLimit = -2190;

    const handleWheel = (e) => {    
      if(isFocused.current === false){
        const proposedScroll = targetScroll.current + e.deltaY * scrollSpeed * 0.5 * (e.deltaMode ? 40 : 1);
        if (proposedScroll > 0 || proposedScroll < maxScrollLimit) return;
        targetScroll.current = proposedScroll;
      }
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
      if (proposedScroll > 0 || proposedScroll < maxScrollLimit) return;
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
        touchAction: "none",
      }}
    >
      <canvas ref={canvasRef} 
      style={{
        display: "block",
        transform: "translate3d(0, 0, 0)", // forces GPU compositing
        willChange: "transform", // hint to browser that it will animate
      }}
   />

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "6px",
          width: "0%",
          maxWidth: "100%",
          background: `linear-gradient(to right, ${styles.colors.progressStart}, ${styles.colors.progressEnd})`,
          transition: "width 0.1s linear",
          zIndex: 1000,
          borderRadius: '3px',
        }}
        ref={progressBarRef}
      />
      
      {/* Center Action Box */}
      <div
        ref={centerZoomRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "320px",
          height: "120px",
          backgroundColor: styles.colors.accent,
          borderRadius: "16px",
          color: "white",
          cursor: "pointer",
          fontSize: "28px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity: 0,
          pointerEvents: "none",
          transition: `transform ${styles.transitions.fast}, opacity ${styles.transitions.medium}`,
          visibility: "hidden",
          boxShadow: styles.shadows.centerBox,
          zIndex: 1000,
          padding: "0 20px",
          border: `2px solid rgba(255, 255, 255, 0.2)`,
        }}
        onMouseEnter={() => {
          centerBoxHover.current = true;
          centerZoomRef.current.style.backgroundColor = styles.colors.accentHover;
          centerZoomRef.current.style.boxShadow = styles.shadows.centerBoxHover;
        }}
        onMouseLeave={() => {
          centerBoxHover.current = false;
          centerZoomRef.current.style.backgroundColor = styles.colors.accent;
          centerZoomRef.current.style.boxShadow = styles.shadows.centerBox;
        }}
        onClick={() => redirect()}
      >
        <b>What can we do?</b>
      </div>
      
      {/* Left Content Box */}
      <div
        ref={leftBoxRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
          width: "220px",
          cursor: 'pointer',
          padding: "18px",
          backgroundColor: styles.colors.primary,
          color: "white",
          borderRadius: "12px",
          pointerEvents: "auto",
          opacity: 0,
          fontFamily: "sans-serif",
          zIndex: 1001,
          transition: `opacity ${styles.transitions.medium}, box-shadow ${styles.transitions.fast}`,
          boxShadow: styles.shadows.box,
          border: `1px solid rgba(255, 255, 255, 0.1)`,
        }}
        onMouseEnter={() => {
          leftBoxHover.current = true;
          leftBoxRef.current.style.boxShadow = styles.shadows.boxHover;
          leftBoxRef.current.style.border = `1px solid ${styles.colors.secondary}`;
        }}
        onMouseLeave={() => {
          leftBoxHover.current = false;
          leftBoxRef.current.style.boxShadow = styles.shadows.box;
          leftBoxRef.current.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
        }}
        onClick={() => {
          const content = leftContents[currentLeftIndex.current];
          if (content) {
            setOverlayData(content);
            setOverlaySide("left");
            setShowOverlay(true);
          }
          isFocused.current = true;
        }}
      >
        <img
          src={leftContents[0].img}
          alt="Icon"
          style={{
            display: "block",
            margin: "0 auto 12px",
            borderRadius: "8px",
            maxWidth: "100%",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
        <h3 style={{ 
          color: styles.colors.secondary,
          margin: '0 0 8px 0',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          {leftContents[0].title}
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: '14px',
          lineHeight: '1.4',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          <i>{leftContents[0].description}</i>
        </p>
      </div>

      {/* Right Content Box */}
      <div
        ref={rightBoxRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
          width: "220px",
          padding: "18px",
          backgroundColor: styles.colors.primary,
          cursor: 'pointer',
          color: "white",
          borderRadius: "12px",
          pointerEvents: "auto",
          opacity: 0,
          fontFamily: "sans-serif",
          zIndex: 1001,
          transition: `opacity ${styles.transitions.medium}, box-shadow ${styles.transitions.fast}`,
          boxShadow: styles.shadows.box,
          border: `1px solid rgba(255, 255, 255, 0.1)`,
        }}
        onMouseEnter={() => {
          rightBoxHover.current = true;
          rightBoxRef.current.style.boxShadow = styles.shadows.boxHover;
          rightBoxRef.current.style.border = `1px solid ${styles.colors.secondary}`;
        }}
        onMouseLeave={() => {
          rightBoxHover.current = false;
          rightBoxRef.current.style.boxShadow = styles.shadows.box;
          rightBoxRef.current.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
        }}
        onClick={() => {
          const rcontent = rightContents[currentRightIndex.current];
          if (rcontent) {
            setOverlayData(rcontent);
            setOverlaySide("right");
            setShowOverlay(true);
            isFocused.current = true;
          }
        }}
      >
        <img
          src={rightContents[0].img}
          alt="Icon"
          style={{
            display: "block",
            margin: "0 auto 12px",
            borderRadius: "8px",
            maxWidth: "100%",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
        <h3 style={{ 
          color: styles.colors.secondary,
          margin: '0 0 8px 0',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          {rightContents[0].title}
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: '14px',
          lineHeight: '1.4',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          <i>{rightContents[0].description}</i>
        </p>
      </div>

      {/* Left Overlay */}
      {showOverlay && overlaySide === "left" && (
        <div
          onClick={() => {
            setShowOverlay(false);
            isFocused.current = false;
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: styles.colors.overlayBg,
            overflowY: "auto", 
            maxHeight: "100vh", 
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "50%",
              height: "100vh",
              backdropFilter: "blur(12px)",
              backgroundColor: styles.colors.overlayBlur,
              overflowY: "auto", 
              zIndex: 1001,
              pointerEvents: "auto",
              scrollbarWidth: "medium", 
              scrollbarColor: "rgba(255, 255, 255, 0.3) transparent", 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowOverlay(false);
                isFocused.current = false;
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                fontSize: "32px",
                color: "white",
                cursor: "pointer",
                transition: `color ${styles.transitions.fast}, transform ${styles.transitions.fast}`,
                zIndex: 1002,
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.colors.accent;
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div
              style={{
                padding: "60px 40px",
                textAlign: "center",
                color: "white",
                maxWidth: "90%",
                margin: "0 auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={{ 
                fontSize: "28px", 
                marginBottom: "30px",
                color: styles.colors.secondary,
                fontWeight: '600'
              }}>
                {overlayData?.title}
              </h2>
              {overlayData?.img && (
                <img
                  src={overlayData.img}
                  alt="Overlay"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                    marginBottom: "30px",
                    borderRadius: "12px",
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                />
              )}
              <p style={{ 
                fontSize: "18px", 
                lineHeight: "1.7",
                textAlign: 'left',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                {overlayData?.paragraph}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Right Overlay */}
      {showOverlay && overlaySide === "right" && (
        <div
          onClick={() => {
            setShowOverlay(false);
            isFocused.current = false;
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: styles.colors.overlayBg,
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "50%",
              height: "100vh",
              backdropFilter: "blur(12px)",
              backgroundColor: styles.colors.overlayBlur,
              zIndex: 1001,
              overflowY: "auto", 
              maxHeight: "100vh", 
              pointerEvents: "auto",
              scrollbarWidth: "medium", 
              scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowOverlay(false);
                isFocused.current = false;
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                fontSize: "32px",
                color: "white",
                cursor: "pointer",
                transition: `color ${styles.transitions.fast}, transform ${styles.transitions.fast}`,
                zIndex: 1002,
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.colors.accent;
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
              }}
              aria-label="Close"
            >
              ×
            </button>

            <div
              style={{
                padding: "60px 40px",
                textAlign: "center",
                color: "white",
                maxWidth: "90%",
                margin: "0 auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={{ 
                fontSize: "28px", 
                marginBottom: "30px",
                color: styles.colors.secondary,
                fontWeight: '600'
              }}>
                {overlayData?.title}
              </h2>
              {overlayData?.img && (
                <img
                  src={overlayData.img}
                  alt="Overlay"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                    marginBottom: "30px",
                    borderRadius: "12px",
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                />
              )}
              <p style={{ 
                fontSize: "18px", 
                lineHeight: "1.7",
                textAlign: 'left',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                {overlayData?.paragraph}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default StarTunnelCanvas;