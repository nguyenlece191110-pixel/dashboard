import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Check, ShoppingBag, RotateCw, ArrowLeft } from 'lucide-react';
import { VIDEO_RAIL_ITEMS } from '../data/videoData';
import { sounds } from '../utils/audio';

export default function ExactClotheslineRail({ onAddToCart, formatPrice }) {
  const [scrollIndex, setScrollIndex] = useState(1); // Default to Hoodie
  const [selectedProduct, setSelectedProduct] = useState(null); // When opened in single focused view
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState(0);
  const [isBackView, setIsBackView] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const containerRef = useRef(null);

  const handleSelectProduct = (item) => {
    sounds.playClick();
    setSelectedProduct(item);
    setSelectedSize('L');
    setSelectedColor(0);
    setIsBackView(false);
    setAddedSuccess(false);
  };

  const handleCloseFocusedView = () => {
    sounds.playClick();
    setSelectedProduct(null);
  };

  const handleAddToCartFocused = () => {
    if (!selectedProduct) return;
    sounds.playEngineThrum();
    setAddedSuccess(true);
    onAddToCart({
      id: `${selectedProduct.id}-${Date.now()}`,
      name: selectedProduct.name + (selectedProduct.subtitle ? ` (${selectedProduct.subtitle})` : ''),
      price: selectedProduct.price,
      color: selectedProduct.color,
      chosenSize: selectedSize,
      image: selectedProduct.image,
      spec: `Size: ${selectedSize} • Color: ${selectedProduct.color}`
    });
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  };

  const scrollLeft = () => {
    sounds.playWhoosh();
    setScrollIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    sounds.playWhoosh();
    setScrollIndex(prev => Math.min(VIDEO_RAIL_ITEMS.length - 1, prev + 1));
  };

  return (
    <section id="rail-section" className="relative py-16 sm:py-24 bg-[#f8f8f9] text-zinc-900 overflow-hidden border-t border-b border-zinc-200">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
            Mechanic 02 // Clothesline Rail
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mt-1">
            Suspended Clothes Rail.
          </h2>
          <p className="text-sm text-zinc-500 mt-2 max-w-xl font-normal">
            As seen in the video: items glide along a suspended wire. Click any hanging piece (like the grey hoodie) to open the single-piece focus view.
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-3">
          <button 
            onClick={scrollLeft}
            disabled={scrollIndex <= 0}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              scrollIndex <= 0 ? 'border-zinc-200 text-zinc-300' : 'border-zinc-300 hover:border-black hover:bg-black hover:text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollRight}
            disabled={scrollIndex >= VIDEO_RAIL_ITEMS.length - 1}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              scrollIndex >= VIDEO_RAIL_ITEMS.length - 1 ? 'border-zinc-200 text-zinc-300' : 'border-zinc-300 hover:border-black hover:bg-black hover:text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SINGLE PRODUCT FOCUSED VIEW (EXACTLY LIKE STEP 6 & STEP 28 IN VIDEO) */}
      {selectedProduct ? (
        <div className="max-w-6xl mx-auto px-6 py-6 animate-fadeIn">
          <button
            onClick={handleCloseFocusedView}
            className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 hover:text-black mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Clothesline Rail</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Center Hanging Garment with string from ceiling */}
            <div className="md:col-span-7 flex flex-col items-center justify-center relative">
              {/* String from ceiling */}
              <div className="w-0.5 h-16 bg-zinc-400 mb-0 shadow-xs" />
              
              {/* Wooden Hanger */}
              <div className="w-48 h-5 rounded-xs bg-[#b89778] border border-[#9a7b5d] shadow-md flex items-center justify-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-zinc-600 border border-zinc-400 -mt-6" />
              </div>

              {/* Garment Body (With realistic fabric drape & "THANK GOD I'M AN ATHEIST" text) */}
              <div 
                className="relative w-80 sm:w-96 h-[420px] rounded-2xl bg-[#e5e5e7] shadow-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden border border-zinc-200 animate-pendulum select-none cursor-pointer group"
                onClick={() => { sounds.playMetallicSnap(); setIsBackView(!isBackView); }}
                title="Click to flip front / back"
              >
                {/* Hoodie Hood Drape */}
                <div className="absolute top-0 w-32 h-14 bg-[#d4d4d8] rounded-b-3xl border-b border-zinc-400/40 shadow-inner" />

                {/* Garment Graphic Text */}
                {selectedProduct.isViralStar ? (
                  <div className="relative z-10 flex flex-col items-center justify-center font-black tracking-tight leading-none text-zinc-900 mt-6 select-none">
                    <span className="text-3xl font-extrabold tracking-tighter">THANK GOD</span>
                    <span className="text-2xl font-bold tracking-tight my-1 text-zinc-800">I'M AN</span>
                    <span className="text-3xl font-black tracking-tighter">ATHEIST</span>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest mt-4">
                      {isBackView ? 'BACK TYPOGRAPHY // 520 GSM' : 'FRONT RAW HEM // PORTO'}
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center font-black tracking-tight leading-none text-zinc-900 mt-6">
                    <span className="text-2xl font-bold uppercase">{selectedProduct.name}</span>
                    <span className="text-sm font-mono text-zinc-600 mt-2">{selectedProduct.color}</span>
                  </div>
                )}

                {/* Front Kangaroo Pocket */}
                <div className="absolute bottom-10 w-44 h-20 bg-[#d8d8dc] rounded-t-xl border-t border-zinc-300" />
                {/* Ribbed bottom hem */}
                <div className="absolute bottom-0 inset-x-0 h-6 bg-[#ceced2] border-t border-zinc-300" />

                {/* Flip indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-white/80 backdrop-blur-xs px-2 py-1 rounded-full shadow-xs">
                  <RotateCw className="w-3 h-3" />
                  <span>FLIP</span>
                </div>
              </div>
            </div>

            {/* Right Product Buying Panel (Exact recreation of Step 6 & Step 28 in video) */}
            <div className="md:col-span-5 bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-xl space-y-6">
              <div>
                <h3 className="text-3xl font-black text-black tracking-tight">
                  {selectedProduct.name}
                </h3>
                <div className="text-sm text-zinc-500 font-mono mt-0.5">
                  {selectedProduct.subtitle || selectedProduct.color}
                </div>
                <div className="text-2xl font-bold text-black font-mono mt-3">
                  {formatPrice(selectedProduct.price)}
                </div>
              </div>

              {/* Color swatches */}
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Color</span>
                <div className="flex items-center gap-2.5">
                  {selectedProduct.swatches.map((hex, idx) => (
                    <button
                      key={hex}
                      onClick={() => { sounds.playClick(); setSelectedColor(idx); }}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColor === idx ? 'border-black scale-110 shadow-sm' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size selector pills */}
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Size</span>
                <div className="flex items-center gap-2">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => { sounds.playClick(); setSelectedSize(sz); }}
                      className={`w-11 h-11 rounded-full text-xs font-mono font-bold border transition-all flex items-center justify-center ${
                        selectedSize === sz
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Master Black Pill CTA Button (As in video: "Add to cart") */}
              <button
                onClick={handleAddToCartFocused}
                className={`w-full py-4 rounded-full font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-black hover:bg-zinc-800 text-white shadow-black/10'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO CART</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to cart</span>
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-400 leading-relaxed font-light text-center pt-2">
                Free standard shipping on orders over $150. 14-day complimentary returns.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* CLOTHESLINE HORIZONTAL RAIL (EXACTLY LIKE STEP 14 & STEP 22 IN VIDEO) */
        <div className="relative py-12">
          {/* Main Horizontal Suspended Wire spanning the entire width */}
          <div className="absolute top-20 inset-x-0 h-0.5 bg-zinc-300 shadow-xs z-0" />

          {/* Hanging Clothes Track */}
          <div 
            ref={containerRef}
            className="flex items-start gap-12 px-12 overflow-x-auto no-scrollbar scroll-smooth relative z-10 select-none pb-8"
          >
            {VIDEO_RAIL_ITEMS.map((item, idx) => {
              const isCenter = idx === scrollIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectProduct(item)}
                  className="flex flex-col items-center shrink-0 cursor-pointer group transition-all duration-300"
                  style={{
                    transform: isCenter ? 'scale(1.15) translateY(-6px)' : 'scale(0.92)',
                    opacity: isCenter ? 1 : 0.65
                  }}
                >
                  {/* Wire hook */}
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mb-1" />
                  <div className="w-0.5 h-6 bg-zinc-400" />
                  
                  {/* Hanger */}
                  <div className="w-24 h-2.5 rounded-xs bg-[#c2a488] border border-[#a38367] shadow-xs flex items-center justify-center">
                    <span className="w-3 h-1 bg-white rounded-xs" />
                  </div>

                  {/* Garment Card */}
                  <div className="w-44 h-60 rounded-xl overflow-hidden bg-white border border-zinc-200 shadow-md group-hover:shadow-xl group-hover:border-black transition-all mt-2 p-2 flex flex-col justify-between">
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-zinc-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.isViralStar && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center">
                          <span className="text-[10px] font-black text-white tracking-tighter leading-tight uppercase font-mono">
                            THANK GOD<br/>I'M AN<br/>ATHEIST
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 text-left">
                      <div className="text-[11px] font-bold text-black truncate">{item.name}</div>
                      <div className="text-[10px] font-mono text-zinc-500 flex justify-between items-center mt-0.5">
                        <span>{item.type}</span>
                        <span className="font-bold text-black">{formatPrice(item.price)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Helper caption */}
          <div className="text-center mt-6 text-xs font-mono text-zinc-400">
            Click any garment on the rail to inspect details, sizes, and add to cart.
          </div>
        </div>
      )}
    </section>
  );
}
