import React, { useEffect, useRef, useState } from "react";

const StarTunnel = () => {
  // Refs
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const requestRef = useRef();
  const lastTimeRef = useRef(0);
  const [visibleStars, setVisibleStars] = useState([]);
  
  // Config - Brighter and larger stars
  const starCount = 100; // Slightly reduced count for performance
  const maxDepth = 20;
  const minStarSize = 0.7; // Increased minimum size
  const scrollSpeed = 0.6;
  const interpolationFactor = 0.15;
  const maxFrameTime = 16;

  // Star initialization with brighter and larger settings
  useEffect(() => {
    const goldenRatio = Math.PI * (3 - Math.sqrt(5));
    starsRef.current = Array.from({ length: starCount }, (_, i) => {
      const y = 1 - (i / (starCount - 1)) * 2;
      const radius = Math.sqrt(1 - y * y) * 0.9;
      const theta = goldenRatio * i;
      
      return {
        id: i,
        x: Math.cos(theta) * radius,
        y: y * 0.8,
        z: Math.random() * maxDepth,
        size: Math.random() * 4 + 3, // Larger base size (3-7px)
        speed: Math.random() * 0.015 + 0.025,
        brightness: Math.random() * 0.7 + 0.6 // Brighter range (0.6-1.3)
      };
    });

    const animate = (time) => {
      requestRef.current = requestAnimationFrame(animate);
      
      const deltaTime = Math.min(time - lastTimeRef.current, maxFrameTime);
      lastTimeRef.current = time;
      
      const scrollDelta = targetScroll.current - currentScroll.current;
      currentScroll.current += scrollDelta * interpolationFactor * (deltaTime / 16);
      
      updateStarPositions();
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Scroll handling (unchanged)
  useEffect(() => {
    let isDragging = false;
    let lastY = 0;
    let velocity = 0;
    let lastTime = 0;
    
    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll.current += e.deltaY * scrollSpeed * 0.5 * (e.deltaMode ? 40 : 1);
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      lastY = e.touches[0].clientY;
      velocity = 0;
      lastTime = performance.now();
    };
    
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const now = performance.now();
      const touchY = e.touches[0].clientY;
      const deltaY = lastY - touchY;
      
      if (now - lastTime > 0) {
        velocity = deltaY / (now - lastTime);
      }
      
      targetScroll.current += deltaY * scrollSpeed * 1.5;
      lastY = touchY;
      lastTime = now;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      
      if (Math.abs(velocity) > 0.1) {
        const startTime = performance.now();
        const duration = 500;
        const startScroll = targetScroll.current;
        const distance = velocity * duration * 0.3;
        
        const applyMomentum = (time) => {
          const elapsed = time - startTime;
          if (elapsed >= duration) return;
          
          const progress = elapsed / duration;
          const ease = 1 - Math.pow(progress - 1, 3);
          targetScroll.current = startScroll + distance * ease;
          requestAnimationFrame(applyMomentum);
        };
        
        requestAnimationFrame(applyMomentum);
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Star position updates with enhanced brightness
  const updateStarPositions = () => {
    const stars = starsRef.current;
    const updatedStars = [];
    const scroll = currentScroll.current;
    
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      
      let depth = (star.z + scroll * star.speed) % maxDepth;
      if (depth < 0) depth += maxDepth;
      
      // Adjusted scaling to make stars appear larger
      const scale = Math.min(25, 1 / (depth * 0.1 + 0.04)); // More pronounced scaling
      const size = star.size * scale;
      
      if (size < minStarSize) continue;

      updatedStars.push({
        ...star,
        projected: {
          x: 50 + star.x * scale * 50,
          y: 50 + star.y * scale * 50,
          size: size,
          opacity: star.brightness * Math.min(1.2, scale * 1.0), // Increased brightness
          depth: depth
        }
      });
    }

    updatedStars.sort((a, b) => a.projected.depth - b.projected.depth);
    setVisibleStars(updatedStars);
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000011',
        overflow: 'hidden',
        touchAction: 'none',
        perspective: '1000px'
      }}
    >
      {visibleStars.map(star => {
        const { x, y, size, opacity } = star.projected;
        
        return (
          <div
            key={star.id}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: `rgba(255, 255, 255, ${opacity})`,
              boxShadow: `
                0 0 ${size * 0.5}px rgba(255, 255, 255, ${opacity * 0.95}),
                0 0 ${size * 1.8}px rgba(255, 220, 180, ${opacity * 0.6})`, // More intense glow
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity',
              transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
              backfaceVisibility: 'hidden',
              filter: `brightness(${1 + (opacity * 0.3)})` // Additional brightness boost
            }}
          />
        );
      })}
    </div>
  );
};

export default StarTunnel;