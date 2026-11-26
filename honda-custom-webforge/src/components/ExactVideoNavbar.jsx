import React from 'react';
import { ShoppingBag, Search, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function ExactVideoNavbar({ 
  cartCount, 
  onOpenCart, 
  soundEnabled, 
  setSoundEnabled, 
  themeMode, 
  setThemeMode,
  currency,
  setCurrency 
}) {
  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
    if (newState) sounds.playClick();
  };

  const toggleTheme = () => {
    sounds.playClick();
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollTo = (id) => {
    sounds.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcfcfd]/90 backdrop-blur-md border-b border-zinc-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => { sounds.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center font-bold text-sm tracking-tighter">
            W
          </div>
          <span className="font-extrabold text-base tracking-tight text-black">
            WebForge
          </span>
        </div>

        {/* Center Minimal Navigation as in Video */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-600">
          <button onClick={() => scrollTo('orbit-section')} className="hover:text-black transition-colors">
            Try the Look
          </button>
          <button onClick={() => scrollTo('rail-section')} className="hover:text-black transition-colors">
            Clothes Rail
          </button>
          <button onClick={() => scrollTo('matrix-section')} className="hover:text-black transition-colors">
            Shuffle Grid
          </button>
          <button onClick={() => scrollTo('orbit-section')} className="hover:text-black transition-colors">
            Collection
          </button>
          <button onClick={() => scrollTo('rail-section')} className="hover:text-black transition-colors">
            Archive
          </button>
        </nav>

        {/* Right utility buttons */}
        <div className="flex items-center gap-4 text-xs font-mono">
          {/* Sound Synthesizer */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute mechanical sounds" : "Enable sound"}
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-black transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 text-zinc-400" />}
          </button>

          {/* Theme switcher (Video studio light vs Dark mode) */}
          <button
            onClick={toggleTheme}
            title="Toggle Studio Light / Dark Mode"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 hover:border-black text-[11px] font-medium transition-all"
          >
            {themeMode === 'light' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Studio Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Shopping Bag trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCart();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 text-xs font-medium transition-all shadow-sm active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag</span>
            <span className="w-4 h-4 rounded-full bg-white text-black font-bold text-[10px] flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
