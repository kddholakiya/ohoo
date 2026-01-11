import React, { useState, useEffect, useRef } from 'react';

interface LogoWithEyesProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  maxDistance?: number;
}

export default function LogoWithEyes({ 
  width = '100%', 
  height = 'auto',
  className = '',
  maxDistance = 6 
}: LogoWithEyesProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const calculatePupilPosition = (eyeCenterX: number, eyeCenterY: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const svgWidth = rect.width;
    const svgHeight = rect.height;
    
    // Scale the eye centers based on actual SVG size
    const scaleX = svgWidth / 198.17;
    const scaleY = svgHeight / 86.1;
    
    const eyeX = rect.left + (eyeCenterX * scaleX);
    const eyeY = rect.top + (eyeCenterY * scaleY);
    
    const angle = Math.atan2(mousePos.y - eyeY, mousePos.x - eyeX);
    const distance = Math.min(
      maxDistance,
      Math.sqrt(Math.pow(mousePos.x - eyeX, 2) + Math.pow(mousePos.y - eyeY, 2)) / 20
    );
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };
  
  // Calculate positions for both "O" eyes (the two O's in OHIO after I)
  const leftEye = calculatePupilPosition(127, 33); // First O after I
  const rightEye = calculatePupilPosition(174, 33); // Second O after I
  
  const containerStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };
  
  return (
    <div 
      ref={containerRef} 
      style={containerStyle}
      className={className}
    >
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 198.17 86.1"
        className="w-full h-full"
      >
        <defs>
          <style>{`
            .cls-1 { fill: none; }
            .cls-2 { fill: #e43325; }
            .pupil { fill: #1a1a1a; }
            .iris { fill: #fff; }
          `}</style>
        </defs>
        
        {/* Original logo paths */}
        <path className="cls-2" d="M24.34.11c21.22-1.99,30.98,22.91,28.57,40.57-2.24,16.4-16.47,33.68-34.52,26.43C-8.85,56.18-4.96,2.87,24.34.11ZM26.25,18.82c-12.95,1.58-11.14,31.6-.76,33.04,8.91,1.23,10.75-12.3,10.43-18.59-.27-5.34-2.48-15.32-9.67-14.45Z"/>
        <path className="cls-2" d="M79.93,46.19h-12.36c-.34.21-.33.48-.37.83-.49,4.2-.06,10.13-.24,14.64-.09,2.12.89,6.76-2.02,7.1s-10.22.29-13.2,0c-4.02-.41-2.68-4.49-2.53-7.32.06-1.15-.18-2.74.05-3.79.18-.81,2.25-3.91,2.8-5.12,4.53-10.02,4.89-22.53,1.3-32.91-.51-1.47-2.28-4.61-2.45-5.71-.29-1.83-.07-7.66.24-9.57.47-2.97,4.41-1.84,6.34-1.8,2.21.04,7.55-.42,9.25.35.6.27,1.06.7,1.33,1.31.31,8.63-.4,17.29-.37,25.93l12.1.24c.05-1.21.33-2.52.39-3.71.32-7.04-.65-15-.02-21.86.11-1.14.86-2.3,2.07-2.49,2.37-.38,6.28.04,8.88,0,2.4-.04,6.74-1.41,7.08,2.26l-.12,61.58c-.66,3.18-5.16,2.04-7.7,2.14-.57.02-1.09.25-1.66.26-1.76.03-5.67.27-7.16-.06-.59-.13-1.61-1.28-1.61-1.75v-20.52Z"/>
        <path className="cls-2" d="M169.4.18c22.69-2.13,32.01,26,27.77,44.33-5.09,22-28.75,34.43-44.62,14.13-1.16-1.49-4.86-7.36-4.93-9-.04-.93,1.56-5.43,1.83-7.01,1.24-7.16.83-13.3-.9-20.3-.48-1.92-1.27-2.32-.5-4.38,3.25-8.67,11.87-16.87,21.35-17.77ZM171.07,21.53c-15.94,2.01-14.05,27.7,3.75,25.83,16.27-1.71,14.24-28.09-3.75-25.83Z"/>
        <path className="cls-2" d="M118.76.18c15.14-1.47,25.68,12.32,28.26,25.84s-.9,28.29-11.17,37.09c-11.74,10.07-28.08,6-35.29-6.96l.11-44.06c4-6.13,10.59-11.19,18.08-11.92ZM120.67,21.53c-8.53,1.03-13.32,10.27-10.07,18.1,3.84,9.23,16.93,10.58,22.56,2.31,6.51-9.57-1.08-21.79-12.49-20.41Z"/>
        
        {/* Bottom text */}
        <path className="cls-2" d="M122.89,85.67c-.17.55-2.65.65-2.83-.29l.3-9.93c.29-.42,2.32-.3,2.71.08l2.22,4.74v-4.44c.33-.53,2.57-.48,2.9-.26l.19.29-.24,9.77c-.19.57-2.19.53-2.61.28-.32-.19-2.59-5.55-2.87-5.16-.21.45.24,1.11.24,1.32v3.6Z"/>
        <path className="cls-2" d="M113.53,79.79h1.92v-3.96l.4-.32c.22-.07.45-.03.67-.05.6-.05,1.44-.12,1.81.37v9.84c-.31.52-2.32.49-2.66.26l-.22-3.5h-1.78s-.35,3.26-.35,3.26c-.38.48-2.28.5-2.56.11l.17-9.94.19-.29c.17-.12.41-.09.6-.12.57-.07,1.46-.1,1.81.37v3.96Z"/>
        <path className="cls-2" d="M93.6,85.54l-2.63.38-1.44-2.54-.23,2.3-2.55-.12c-.38-2.05.03-4.12.15-6.13.04-.75-.23-3.8.21-4.11,3.05-.5,6.69.24,6.24,4.07-.13,1.12-1.22,2.05-1.19,2.64.04.74,1.78,3,1.44,3.5ZM89.53,80.74c1.56-.3,1.66-3.14,0-2.76v2.76Z"/>
        <path className="cls-2" d="M145.71,85.52l.2-2.51c.78-.55,2.92,1.03,3.86,0,.28-1.61-4.58-1.92-4.34-5.27.1-1.47,1.39-2.57,2.8-2.74.91-.11,3.99.06,3.94,1.27-.15,3.26-2.33.88-3.21,1.13l-.4.82c.07.64,1.96,1.34,2.53,1.8,1.48,1.2,2.02,2.64,1.05,4.41-1.17,2.11-4.48,1.71-6.42,1.09Z"/>
        <path className="cls-2" d="M108.23,78.08c-.54.18-3.42-1.48-3.09.11.14.66,3.36,1.79,3.89,3.09,1.3,3.24-1.54,5.01-4.47,4.71-2.62-.27-2.36-.76-2.06-3.09.86-.19,3.85,1.18,4.07-.15.17-1.07-3.93-1.74-4.29-4.07-.56-3.67,3.39-4.56,6.05-3.17,1.27.67.01,1.51-.09,2.57Z"/>
        <path className="cls-2" d="M137.53,82.9c.86-.19,3.85,1.18,4.07-.15.11-.69-2.26-1.69-2.84-2.15-2.7-2.13-1.63-5.57,1.78-5.64,2.2-.04,4.47.54,2.77,3.03-.75.52-2.85-1.5-3.12.01-.13.76,3.37,2,3.89,3.27,1.3,3.24-1.54,5.01-4.47,4.71-2.61-.27-2.36-.76-2.06-3.09Z"/>
        <path className="cls-2" d="M66.25,75.46l-.23,2.3-2.9.24v1.3s1.46.1,1.46.1c.65,1.49.24,2.35-1.46,2.05v1.68s3.09.03,3.09.03l-.07,2.62c-.44.63-4.71-.02-5.67-.12-.57-.39-.12-8.89.12-10.23.5-.71,4.64.2,5.66.01Z"/>
        <path className="cls-2" d="M130.09,75.83c.31-1.11,5.68-.45,5.89-.14s.16,1.33-.01,1.7c-.4.82-2.2.37-3,.48v1.44s1.46.1,1.46.1c.52,1.36.17,2.44-1.44,2.07l-.25,1.54c1.05.62,3.05-.86,3.36.73.74,3.88-3.8,1.72-5.99,2.03v-9.96Z"/>
        <path className="cls-2" d="M58.81,75.46l-.23,2.3-2.9.24v1.3s1.46.1,1.46.1c.65,1.49.24,2.35-1.46,2.05v1.68s2.89-.14,2.89-.14l.12,2.79c-.44.63-4.71-.02-5.67-.12-.61-.42-.04-8.86.12-10.23.5-.71,4.64.2,5.66.01Z"/>
        <path className="cls-2" d="M95.05,75.83c.31-1.11,5.68-.45,5.89-.14s.16,1.33-.01,1.7c-.4.82-2.2.37-3,.48v1.44c2.1-.23,1.71.52,1.43,2.15l-1.4.04c-1.34,3.06,1.92.93,2.75,1.62.48.4.48,1.9.22,2.43-.56,1.15-4.72.01-5.88.24v-9.96Z"/>
        <path className="cls-2" d="M51.25,75.47c.51.16.52,2.27.14,2.54l-3.14.1v1.92s2.3.22,2.3.22l-.11,2.28-1.95.14-.22,3.26c-.34.23-2.34.27-2.66-.26v-9.84l.36-.36h5.28Z"/>
        <path className="cls-2" d="M85.09,75.47c.51.16.52,2.27.14,2.54l-3.14.1.27,1.89,2.02.26v2.19s-2.06.22-2.06.22l-.22,3.26c-.52.28-2.66.16-2.66-.5v-9.36s.56-.6.6-.6h5.04Z"/>
        <path className="cls-2" d="M67.69,76.31c.02-.12.28-.82.39-.85l2.15.24.34,7.46,2.54.22c.23.34.27,2.34-.26,2.66h-4.8l-.36-.36c.28-2.93-.37-6.52,0-9.36Z"/>
        
        {/* First Eye - Third letter O in OHIO (after I) */}
        <circle 
          className="iris" 
          cx="127" 
          cy="33" 
          r="10"
        />
        <circle 
          className="pupil transition-transform duration-100 ease-out" 
          cx={127 + leftEye.x} 
          cy={33 + leftEye.y} 
          r="5"
        />
        
        {/* Second Eye - Fourth letter O in OHIO */}
        <circle 
          className="iris" 
          cx="174" 
          cy="33" 
          r="10"
        />
        <circle 
          className="pupil transition-transform duration-100 ease-out" 
          cx={174 + rightEye.x} 
          cy={33 + rightEye.y} 
          r="5"
        />
      </svg>
    </div>
  );
}