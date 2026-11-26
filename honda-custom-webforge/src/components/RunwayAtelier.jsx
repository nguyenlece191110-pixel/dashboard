import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Scissors, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function RunwayAtelier() {
  const [city, setCity] = useState('paris');
  const [date, setDate] = useState('2026-12-01');
  const [experience, setExperience] = useState('vip-fitting');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    sounds.playEngineThrum();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
    }, 4000);
  };

  return (
    <section id="atelier-section" className="relative py-20 sm:py-28 bg-[#090a0f] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              04 // PRIVATE ATELIER & VIP FITTING
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              RUNWAY TAILORING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                & BESPOKE ALTERATIONS.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Experience the 2026 collection in person at our flagship atelier spaces. Book a one-on-one private styling session with complimentary custom sizing, hem adjustments, and runway archive access.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold mb-1">
                  <Scissors className="w-4 h-4" /> BESPOKE CUT
                </div>
                <div className="text-sm font-semibold text-white">In-House Tailors</div>
                <div className="text-xs text-zinc-400 mt-1">Complimentary sleeve, waist, and inseam custom alterations.</div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" /> ARCHIVE ACCESS
                </div>
                <div className="text-sm font-semibold text-white">Private Showroom</div>
                <div className="text-xs text-zinc-400 mt-1">Preview unreleased samples and 1-of-1 runway prototypes.</div>
              </div>
            </div>

            {/* Atelier addresses */}
            <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5 space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <b className="text-white">Paris Atelier:</b> 14 Rue du Faubourg Saint-Honoré, 75008 Paris
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <b className="text-white">Tokyo Flagship:</b> 5-7-22 Minamiaoyama, Minato-ku, Tokyo
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#14151e] to-[#0c0d12] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h3 className="text-lg font-black text-white font-mono flex items-center gap-2 uppercase">
                <Calendar className="w-4 h-4 text-white" /> RESERVE PRIVATE STYLING
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                COMPLIMENTARY
              </span>
            </div>

            {isBooked ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase">SESSION CONFIRMED!</h4>
                <p className="text-xs text-zinc-400 max-w-sm font-mono">
                  Your private atelier appointment at <b className="text-white">{city.toUpperCase()}</b> has been registered. Our head stylist will contact you via email with your invitation pass.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                    1. Select Flagship Atelier:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { sounds.playClick(); setCity('paris'); }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono border transition-all text-center ${
                        city === 'paris'
                          ? 'bg-white text-black border-white font-bold'
                          : 'bg-zinc-900 text-zinc-400 border-white/5'
                      }`}
                    >
                      Paris (Saint-Honoré)
                    </button>
                    <button
                      type="button"
                      onClick={() => { sounds.playClick(); setCity('tokyo'); }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono border transition-all text-center ${
                        city === 'tokyo'
                          ? 'bg-white text-black border-white font-bold'
                          : 'bg-zinc-900 text-zinc-400 border-white/5'
                      }`}
                    >
                      Tokyo (Aoyama)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                    2. Desired Experience:
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  >
                    <option value="vip-fitting">Private VIP Runway Look Fitting</option>
                    <option value="bespoke-suit">Bespoke Outerwear & Tailoring Consultation</option>
                    <option value="archive-tour">2026 Archive & Footwear Preview</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                    3. Date of Visit:
                  </label>
                  <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-white/5 active:scale-[0.98] transition-all uppercase"
                >
                  <Calendar className="w-4 h-4" />
                  REQUEST ATELIER APPOINTMENT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
