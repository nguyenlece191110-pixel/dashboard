import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, MoveHorizontal, ArrowRight, Sparkles } from 'lucide-react';
import { FASHION_LOOKS } from '../data/fashionData';
import { sounds } from '../utils/audio';

export default function OrbitLookbook({ onSelectBuild, formatPrice }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startAngle, setStartAngle] = useState(0);

  const containerRef = useRef(null);
  const totalItems = FASHION_LOOKS.length;
  const anglePerItem = 360 / totalItems;
  const radius = 480; // Cylindrical radius in px

  // Update active index based on rotation angle
  useEffect(() => {
    const normalized = ((-rotationAngle % 360) + 360) % 360;
    const index = Math.round(normalized / anglePerItem) % totalItems;
    setActiveIndex(index);
  }, [rotationAngle, anglePerItem, totalItems]);

  // Touch and Mouse Drag handlers with inertia
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartAngle(rotationAngle);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotationAngle(startAngle + deltaX * 0.35);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sounds.playWhoosh();
    // Snap to closest card
    const normalized = ((-rotationAngle % 360) + 360) % 360;
    const targetIdx = Math.round(normalized / anglePerItem);
    const snapAngle = -targetIdx * anglePerItem;
    setRotationAngle(snapAngle);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartAngle(rotationAngle);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotationAngle(startAngle + deltaX * 0.45);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sounds.playWhoosh();
    const normalized = ((-rotationAngle % 360) + 360) % 360;
    const targetIdx = Math.round(normalized / anglePerItem);
    const snapAngle = -targetIdx * anglePerItem;
    setRotationAngle(snapAngle);
  };

  const rotateTo = (index) => {
    sounds.playWhoosh();
    const targetAngle = -index * anglePerItem;
    setRotationAngle(targetAngle);
  };

  const nextLook = () => {
    sounds.playWhoosh();
    setRotationAngle(prev => prev - anglePerItem);
  };

  const prevLook = () => {
    sounds.playWhoosh();
    setRotationAngle(prev => prev + anglePerItem);
  };

  return (
    <section id="orbit-section" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#08080a] via-[#0d0e13] to-[#08080a]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 font-bold mb-3 uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              MECHANIC 01 // 3D DRAG-TO-ORBIT CYLINDER
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase">
              TRY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">LOOK.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-light">
              Drag to orbit through full-body editorial looks in a 3D cylindrical runway wheel. Click any model to break down the outfit pieces, select your sizes, and add the full look in one click.
            </p>
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-400">
              <MoveHorizontal className="w-3.5 h-3.5 text-white" />
              <span>DRAG TO ORBIT 360°</span>
            </div>

            <button
              onClick={prevLook}
              className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/40 text-white transition-all active:scale-95 shadow-lg"
              title="Previous Look"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextLook}
              className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/40 text-white transition-all active:scale-95 shadow-lg"
              title="Next Look"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Orbit Carousel Container */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[520px] sm:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none perspective-1500 overflow-visible"
      >
        {/* 3D Cylindrical Orbit Ring */}
        <div 
          className="relative w-72 sm:w-84 h-[450px] sm:h-[530px] transform-style-3d transition-transform duration-300 ease-out"
          style={{
            transform: `rotateY(${rotationAngle}deg)`
          }}
        >
          {FASHION_LOOKS.map((look, index) => {
            const itemAngle = index * anglePerItem;
            const relativeAngle = ((itemAngle + rotationAngle) % 360 + 360) % 360;
            const isCenter = Math.abs(relativeAngle) < 25 || Math.abs(relativeAngle - 360) < 25;
            const distanceFactor = Math.cos((relativeAngle * Math.PI) / 180);
            const opacity = Math.max(0.35, (distanceFactor + 1) / 2);
            const scale = Math.max(0.8, 0.8 + 0.25 * ((distanceFactor + 1) / 2));

            return (
              <div
                key={look.id}
                onClick={(e) => {
                  if (!isDragging) {
                    sounds.playClick();
                    onSelectBuild(look);
                  }
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#16171f] to-[#0c0d12] border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 backface-hidden cursor-pointer group"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  opacity: opacity,
                  filter: isCenter ? 'drop-shadow(0 20px 40px rgba(255, 255, 255, 0.12))' : 'blur(0.5px)',
                  borderColor: isCenter ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono font-bold text-white uppercase">
                    {look.season}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    0{index + 1} // 0{totalItems}
                  </span>
                </div>

                {/* Full-Body Model Image */}
                <div className="relative my-3 flex items-center justify-center overflow-hidden rounded-xl bg-black/40 h-56 sm:h-72 border border-white/5">
                  <img 
                    src={look.image} 
                    alt={look.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Center Look Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-full bg-white text-black font-mono font-bold text-xs flex items-center gap-2 shadow-xl">
                      <Eye className="w-4 h-4" /> SHOP THE LOOK
                    </span>
                  </div>
                </div>

                {/* Info Card */}
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    {look.tagline}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight line-clamp-1 group-hover:text-zinc-200 transition-colors uppercase">
                    {look.name}
                  </h3>

                  {/* Components count badge */}
                  <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 text-[11px]">
                      {look.components.length} PIECES ENSEMBLE
                    </span>
                    <span className="text-white font-bold">
                      {formatPrice(look.totalPrice)}
                    </span>
                  </div>
                </div>

                {/* Bottom CTA Pill */}
                <div className="mt-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.playClick();
                      onSelectBuild(look);
                    }}
                    className="w-full py-2.5 rounded-lg bg-zinc-800/80 group-hover:bg-white text-zinc-300 group-hover:text-black font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>SHOP THE LOOK</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit Indicator Dots & Current Look Overview */}
      <div className="max-w-xl mx-auto mt-6 px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          {FASHION_LOOKS.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => rotateTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              title={l.name}
            />
          ))}
        </div>
        <div className="text-xs font-mono text-zinc-400 text-center uppercase tracking-wider">
          <span className="text-white font-bold">{FASHION_LOOKS[activeIndex]?.name}</span> • Click to inspect & break down full outfit
        </div>
      </div>
    </section>
  );
}
