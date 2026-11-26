import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, RotateCw, ShoppingBag, 
  Check, Sparkles, Layers, Info 
} from 'lucide-react';
import { SUSPENDED_GARMENTS } from '../data/fashionData';
import { sounds } from '../utils/audio';

export default function SuspendedRail({ onAddPartToCart, formatPrice }) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  const [addedGarmentId, setAddedGarmentId] = useState(null);

  const containerRef = useRef(null);
  const cardWidth = 320;
  const totalItems = SUSPENDED_GARMENTS.length;
  const maxOffset = (totalItems - 1) * cardWidth;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartOffset(scrollOffset);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const newOffset = Math.max(-cardWidth, Math.min(maxOffset + cardWidth, startOffset - delta));
    setScrollOffset(newOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sounds.playWhoosh();
    const nearestIndex = Math.round(scrollOffset / cardWidth);
    const clampedIndex = Math.max(0, Math.min(totalItems - 1, nearestIndex));
    setScrollOffset(clampedIndex * cardWidth);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartOffset(scrollOffset);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    setScrollOffset(Math.max(-cardWidth, Math.min(maxOffset + cardWidth, startOffset - delta)));
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sounds.playWhoosh();
    const nearestIndex = Math.round(scrollOffset / cardWidth);
    const clampedIndex = Math.max(0, Math.min(totalItems - 1, nearestIndex));
    setScrollOffset(clampedIndex * cardWidth);
  };

  const slidePrev = () => {
    sounds.playWhoosh();
    setScrollOffset(prev => Math.max(0, prev - cardWidth));
  };

  const slideNext = () => {
    sounds.playWhoosh();
    setScrollOffset(prev => Math.min(maxOffset, prev + cardWidth));
  };

  const toggleFlip = (id) => {
    sounds.playMetallicSnap();
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleQuickAdd = (garment) => {
    sounds.playClick();
    setAddedGarmentId(garment.id);
    onAddPartToCart({
      ...garment,
      chosenSize: garment.sizes ? garment.sizes[0] : 'M'
    });
    setTimeout(() => {
      setAddedGarmentId(null);
    }, 1500);
  };

  return (
    <section id="rail-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#090a0e] border-t border-b border-white/[0.06]">
      {/* Background ambient glow behind the curved rail */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 font-bold mb-3 uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              MECHANIC 02 // CURVED SVG SUSPENDED RAIL & 180° FLIP
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase">
              SUSPENDED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">CLOTHES RAIL.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-light">
              Mô phỏng giá treo đồ uốn cong trong boutique xa xỉ với đường cong Bézier toán học. Kéo lướt để cảm nhận con lắc lắc lư; rê chuột hoặc nhấp để lật 180° soi chi tiết typographic in lưng áo, định lượng 520 GSM và chất liệu.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={slidePrev}
              disabled={scrollOffset <= 0}
              className={`p-3 rounded-full border transition-all ${
                scrollOffset <= 0 
                  ? 'border-white/5 bg-zinc-900/40 text-zinc-600 cursor-not-allowed' 
                  : 'border-white/10 bg-zinc-900 text-white hover:border-white/40 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              disabled={scrollOffset >= maxOffset}
              className={`p-3 rounded-full border transition-all ${
                scrollOffset >= maxOffset 
                  ? 'border-white/5 bg-zinc-900/40 text-zinc-600 cursor-not-allowed' 
                  : 'border-white/10 bg-zinc-900 text-white hover:border-white/40 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Mathematical Curved Rail Graphic (Bézier Clothesline) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pointer-events-none">
        <svg 
          viewBox="0 0 1000 80" 
          className="w-full h-14 sm:h-16 stroke-current text-zinc-700/60 overflow-visible"
        >
          {/* Main glowing curved rail */}
          <path 
            d="M 50 30 Q 500 75 950 30" 
            fill="none" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            className="text-zinc-600"
          />
          {/* Inner metallic glow line */}
          <path 
            d="M 50 30 Q 500 75 950 30" 
            fill="none" 
            stroke="url(#railGlow)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Suspension Hanger Gliders */}
          <circle cx="150" cy="40" r="4.5" fill="#ffffff" />
          <circle cx="325" cy="56" r="4.5" fill="#ffffff" />
          <circle cx="500" cy="62" r="6" fill="#ffffff" className="animate-ping" />
          <circle cx="500" cy="62" r="5" fill="#ffffff" />
          <circle cx="675" cy="56" r="4.5" fill="#ffffff" />
          <circle cx="850" cy="40" r="4.5" fill="#ffffff" />

          <defs>
            <linearGradient id="railGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Rail Items Carousel Track */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[550px] sm:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none perspective-1000 overflow-visible"
      >
        <div 
          className="flex items-center gap-8 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(50vw - ${scrollOffset}px - ${cardWidth / 2}px))`
          }}
        >
          {SUSPENDED_GARMENTS.map((garment, index) => {
            const itemPos = index * (cardWidth + 32);
            const currentCenter = scrollOffset;
            const distFromCenter = Math.abs(itemPos - currentCenter);
            const isApex = distFromCenter < (cardWidth / 2);
            
            // Mathematical Bézier curve offset
            const yOffset = Math.sin((index / totalItems) * Math.PI) * 22;
            const isFlipped = !!flippedCards[garment.id];
            const isJustAdded = addedGarmentId === garment.id;

            return (
              <div
                key={garment.id}
                className={`relative flex flex-col items-center shrink-0 transition-all duration-300 ${
                  isApex ? 'animate-pendulum' : ''
                }`}
                style={{
                  width: `${cardWidth}px`,
                  transform: `translateY(${yOffset}px) scale(${isApex ? 1.08 : 0.88})`,
                  opacity: isApex ? 1 : 0.55,
                  zIndex: isApex ? 20 : 10
                }}
              >
                {/* Metallic clothes hanger with suspension hook */}
                <div className="flex flex-col items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-300 border-2 border-white shadow-sm" />
                  <div className="w-0.5 h-10 bg-gradient-to-b from-white via-zinc-400 to-zinc-600 shadow-xs" />
                  {/* Hanger shoulder frame */}
                  <div className="w-16 h-2 rounded-xs bg-zinc-600 border border-zinc-400" />
                </div>

                {/* 3D Flip Card Container */}
                <div 
                  className={`w-full h-[410px] sm:h-[440px] rounded-2xl transition-transform duration-700 transform-style-3d relative ${
                    isApex ? 'shadow-2xl shadow-white/10 ring-1 ring-white/30' : ''
                  }`}
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#181922] to-[#0e0f14] border border-white/10 p-5 flex flex-col justify-between backface-hidden shadow-xl">
                    {/* Top Tag & Flip Button */}
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-white/10 text-white border border-white/20 uppercase">
                        {garment.tag}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(garment.id);
                        }}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white text-[10px] font-mono transition-colors"
                        title="Flip to view back graphic & fabric specs"
                      >
                        <RotateCw className="w-3 h-3" />
                        <span>FLIP 180°</span>
                      </button>
                    </div>

                    {/* Garment Image */}
                    <div className="relative my-2 rounded-xl overflow-hidden bg-black/40 h-44 sm:h-50 border border-white/5 flex items-center justify-center group">
                      <img 
                        src={garment.image} 
                        alt={garment.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-mono text-zinc-300">
                        {garment.code}
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="text-[10px] font-mono font-bold text-zinc-400 mb-0.5 uppercase">
                        {garment.brand} • {garment.weight}
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white line-clamp-1">
                        {garment.name}
                      </h3>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1 leading-snug font-light">
                        {garment.shortDesc}
                      </p>
                    </div>

                    {/* Price & Quick Add Button */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 block uppercase">Price</span>
                        <span className="text-base font-black font-mono text-white">
                          {formatPrice(garment.price)}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickAdd(garment);
                        }}
                        className={`px-4 py-2.5 rounded-full font-mono text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md ${
                          isJustAdded
                            ? 'bg-emerald-500 text-black'
                            : 'bg-white text-black hover:bg-zinc-200'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>ADDED</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>ADD TO BAG</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* REVERSE SIDE (180° FLIPPED TYPOGRAPHIC BLUEPRINT) */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#12131a] to-[#08090d] border border-white/30 p-5 flex flex-col justify-between backface-hidden shadow-2xl"
                    style={{
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    {/* Reverse Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1.5 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5" />
                        <span>ATELIER ARCHIVE // {garment.code}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(garment.id);
                        }}
                        className="p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
                        title="Flip back to front"
                      >
                        <RotateCw className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Detailed Specifications & Backprint Typography */}
                    <div className="space-y-2.5 text-left font-mono my-auto">
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <div className="text-[9px] text-zinc-400 uppercase tracking-widest">Back Typography Artwork</div>
                        <div className="text-xs text-white font-bold tracking-tight italic mt-0.5">
                          {garment.rearSpec.typography}
                        </div>
                      </div>

                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        <div className="text-[9px] text-zinc-400 uppercase tracking-widest">Fabric Composition & Weave</div>
                        <div className="text-xs text-zinc-200">{garment.rearSpec.material}</div>
                      </div>

                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        <div className="text-[9px] text-zinc-400 uppercase tracking-widest">Technique & Finish</div>
                        <div className="text-xs text-zinc-300">{garment.rearSpec.printTech}</div>
                      </div>

                      <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] text-zinc-400 uppercase tracking-widest">Origin & Sourcing</div>
                          <div className="text-xs text-emerald-400 font-bold">{garment.rearSpec.origin}</div>
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono">100% VERIFIED</span>
                      </div>
                    </div>

                    {/* Bottom Add from Back Button */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white">
                        {formatPrice(garment.price)}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickAdd(garment);
                        }}
                        className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>SELECT PIECE</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helper text */}
      <div className="max-w-md mx-auto mt-6 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-400">
          <Info className="w-3.5 h-3.5 text-zinc-300" /> Drag rail horizontally • Click <span className="text-white font-bold">FLIP 180°</span> to view backprint & fabric specs
        </span>
      </div>
    </section>
  );
}
