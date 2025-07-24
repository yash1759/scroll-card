"use client";
import { useEffect, useState, useRef } from "react";
 
export default function FlatCardFanCarousel() {
  const images = ['./cards/image1.png', './cards/image2.png', './cards/image3.png', './cards/image4.png', './cards/image5.png', './cards/image6.png', './cards/image7.png', './cards/image8.png', './cards/image9.png', './cards/image10.png']
  const total = images.length;
  const visibleCount = 7;
  const arcDegrees = 180;
  const angleStep = arcDegrees / (visibleCount - 1);
  const cardWidth = 260;
  const cardHeight = 360;
 
  const [offset, setOffset] = useState(0);
  const [radius, setRadius] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const intervalRef = useRef(null);
 
  // Dynamically calculate radius based on screen width
  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      const padding = 100;
      const arcLength = screenWidth - padding * 2;
      const dynamicRadius = arcLength / Math.PI;
      setRadius(dynamicRadius);
    };
 
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
 
  // Auto scroll logic with pause on hover
  useEffect(() => {
    if (hoveredIndex === null) {
      intervalRef.current = setInterval(() => {
        setOffset((prev) => (prev - 1 + total) % total); // clockwise
      }, 1500);
    } else {
      clearInterval(intervalRef.current);
    }
 
    return () => clearInterval(intervalRef.current);
  }, [hoveredIndex, total]);
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="relative w-full h-[500px]">
        {images.map((imgSrc, idx) => {
          const relativeIndex = (idx - offset + total) % total;
          if (relativeIndex >= visibleCount) return null;
 
          const angle = -arcDegrees / 2 + relativeIndex * angleStep;
          const rad = (angle * Math.PI) / 180;
 
          const x = radius * Math.sin(rad);
          const y = radius * (1 - Math.cos(rad));
          const rotate = angle * 0.4;
 
          const isHovered = hoveredIndex === idx;
          const scale = isHovered
            ? 1.1
            : 1 - Math.abs(angle) / 180 * 0.2;
 
          const zIndex = 100 - Math.abs(angle) + (isHovered ? 100 : 0);
 
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                isHovered ? "shadow-2xl" : "shadow-lg"
              }`}
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                left: `calc(50% + ${x}px - ${cardWidth / 2}px)`,
                top: `calc(50% + ${y}px - ${cardHeight / 2}px)`,
                transform: `rotate(${rotate}deg) scale(${scale})`,
                zIndex,
              }}
            >
              <img
                src={imgSrc}
                alt={`image-${idx}`}
                className="w-full h-full object-cover rounded-lg"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}