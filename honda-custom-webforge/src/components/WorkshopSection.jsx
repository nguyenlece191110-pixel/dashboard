import React, { useState } from 'react';
import { Wrench, Calendar, Clock, MapPin, Gauge, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function WorkshopSection() {
  const [bikeModel, setBikeModel] = useState('Honda SH 350i');
  const [selectedCity, setSelectedCity] = useState('hcm');
  const [date, setDate] = useState('2026-11-25');
  const [service, setService] = useState('full-tuning');
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
    <section id="workshop-section" className="relative py-20 sm:py-28 bg-[#090a0f] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description & Dyno Spec */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-red-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              04 // WORKSHOP & DYNO PERFORMANCE LAB
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              CÔNG NGHỆ DYNOJET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                CÂN CHỈNH MÃ LỰC.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Tất cả các bản độ và phụ kiện mua tại Apex Lab đều được hỗ trợ lắp đặt trực tiếp trên bàn nâng điện tử thủy lực tiêu chuẩn châu Âu, kết hợp chạy Dynojet 250i đo mã lực và AFR chuẩn xác từng vòng tua máy.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                  <Gauge className="w-4 h-4" /> BÀN DYNO 250i
                </div>
                <div className="text-sm font-semibold text-white">Đo Mã Lực Chuẩn Xác</div>
                <div className="text-xs text-zinc-400 mt-1">Căn chỉnh map xăng lửa ECU tối ưu tăng 15-25% gia tốc.</div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" /> BẢO HÀNH 2 NĂM
                </div>
                <div className="text-sm font-semibold text-white">Chính Hãng 100%</div>
                <div className="text-xs text-zinc-400 mt-1">Bảo dưỡng và vệ sinh phuộc, heo dầu định kỳ miễn phí.</div>
              </div>
            </div>

            {/* Workshop addresses */}
            <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5 space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <b className="text-white">Workshop TP.HCM:</b> 128 Nguyễn Trãi, Phường Bến Thành, Quận 1 (Hotline: 0908.888.2026)
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <b className="text-white">Workshop Hà Nội:</b> 86 Hoàng Hoa Thám, Quận Ba Đình (Hotline: 0909.999.2026)
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#14151e] to-[#0c0d12] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                <Wrench className="w-4 h-4 text-red-500" /> ĐẶT LỊCH LẮP ĐẶT TẠI XƯỞNG
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                MIỄN PHÍ CÔNG THỢ
              </span>
            </div>

            {isBooked ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">ĐẶT LỊCH THÀNH CÔNG!</h4>
                <p className="text-xs text-zinc-400 max-w-sm font-mono">
                  Đội ngũ kỹ thuật viên Apex Workshop đã ghi nhận lịch hẹn của bạn cho dòng xe <b className="text-white">{bikeModel}</b>. Chúng tôi sẽ gọi xác nhận trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                    1. Chi Nhánh Xưởng:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { sounds.playClick(); setSelectedCity('hcm'); }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono border transition-all text-center ${
                        selectedCity === 'hcm'
                          ? 'bg-red-600 text-white border-red-500 font-bold'
                          : 'bg-zinc-900 text-zinc-400 border-white/5'
                      }`}
                    >
                      Workshop TP.HCM (Q.1)
                    </button>
                    <button
                      type="button"
                      onClick={() => { sounds.playClick(); setSelectedCity('hn'); }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono border transition-all text-center ${
                        selectedCity === 'hn'
                          ? 'bg-red-600 text-white border-red-500 font-bold'
                          : 'bg-zinc-900 text-zinc-400 border-white/5'
                      }`}
                    >
                      Workshop Hà Nội (Ba Đình)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                    2. Dòng Xe Honda Của Bạn:
                  </label>
                  <select
                    value={bikeModel}
                    onChange={(e) => setBikeModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                  >
                    <option value="Honda SH 350i">Honda SH 350i / 300i</option>
                    <option value="Honda SH 150i / 160i">Honda SH 125i / 150i / 160i</option>
                    <option value="Honda Vario 160">Honda Vario 160 / 125</option>
                    <option value="Honda Winner X">Honda Winner X / Winner 150</option>
                    <option value="Honda Monkey 125">Honda Monkey 125 / Dax 125</option>
                    <option value="Honda ADV 160">Honda ADV 160 / ADV 350</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                      3. Ngày Hẹn:
                    </label>
                    <input 
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1.5 uppercase">
                      4. Gói Dịch Vụ:
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                    >
                      <option value="full-tuning">Lắp Đặt Full Combo Đồ Chơi</option>
                      <option value="dyno-tuning">Chạy Dyno & Canh Map Xăng Lửa</option>
                      <option value="suspension">Căn Chỉnh Phuộc Ohlins / Nitron</option>
                      <option value="brake-bleed">Lắp Heo Brembo & Xả E Dầu Áp Suất</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-red-950/40 active:scale-[0.98] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  XÁC NHẬN ĐẶT LỊCH MIỄN PHÍ
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
