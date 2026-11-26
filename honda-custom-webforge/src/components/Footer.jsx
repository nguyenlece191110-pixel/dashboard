import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Globe, Share2, MessageSquare, ArrowUp } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-black font-black text-lg">
                W
              </div>
              <div>
                <div className="text-base font-extrabold text-white tracking-wider">WEBFORGE ATELIER</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">2026 RUNWAY ARCHIVE</div>
              </div>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-sans font-light">
              Recreation of the viral 2026 website experience by @webforge6. Featuring 3 mind-blowing carousel mechanics: 3D Drag-to-Orbit Lookbook, Suspended Curved Clothes Rail with 180° Flip, and Footwear FLIP Shuffle Matrix.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="p-2 rounded-lg bg-zinc-900 hover:bg-white hover:text-black transition-colors cursor-pointer" title="Global Network">
                <Globe className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-zinc-900 hover:bg-white hover:text-black transition-colors cursor-pointer" title="Share Experience">
                <Share2 className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-zinc-900 hover:bg-white hover:text-black transition-colors cursor-pointer" title="Client Concierge">
                <MessageSquare className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Runway Collections */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-widest text-xs uppercase">COLLECTIONS</div>
            <ul className="space-y-2 text-zinc-400 text-[11px]">
              <li className="hover:text-white cursor-pointer">Atheist Heavy Fleece</li>
              <li className="hover:text-white cursor-pointer">Obsidian Techwear Vest</li>
              <li className="hover:text-white cursor-pointer">Sculptural Melton Trench</li>
              <li className="hover:text-white cursor-pointer">Liquid Chrome Puffer</li>
              <li className="hover:text-white cursor-pointer">Kid Mohair Cardigan</li>
            </ul>
          </div>

          {/* Footwear Archive */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-widest text-xs uppercase">FOOTWEAR LAB</div>
            <ul className="space-y-2 text-zinc-400 text-[11px]">
              <li className="hover:text-white cursor-pointer">Air Jordan 12 Retro</li>
              <li className="hover:text-white cursor-pointer">Luka 5 Cyber Velocity</li>
              <li className="hover:text-white cursor-pointer">Avant-Garde Chunky Runner</li>
              <li className="hover:text-white cursor-pointer">Tactical Combat Vibram Boot</li>
              <li className="hover:text-white cursor-pointer">Archive Suede Slip-Ons</li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-widest text-xs uppercase">CONCIERGE</div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Paris: +33 1 42 68 00 26</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>concierge@webforge2026.com</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 mt-2">
                Atelier Hours: 10:00 - 20:00 CET (Monday - Saturday)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 WEBFORGE ATELIER. Built faithfully to the viral @webforge6 concept video.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
