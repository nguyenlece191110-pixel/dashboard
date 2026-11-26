import React from 'react';
import { ShoppingBag, Volume2, VolumeX, Sparkles, SlidersHorizontal, Globe } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  soundEnabled, 
  setSoundEnabled, 
  currency, 
  setCurrency,
  formatPrice 
}) {
  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
    if (newState) sounds.playClick();
  };

  const toggleCurrency = () => {
    sounds.playClick();
    setCurrency(curr => {
      if (curr === 'USD') return 'EUR';
      if (curr === 'EUR') return 'VND';
      return 'USD';
    });
  };

  const scrollTo = (id) => {
    sounds.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      {/* Top Editorial Ticker Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-[#0b0c10] border-b border-white/[0.04] text-[11px] font-mono tracking-widest text-zinc-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            WEBFORGE 2026 RUNWAY ARCHIVE
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">PARIS // TOKYO // NEW YORK ATELIER</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hover:text-white transition-colors cursor-pointer">
            FREE WORLDWIDE EXPRESS ON ORDERS OVER $250
          </span>
          <span className="text-zinc-600">|</span>
          <span className="hover:text-white transition-colors cursor-pointer">
            LIMITED EDITION RUNWAY CAPSULE
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => { sounds.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center text-black font-black text-lg tracking-tighter shadow-lg shadow-white/10 group-hover:bg-zinc-200 transition-all">
            W
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white">WEBFORGE</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-white/10 border border-white/20 text-zinc-200 rounded">2026 ATELIER</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">AVANT-GARDE STREETWEAR</div>
          </div>
        </div>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider">
          <button 
            onClick={() => scrollTo('orbit-section')}
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-zinc-500 font-bold">01</span> TRY THE LOOK
          </button>
          <button 
            onClick={() => scrollTo('rail-section')}
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-zinc-500 font-bold">02</span> SUSPENDED RAIL
          </button>
          <button 
            onClick={() => scrollTo('matrix-section')}
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-zinc-500 font-bold">03</span> SHUFFLE SNEAKERS
          </button>
          <button 
            onClick={() => scrollTo('atelier-section')}
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-zinc-500 font-bold">04</span> ATELIER FITTING
          </button>
        </nav>

        {/* Right utility buttons */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute mechanical sounds" : "Enable Web Audio feedback"}
            className="p-2 sm:p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400">AUDIO</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-500" />
                <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500">MUTED</span>
              </>
            )}
          </button>

          {/* Currency Toggle */}
          <button
            onClick={toggleCurrency}
            className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono font-bold text-zinc-300 hover:text-white hover:border-white/30 transition-all"
            title="Click to toggle currency (USD / EUR / VND)"
          >
            {currency}
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCart();
            }}
            className="relative px-3.5 sm:px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-white/10 transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline font-mono font-bold">BAG</span>
            <span className="w-5 h-5 rounded-full bg-black text-white font-mono font-bold text-xs flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
