import React, { useState } from 'react';
import { 
  Sparkles, Layers, ShieldCheck, Check, ShoppingBag, 
  Loader2, ArrowRight, CheckCircle2, Eye 
} from 'lucide-react';
import { SHUFFLE_SNEAKERS } from '../data/fashionData';
import { sounds } from '../utils/audio';

export default function ShuffleMatrix({ onAddPartToCart, formatPrice }) {
  const [heroShoeId, setHeroShoeId] = useState(SHUFFLE_SNEAKERS[0].id);
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // Default US 9.5
  const [btnState, setBtnState] = useState('idle');

  const heroShoe = SHUFFLE_SNEAKERS.find(s => s.id === heroShoeId) || SHUFFLE_SNEAKERS[0];
  const gridShoes = SHUFFLE_SNEAKERS.filter(s => s.id !== heroShoeId);

  // Trigger FLIP layout transition
  const handleSwapToHero = (targetShoe) => {
    sounds.playMetallicSnap();
    setHeroShoeId(targetShoe.id);
    setSelectedFinish(0);
    setSelectedSize(2);
  };

  const handleAddToCart = () => {
    sounds.playClick();
    setBtnState('loading');

    setTimeout(() => {
      sounds.playEngineThrum();
      setBtnState('success');

      onAddPartToCart({
        id: `${heroShoe.id}-${Date.now()}`,
        name: `${heroShoe.name} (${heroShoe.finishes[selectedFinish].label})`,
        price: heroShoe.price,
        brand: heroShoe.brand,
        image: heroShoe.image,
        chosenSize: heroShoe.sizes[selectedSize],
        spec: `Silhouette: ${heroShoe.silhouette} • Size: ${heroShoe.sizes[selectedSize]}`
      });

      setTimeout(() => {
        setBtnState('idle');
      }, 2000);
    }, 600);
  };

  return (
    <section id="matrix-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#08080a]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-white/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 font-bold mb-3 uppercase">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          MECHANIC 03 // FLIP MATRIX FOOTWEAR SHOWCASE
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase">
          SHUFFLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">SNEAKERS GRID.</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-light">
          Công nghệ FLIP (First, Last, Invert, Play) tráo đổi thẻ giày thể thao mượt mà như trong video. Trình diễn dòng Air Jordan 12 Retro, Luka 5 và giày couture runway.
        </p>
      </div>

      {/* Main Matrix Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: HERO SHOWCASE CARD (Takes 7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#14151c] to-[#0c0d12] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Tag & Series */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono font-bold text-white uppercase">
              {heroShoe.badge}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {heroShoe.series}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="relative z-10">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">{heroShoe.brand}</div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 transition-all uppercase">
              {heroShoe.name}
            </h3>
            <div className="text-xs font-mono text-zinc-300 mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{heroShoe.tagline}</span>
            </div>
          </div>

          {/* Shoe Hero Image with Ambient Halo */}
          <div className="relative my-6 rounded-2xl bg-black/60 border border-white/5 h-64 sm:h-80 flex items-center justify-center overflow-hidden group">
            {/* Ambient Lighting Ring matching selected color */}
            <div 
              className="absolute w-56 h-56 rounded-full blur-2xl opacity-20 transition-all duration-500"
              style={{ backgroundColor: heroShoe.finishes[selectedFinish].hex }}
            />

            <img 
              src={heroShoe.image} 
              alt={heroShoe.name}
              className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />

            {/* Silhouette Details Badge */}
            <div className="absolute bottom-3 left-3 z-20 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-white" />
              <span>{heroShoe.cushioning}</span>
            </div>
          </div>

          {/* Controls: Color Finishes + Sizing Pills */}
          <div className="space-y-4 pt-2 border-t border-white/10 relative z-10">
            {/* Colorway Finishes */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                  Colorway: <span className="text-white font-bold">{heroShoe.finishes[selectedFinish]?.label}</span>
                </label>
                <div className="flex items-center gap-2">
                  {heroShoe.finishes.map((finish, idx) => (
                    <button
                      key={finish.name}
                      onClick={() => { sounds.playClick(); setSelectedFinish(idx); }}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedFinish === idx 
                          ? 'border-white scale-110 shadow-lg' 
                          : 'border-zinc-700 hover:scale-105'
                      }`}
                      style={{ backgroundColor: finish.hex }}
                      title={finish.label}
                    >
                      {selectedFinish === idx && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                  Select Size:
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {heroShoe.sizes.map((sz, idx) => (
                    <button
                      key={sz}
                      onClick={() => { sounds.playClick(); setSelectedSize(idx); }}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        selectedSize === idx
                          ? 'bg-white text-black font-bold border-white shadow-sm'
                          : 'bg-zinc-900 text-zinc-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Price & Magnetic Add to Bag Button */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Retail Price</span>
              <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                {formatPrice(heroShoe.price)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={btnState !== 'idle'}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl ${
                btnState === 'loading'
                  ? 'bg-zinc-800 text-zinc-400 cursor-wait'
                  : btnState === 'success'
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white text-black hover:bg-zinc-200 active:scale-95'
              }`}
            >
              {btnState === 'loading' && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  <span>RESERVING PAIR...</span>
                </>
              )}
              {btnState === 'success' && (
                <>
                  <CheckCircle2 className="w-5 h-5 text-black animate-bounce" />
                  <span>ADDED TO BAG ✓</span>
                </>
              )}
              {btnState === 'idle' && (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG • {formatPrice(heroShoe.price)}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT: 2x2 THUMBNAIL SHUFFLE GRID (Takes 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-white" /> SHUFFLE MATRIX (CLICK TO SWAP)
            </span>
            <span className="text-[10px] font-mono text-zinc-400">FLIP Animation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {gridShoes.map((shoe) => (
              <div
                key={shoe.id}
                onClick={() => handleSwapToHero(shoe)}
                className="group p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center gap-4 relative overflow-hidden shadow-lg active:scale-[0.98]"
              >
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/40 border border-white/5 shrink-0 relative">
                  <img 
                    src={shoe.image} 
                    alt={shoe.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 block mb-0.5 uppercase">
                    {shoe.brand}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate group-hover:text-zinc-200 transition-colors uppercase">
                    {shoe.name}
                  </h4>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1 line-clamp-1">
                    {shoe.silhouette}
                  </div>
                  <div className="text-sm font-mono font-black text-white mt-1">
                    {formatPrice(shoe.price)}
                  </div>
                </div>

                {/* Flip Swap Icon */}
                <div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-white group-hover:text-black flex items-center justify-center text-zinc-400 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Authenticity Guarantee Card */}
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2 text-zinc-200 font-semibold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>AUTHENTICITY GUARANTEED // 2026</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-[11px] text-zinc-400 pl-1 font-light">
              <li>100% Verified authentic with NFC smart verification tag</li>
              <li>Includes original archive box & extra custom braided laces</li>
              <li>Complimentary express air delivery with signature confirmation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
