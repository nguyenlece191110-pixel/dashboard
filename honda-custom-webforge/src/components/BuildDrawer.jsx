import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function BuildDrawer({ 
  build, 
  isOpen, 
  onClose, 
  onAddBuildToCart,
  onAddPartToCart,
  formatPrice 
}) {
  const [selectedParts, setSelectedParts] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize all garments as selected with default size
  useEffect(() => {
    if (build && build.components) {
      const initialParts = {};
      const initialSizes = {};
      build.components.forEach(c => {
        initialParts[c.id] = true;
        initialSizes[c.id] = c.sizes ? c.sizes[0] : 'M';
      });
      setSelectedParts(initialParts);
      setSelectedSizes(initialSizes);
      setIsSuccess(false);
    }
  }, [build]);

  if (!isOpen || !build) return null;

  const togglePart = (id) => {
    sounds.playClick();
    setSelectedParts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSizeChange = (id, size) => {
    sounds.playClick();
    setSelectedSizes(prev => ({
      ...prev,
      [id]: size
    }));
  };

  const selectedComponents = build.components.filter(c => selectedParts[c.id]);
  const totalPrice = selectedComponents.reduce((sum, item) => sum + item.price, 0);
  const totalCount = selectedComponents.length;

  const handleAddFullLook = () => {
    sounds.playEngineThrum();
    
    // Celebratory confetti burst
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.7, x: 0.8 },
      colors: ['#ffffff', '#888888', '#000000']
    });

    setIsSuccess(true);
    onAddBuildToCart({
      id: `look-${build.id}-${Date.now()}`,
      buildId: build.id,
      name: `[FULL LOOK] ${build.name}`,
      price: totalPrice,
      image: build.image,
      selectedCount: totalCount,
      components: selectedComponents.map(c => ({
        ...c,
        chosenSize: selectedSizes[c.id] || 'M'
      }))
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl bg-[#0c0d12]/95 border-l border-white/10 h-full flex flex-col shadow-2xl backdrop-blur-2xl z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#111219]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20">
                {build.season}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {build.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              {build.name}
            </h2>
          </div>
          <button 
            onClick={() => { sounds.playClick(); onClose(); }}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Full Runway Model Look Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
            <img 
              src={build.image} 
              alt={build.name}
              className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="text-[11px] font-mono text-zinc-300 flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{build.model}</span>
                </div>
                <div className="text-xs text-zinc-200 font-mono font-bold">
                  {build.tagline}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">Complete Set</span>
                <span className="text-xl font-black text-white font-mono">{formatPrice(build.totalPrice)}</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {build.description}
          </p>

          {/* Breakdown List Section ("Shop the Look" Items) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" /> PIECES IN THIS LOOK ({totalCount}/{build.components.length})
              </h3>
              <span className="text-[11px] font-mono text-zinc-500">Select items to customize</span>
            </div>

            <div className="space-y-3">
              {build.components.map((item) => {
                const isChecked = !!selectedParts[item.id];
                const currentSize = selectedSizes[item.id] || (item.sizes ? item.sizes[0] : 'M');

                return (
                  <div 
                    key={item.id}
                    onClick={() => togglePart(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-2.5 ${
                      isChecked 
                        ? 'bg-zinc-900/90 border-white/30 shadow-sm' 
                        : 'bg-zinc-900/30 border-white/5 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-white text-black' : 'border border-zinc-600'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                        />

                        <div>
                          <div className="text-[10px] font-mono text-zinc-400 font-semibold">{item.brand} • {item.category}</div>
                          <div className="text-xs font-bold text-white line-clamp-1">{item.name}</div>
                          <div className="text-[10px] text-zinc-400 line-clamp-1 mt-0.5">{item.spec}</div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs font-mono font-bold text-white">{formatPrice(item.price)}</div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            sounds.playClick();
                            onAddPartToCart({
                              ...item,
                              chosenSize: currentSize
                            });
                          }}
                          className="text-[10px] text-zinc-400 hover:text-white underline decoration-dotted transition-colors mt-1 block"
                        >
                          Add piece only
                        </button>
                      </div>
                    </div>

                    {/* Size Selector for the item */}
                    {isChecked && item.sizes && item.sizes.length > 1 && (
                      <div 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono"
                      >
                        <span className="text-zinc-500 uppercase">Size:</span>
                        <div className="flex items-center gap-1">
                          {item.sizes.map((sz) => (
                            <button
                              key={sz}
                              onClick={() => handleSizeChange(item.id, sz)}
                              className={`px-2 py-0.5 rounded text-[10px] border transition-all ${
                                currentSize === sz 
                                  ? 'bg-white text-black font-bold border-white' 
                                  : 'bg-zinc-800 text-zinc-400 border-white/10 hover:text-white'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Runway Quality Guarantee */}
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center gap-3 text-xs text-zinc-400 font-mono">
            <ShieldCheck className="w-5 h-5 text-zinc-300 shrink-0" />
            <span>100% Authentic Runway Atelier Archive. Premium organic fabrics with complimentary bespoke sizing alterations.</span>
          </div>
        </div>

        {/* Footer Master CTA Bar (Exact "Add Full Look • $490" mechanic from video) */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#111219] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-zinc-400">
              Total ({totalCount} pieces selected):
            </span>
            <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
              {formatPrice(totalPrice)}
            </span>
          </div>

          <button
            onClick={handleAddFullLook}
            disabled={totalCount === 0 || isSuccess}
            className={`w-full py-4 rounded-xl font-bold font-mono tracking-wider text-sm flex items-center justify-center gap-2.5 transition-all shadow-xl ${
              isSuccess
                ? 'bg-emerald-500 text-black'
                : totalCount === 0
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-zinc-200 active:scale-[0.98]'
            }`}
          >
            {isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5 animate-bounce" />
                ADDED FULL LOOK TO BAG!
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                ADD FULL LOOK • {formatPrice(totalPrice)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
