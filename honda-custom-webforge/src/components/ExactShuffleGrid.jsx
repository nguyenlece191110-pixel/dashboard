import React, { useState } from 'react';
import { Shuffle, ShoppingBag, Check, Sparkles, ArrowRight } from 'lucide-react';
import { VIDEO_SHUFFLE_ITEMS } from '../data/videoData';
import { sounds } from '../utils/audio';

export default function ExactShuffleGrid({ onAddToCart, formatPrice }) {
  const [items, setItems] = useState(VIDEO_SHUFFLE_ITEMS);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [justAddedId, setJustAddedId] = useState(null);

  // Mechanic 3: Instant Array Reshuffle on click
  const handleReshuffle = () => {
    sounds.playMetallicSnap();
    setItems(prev => {
      const copy = [...prev];
      // Move first item to end
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
  };

  const handleSelectSize = (itemId, size) => {
    sounds.playClick();
    setSelectedSizes(prev => ({
      ...prev,
      [itemId]: size
    }));
  };

  const handleAddItem = (item) => {
    sounds.playEngineThrum();
    const size = selectedSizes[item.id] || item.sizes[1];
    setJustAddedId(item.id);
    onAddToCart({
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      price: item.price,
      brand: item.brand,
      image: item.image,
      chosenSize: size,
      spec: `Size: ${size} • Category: ${item.category}`
    });
    setTimeout(() => {
      setJustAddedId(null);
    }, 1800);
  };

  return (
    <section id="matrix-section" className="py-16 sm:py-24 bg-[#ffffff] text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
              Mechanic 03 // Array Reshuffle
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mt-1">
              Shuffle Grid.
            </h2>
            <p className="text-sm text-zinc-500 mt-2 max-w-xl font-light">
              "A shuffle grid where a button click instantly re-sorts the array positions — no physics, no heavy WebGL, pure lightweight luxury."
            </p>
          </div>

          <button
            onClick={handleReshuffle}
            className="px-5 py-3 rounded-full bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 font-mono text-xs font-bold flex items-center gap-2 transition-all active:scale-95 shadow-xs"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>RESHUFFLE GRID</span>
          </button>
        </div>

        {/* 4-Item Grid with Lead Spotlight (Items[0] is featured) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Featured Hero Item */}
          <div className="md:col-span-6 bg-[#f7f7f9] p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-sm transition-all duration-500 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-mono font-bold uppercase">
                  {items[0].tag}
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase">{items[0].brand}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {items[0].name}
              </h3>
              <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
                {items[0].desc}
              </p>
            </div>

            <div className="my-6 rounded-2xl overflow-hidden bg-white border border-zinc-200/80 h-64 sm:h-80 flex items-center justify-center p-4">
              <img 
                src={items[0].image} 
                alt={items[0].name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-mono text-zinc-500 mr-2">Size:</span>
                {items[0].sizes.map(sz => (
                  <button
                    key={sz}
                    onClick={() => handleSelectSize(items[0].id, sz)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border transition-all ${
                      (selectedSizes[items[0].id] || items[0].sizes[1]) === sz
                        ? 'bg-black text-white border-black font-bold'
                        : 'bg-white text-zinc-600 border-zinc-300 hover:border-black'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-black">
                  {formatPrice(items[0].price)}
                </span>

                <button
                  onClick={() => handleAddItem(items[0])}
                  className={`px-6 py-3 rounded-full font-mono text-xs font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md ${
                    justAddedId === items[0].id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-black text-white hover:bg-zinc-800'
                  }`}
                >
                  {justAddedId === items[0].id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 3 Secondary Grid Cards */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.slice(1).map((item) => (
              <div
                key={item.id}
                onClick={handleReshuffle}
                className="group p-5 rounded-2xl bg-[#fafafc] border border-zinc-200 hover:border-black transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{item.brand}</div>
                  <h4 className="text-sm font-bold text-black group-hover:underline truncate mt-0.5">
                    {item.name}
                  </h4>
                </div>

                <div className="my-4 h-36 rounded-xl overflow-hidden bg-white border border-zinc-200 p-2">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                  <span className="text-sm font-bold font-mono text-black">{formatPrice(item.price)}</span>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-black flex items-center gap-1">
                    Swap to Hero <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
