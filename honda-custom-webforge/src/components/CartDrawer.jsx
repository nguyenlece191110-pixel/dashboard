import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, 
  ShieldCheck, Truck, CheckCircle2, QrCode, Gift 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  formatPrice
}) {
  const [shippingMethod, setShippingMethod] = useState('express'); // 'express' | 'store'
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shippingFee = shippingMethod === 'express' ? (subtotal > 250 ? 0 : 25) : 0;
  const grandTotal = subtotal + shippingFee;

  const handleCheckout = () => {
    sounds.playEngineThrum();
    setIsCheckingOut(true);

    setTimeout(() => {
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#aaaaaa', '#000000']
      });
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1400);
  };

  const handleFinish = () => {
    sounds.playClick();
    onClearCart();
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#0d0e14]/95 border-l border-white/10 h-full flex flex-col shadow-2xl backdrop-blur-2xl z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#111219]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-white" />
            <h2 className="text-lg font-black text-white font-mono tracking-tight uppercase">
              SHOPPING BAG ({items.length})
            </h2>
          </div>
          <button 
            onClick={() => { sounds.playClick(); onClose(); }}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Complete Success View */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white font-mono uppercase">ORDER CONFIRMED</h3>
            <p className="text-xs text-zinc-400 max-w-sm font-mono leading-relaxed">
              Order Ref: <b className="text-white">#WF-2026-ARCHIVE-882</b>. 
              {shippingMethod === 'store' 
                ? ' Your pieces are being curated at the Flagship Atelier for private collection.'
                : ' Your runway capsule has been packed in luxury archive dust bags and dispatched with DHL Worldwide Express.'}
            </p>

            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 flex items-center gap-4 text-left">
              <QrCode className="w-12 h-12 text-white shrink-0" />
              <div className="text-[11px] font-mono text-zinc-400">
                Scan your private NFC order token to track real-time courier dispatch and verify garment authenticity.
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono font-bold text-xs tracking-wider transition-all uppercase"
            >
              CONTINUE BROWSING ATELIER
            </button>
          </div>
        ) : (
          /* Cart List & Checkout */
          <>
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 text-zinc-500 space-y-3 font-mono">
                  <ShoppingBag className="w-12 h-12 stroke-[1.5] text-zinc-600" />
                  <p className="text-sm">Your shopping bag is currently empty</p>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors uppercase"
                  >
                    EXPLORE 2026 RUNWAY LOOKS
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{item.name}</div>
                      {item.chosenSize && (
                        <div className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                          Size: <span className="text-white font-bold">{item.chosenSize}</span>
                        </div>
                      )}
                      {item.spec && (
                        <div className="text-[10px] text-zinc-500 truncate mt-0.5">{item.spec}</div>
                      )}
                      <div className="text-xs font-mono font-bold text-white mt-1">
                        {formatPrice(item.price)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          onRemoveItem(item.id);
                        }}
                        className="text-zinc-500 hover:text-white transition-colors p-1"
                        title="Remove piece"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2 bg-zinc-800 px-2 py-1 rounded-md text-xs font-mono">
                        <button
                          onClick={() => {
                            sounds.playClick();
                            onUpdateQty(item.id, (item.quantity || 1) - 1);
                          }}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-bold w-4 text-center">{item.quantity || 1}</span>
                        <button
                          onClick={() => {
                            sounds.playClick();
                            onUpdateQty(item.id, (item.quantity || 1) + 1);
                          }}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout Bar */}
            {items.length > 0 && (
              <div className="p-5 sm:p-6 border-t border-white/10 bg-[#111219] space-y-4">
                {/* Method selector */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { sounds.playClick(); setShippingMethod('express'); }}
                    className={`py-2 px-2.5 rounded-xl text-[11px] font-mono border flex items-center justify-center gap-1.5 transition-all ${
                      shippingMethod === 'express'
                        ? 'bg-white/10 border-white text-white font-bold'
                        : 'bg-zinc-900 border-white/5 text-zinc-400'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>EXPRESS COURIER</span>
                  </button>

                  <button
                    onClick={() => { sounds.playClick(); setShippingMethod('store'); }}
                    className={`py-2 px-2.5 rounded-xl text-[11px] font-mono border flex items-center justify-center gap-1.5 transition-all ${
                      shippingMethod === 'store'
                        ? 'bg-white/10 border-white text-white font-bold'
                        : 'bg-zinc-900 border-white/5 text-zinc-400'
                    }`}
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>ATELIER PICKUP</span>
                  </button>
                </div>

                {/* Subtotals */}
                <div className="space-y-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-white font-bold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-emerald-400 font-bold">
                      {shippingFee === 0 ? 'COMPLIMENTARY' : formatPrice(shippingFee)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                    <span>TOTAL:</span>
                    <span className="text-white font-mono text-lg">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {/* Checkout Master Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-white/10 active:scale-[0.98] transition-all uppercase"
                >
                  {isCheckingOut ? (
                    <span>PROCESSING ORDER...</span>
                  ) : (
                    <>
                      <span>CHECKOUT • {formatPrice(grandTotal)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
