import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { VIDEO_LOOKS } from '../data/videoData';
import { sounds } from '../utils/audio';

export default function ExactTryTheLook({ onSelectLook, formatPrice }) {
  const [activeLookIndex, setActiveLookIndex] = useState(2); // Center model 3 by default
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  const activeLook = VIDEO_LOOKS[activeLookIndex];

  const handlePrev = () => {
    sounds.playWhoosh();
    setActiveLookIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    sounds.playWhoosh();
    setActiveLookIndex(prev => Math.min(VIDEO_LOOKS.length - 1, prev + 1));
  };

  return (
    <section id="orbit-section" className="relative min-h-[680px] sm:min-h-[760px] bg-[#f5f5f7] text-zinc-900 pt-12 pb-16 px-6 sm:px-12 overflow-hidden flex flex-col justify-between select-none">
      {/* TOP HEADER: EXACT "Try the Look." AS IN TIKTOK VIDEO */}
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 z-10">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black font-sans">
            Try the Look.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-light tracking-wide">
            Explore looks, hover on an item to see its details and shop.
          </p>
        </div>

        {/* Look label tag */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase">
          <span className="font-bold text-black">{activeLook.title}</span> // {activeLook.category}
        </div>
      </div>

      {/* CENTER RUNWAY MODELS STAGE (5 MODELS ON SEAMLESS STUDIO FLOOR) */}
      <div className="relative w-full max-w-6xl mx-auto my-6 flex items-end justify-center gap-4 sm:gap-8 z-10">
        {VIDEO_LOOKS.map((look, idx) => {
          const isActive = idx === activeLookIndex;
          const isNeighbor = Math.abs(idx - activeLookIndex) === 1;

          return (
            <div
              key={look.id}
              onClick={() => {
                sounds.playClick();
                setActiveLookIndex(idx);
              }}
              className={`relative flex flex-col items-center cursor-pointer transition-all duration-500 shrink-0 ${
                isActive 
                  ? 'z-20 scale-105 opacity-100' 
                  : isNeighbor 
                  ? 'z-10 scale-95 opacity-70 hover:opacity-90' 
                  : 'z-0 scale-90 opacity-40 hover:opacity-70'
              }`}
            >
              {/* Hotspots for Active Model */}
              {isActive && look.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  onMouseEnter={() => setHoveredHotspot(spot)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    sounds.playClick();
                    onSelectLook(look);
                  }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group"
                >
                  <div className="w-5 h-5 rounded-full bg-white/90 border border-black/40 shadow-md flex items-center justify-center text-black hover:scale-125 transition-transform animate-pulse">
                    <Plus className="w-3 h-3 stroke-[3]" />
                  </div>

                  {/* Hotspot Hover Popover */}
                  {hoveredHotspot?.id === spot.id && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 p-2.5 rounded-xl bg-black text-white text-left shadow-2xl z-40 pointer-events-none animate-fadeIn">
                      <div className="text-[11px] font-bold line-clamp-1">{spot.title}</div>
                      <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{spot.color}</div>
                      <div className="text-xs font-mono font-bold mt-1 text-white">{formatPrice(spot.price)}</div>
                    </div>
                  )}
                </div>
              ))}

              {/* Full-Body Model Cutout Card */}
              <div 
                className={`relative w-44 sm:w-56 h-[400px] sm:h-[480px] rounded-2xl overflow-hidden transition-all duration-500 ${
                  isActive ? 'ring-2 ring-black/10 shadow-2xl' : 'shadow-sm'
                }`}
              >
                <img 
                  src={look.modelImage} 
                  alt={look.name}
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <div className="text-white text-left">
                    <div className="text-[10px] font-mono text-zinc-300 uppercase">{look.title}</div>
                    <div className="text-xs font-bold truncate leading-tight">{look.name}</div>
                  </div>
                </div>
              </div>

              {/* Seamless Soft Floor Drop-Shadow under shoes */}
              <div 
                className={`w-36 h-3 rounded-full bg-black/15 blur-md mt-1 transition-all ${
                  isActive ? 'w-44 bg-black/25 blur-lg' : ''
                }`}
              />

              {/* Quick View Button on Active Model */}
              {isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sounds.playClick();
                    onSelectLook(look);
                  }}
                  className="mt-3 px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Shop This Look • {formatPrice(look.totalPrice)}</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM PROGRESS BAR & NUMBERED PAGINATION (EXACTLY AS IN VIDEO) */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between z-10 pt-4 border-t border-zinc-300/60 font-mono text-xs text-zinc-500">
        {/* Numbered indicators */}
        <div className="flex items-center gap-6">
          {VIDEO_LOOKS.map((look, idx) => (
            <button
              key={look.id}
              onClick={() => {
                sounds.playWhoosh();
                setActiveLookIndex(idx);
              }}
              className={`transition-colors flex items-center gap-1 ${
                activeLookIndex === idx ? 'text-black font-bold' : 'hover:text-black'
              }`}
            >
              <span>{look.num}</span>
              {activeLookIndex === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
              )}
            </button>
          ))}
        </div>

        {/* Thin dragging slider bar */}
        <div className="hidden md:flex items-center gap-3 w-72">
          <div className="flex-1 h-0.5 bg-zinc-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${((activeLookIndex + 1) / VIDEO_LOOKS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Left / Right arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={activeLookIndex <= 0}
            className={`p-2 rounded-full border transition-all ${
              activeLookIndex <= 0 ? 'border-zinc-200 text-zinc-300' : 'border-zinc-300 text-black hover:bg-black hover:text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeLookIndex >= VIDEO_LOOKS.length - 1}
            className={`p-2 rounded-full border transition-all ${
              activeLookIndex >= VIDEO_LOOKS.length - 1 ? 'border-zinc-200 text-zinc-300' : 'border-zinc-300 text-black hover:bg-black hover:text-white'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
