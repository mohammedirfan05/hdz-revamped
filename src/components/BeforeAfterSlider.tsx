"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** CSS object-position for the BEFORE image. Default: "bottom" */
  beforeObjectPosition?: string;
  /** CSS object-position for the AFTER image. Default: "center" */
  afterObjectPosition?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeObjectPosition = "bottom",
  afterObjectPosition = "center",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return; // Only trigger if pointer is actively pressed
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handlePointerMove(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const getImageUrl = (src: string) => {
    if (src.startsWith("http")) return src;
    return `/images/portfolio/${src}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize group"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ touchAction: "none" }}
    >
      {/* Background Image (After) */}
      <div className="absolute inset-0 select-none">
        <Image
          src={getImageUrl(afterImage)}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          style={{ objectPosition: afterObjectPosition }}
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          After
        </div>
      </div>

      {/* Foreground Image (Before) clipped by slider */}
      <div
        className="absolute inset-0 select-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={getImageUrl(beforeImage)}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          style={{ objectPosition: beforeObjectPosition }}
        />
        <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          width: "2px",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          transform: "translateX(-50%)",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-110">
          <ArrowLeftRight size={18} color="#fff" />
        </div>
      </div>
    </div>
  );
}
