// Mock data for Honda Tuning Apex Lab 2026
// Rich specs, parts breakdowns, and high-impact visual representations

export const HONDA_BUILDS = [
  {
    id: 'sh350i-carbon-apex',
    name: 'Honda SH 350i Black Carbon Apex',
    tagline: 'Hyper-Scooter Luxury Edition',
    category: 'Maxi Scooter',
    basePrice: 145000000,
    accentColor: '#dc2626',
    year: '2026 SPEC',
    power: '32.5 HP / 34 Nm',
    weight: '162 kg (-12kg dry carbon)',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: 'Bản độ đỉnh cao tối thượng cho dòng vua tay ga SH 350i. Toàn bộ dàn áo thay thế bằng Dry Carbon Toray 3K đúc chân không kết hợp trọn vẹn gói phanh Billet và phuộc Ohlins.',
    components: [
      {
        id: 'sh350-carbon-body',
        name: 'Full Body Dry Carbon Toray 3K (28 chi tiết)',
        brand: 'Apex Composites',
        price: 42000000,
        spec: 'Sợi carbon đúc chân không sấy Autoclave, nhẹ hơn 45%',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sh350-ohlins-ho819',
        name: 'Cặp phuộc Ohlins HO819 bình dầu vàng chính hãng',
        brand: 'Öhlins Racing',
        price: 25500000,
        spec: 'Tùy chỉnh Rebound 24 nấc, Compression 18 nấc, ty mạ Nitride',
        image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sh350-brembo-gp4rx',
        name: 'Cặp heo dầu Brembo GP4-RX Billet Niken 4-Piston',
        brand: 'Brembo Italy',
        price: 36000000,
        spec: 'Nhôm nguyên khối phay 5-axis CNC, piston tản nhiệt nhôm cứng',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sh350-akrapovic-titan',
        name: 'Pô Akrapovic Titanium Full System + Cổ Titan khò 7 màu',
        brand: 'Akrapovič',
        price: 28500000,
        spec: 'Hợp kim Titanium cấp hàng không, lon carbon, tăng +2.8 HP',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sh350-brembo-corsa-corta',
        name: 'Cặp cùm tay thắng Brembo RCS 19 & 16 Corsa Corta',
        brand: 'Brembo Italy',
        price: 13000000,
        spec: '3 chế độ đáp ứng phanh R/S/N tùy biến hành trình lực bóp',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'vario160-street-fighter',
    name: 'Honda Vario 160 Street Fighter',
    tagline: 'Urban Cyber Assault Spec',
    category: 'Urban Sport',
    basePrice: 86500000,
    accentColor: '#06b6d4',
    year: '2026 SPEC',
    power: '17.8 HP / 15.2 Nm',
    weight: '110 kg',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    description: 'Phong cách Dark Techwear linh hoạt trên phố đông. Dàn chân mâm K-Speed phay rãnh khí động học và hệ thống phuộc monoshock Nitron chuẩn đua.',
    components: [
      {
        id: 'vario-wheels-kspeed',
        name: 'Cặp mâm K-Speed Turbofan Forged CNC 14-inch',
        brand: 'K-Speed Custom',
        price: 18500000,
        spec: 'Nhôm rèn T6061 siêu cứng siêu nhẹ chỉ 2.1kg/bánh',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'vario-nitron-r3',
        name: 'Phuộc Nitron R3 Stealth Black Edition',
        brand: 'Nitron Racing UK',
        price: 26000000,
        spec: 'Bình dầu rời màu đen bóng titanium, 3 van chỉnh độc lập',
        image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'vario-frando-caliper',
        name: 'Heo dầu Frando 4-Piston Billet Hard Anodized',
        brand: 'Frando Racing',
        price: 9500000,
        spec: 'Màu xám xi măng titan, đĩa Braking hoa lượn 260mm',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'vario-leovince-sbk',
        name: 'Ống xả LeoVince SBK LV-One Evo Carbon',
        brand: 'LeoVince Italy',
        price: 16500000,
        spec: 'Vỏ carbon chịu nhiệt cực cao, âm thanh trầm lực uy lực',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'vario-carbon-trim',
        name: 'Combo 12 chi tiết ốp vân Forged Carbon lấp lánh',
        brand: 'Apex Composites',
        price: 16000000,
        spec: 'Họa tiết vân sợi carbon vụn đúc phong cách siêu xe Lamborghini',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'winner-x-hrc-track',
    name: 'Honda Winner X HRC Track Spec',
    tagline: 'Underbone Super-Sport 150',
    category: 'Track Racing',
    basePrice: 98000000,
    accentColor: '#3b82f6',
    year: '2026 SPEC',
    power: '22.5 HP / 16.8 Nm (Dyno Stage 2)',
    weight: '115 kg',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: 'Bản độ chuẩn trường đua dành cho các tay lái đam mê tốc độ và góc cua nghiêng 55 độ. Nâng cấp ECU Redleo Pro, mâm Over Racing GP Billet và trợ lực Matris SDR.',
    components: [
      {
        id: 'winner-over-racing-wheels',
        name: 'Cặp mâm Over Racing GP-Six Billet Forged Japan',
        brand: 'Over Racing Japan',
        price: 32000000,
        spec: 'Nhôm rèn áp lực cao tiêu chuẩn đường đua Moto3',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'winner-ohlins-ttx',
        name: 'Phuộc Monoshock Ohlins TTX36 GP Tech',
        brand: 'Öhlins Racing',
        price: 21000000,
        spec: 'Công nghệ xi lanh đôi Twin-Tube cân bằng áp suất giảm giật',
        image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'winner-matris-damper',
        name: 'Trợ lực cổ Matris SDR Titanium 16 nấc tùy biến',
        brand: 'Matris Dampers Italy',
        price: 14500000,
        spec: 'Ty trợ lực mạ Titanium Nitride chống rung lắc ghi-đông tốc độ cao',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'winner-brembo-gp4',
        name: 'Heo dầu Brembo GP4-RX Billet Niken + Đĩa Galfer 300mm',
        brand: 'Brembo Italy',
        price: 18500000,
        spec: 'Hiệu suất phanh tức thì, giảm cự ly dừng xe 30%',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'winner-exhaust-arrow',
        name: 'Hệ thống pô Arrow Competition Full Titanium',
        brand: 'Arrow Special Parts',
        price: 12000000,
        spec: 'Tiếng nổ đanh gọn uy lực, xả nhanh khí thải cho dải tua cao',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'monkey125-neo-cyber',
    name: 'Honda Monkey 125 Neo-Retro Cyber',
    tagline: 'Custom Mini-Street Beast',
    category: 'Mini Street',
    basePrice: 115000000,
    accentColor: '#eab308',
    year: '2026 SPEC',
    power: '13.2 HP / 12.5 Nm',
    weight: '98 kg',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80',
    description: 'Biểu tượng Monkey huyền thoại tái sinh với phong cách Cyberpunk 2026. Gắp sau kéo dài K-Speed CNC, vành bánh béo Kitaco và pô Yoshimura Straight Cyclone.',
    components: [
      {
        id: 'monkey-kspeed-swingarm',
        name: 'Bộ gắp nhôm K-Speed Diablo CNC kéo dài +8cm',
        brand: 'K-Speed Customs',
        price: 24000000,
        spec: 'Nhôm khối T6061 phay CNC sắc sảo, mở rộng góc nghiêng phuộc',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'monkey-yoshimura-pipe',
        name: 'Ống xả Yoshimura Straight Cyclone Japan Edition',
        brand: 'Yoshimura Japan',
        price: 28000000,
        spec: 'Thiết kế cổ điển tái sinh, chất âm trầm ấm đặc trưng xứ hoa anh đào',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'monkey-kitaco-wheels',
        name: 'Cặp mâm nhôm Kitaco 12-inch Forged Wide Spec',
        brand: 'Kitaco Japan',
        price: 22000000,
        spec: 'Bản rộng 3.5 trước - 4.5 sau gắn lốp béo Pirelli Angel Scooter',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'monkey-ohlins-rear',
        name: 'Cặp phuộc sau Ohlins Monkey 125 Hoàng Kim',
        brand: 'Öhlins Racing',
        price: 23500000,
        spec: 'Lò xo vàng đặc trưng, bình dầu nhôm nén khí Nitơ tinh khiết',
        image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'monkey-brembo-calipers',
        name: 'Combo phanh Brembo Billet 2-Piston trước/sau',
        brand: 'Brembo Italy',
        price: 17500000,
        spec: 'Pass nhôm CNC anodized đen huyền bí, dây dầu Hel Earls đầu Earl',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'adv160-overland-desert',
    name: 'Honda ADV 160 Overland Desert Spec',
    tagline: 'Adventure Rally Touring Edition',
    category: 'Adventure Tourer',
    basePrice: 78000000,
    accentColor: '#10b981',
    year: '2026 SPEC',
    power: '16.5 HP / 15.0 Nm',
    weight: '138 kg',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: 'Cỗ máy khám phá mọi địa hình cát đá và đèo dốc. Trang bị phuộc YSS G-Racing phụ trợ hành trình dài, đèn trợ sáng siêu xa và cặp thùng nhôm Givi Trekker.',
    components: [
      {
        id: 'adv-yss-gracing',
        name: 'Cặp phuộc sau YSS G-Racing Black Series',
        brand: 'YSS Suspension',
        price: 19500000,
        spec: 'Tùy chỉnh High-Low Speed Compression chuyên biệt đi phượt',
        image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'adv-givi-boxes',
        name: 'Bộ thùng nhôm Adventure Givi Trekker Dolomiti',
        brand: 'Givi Italy',
        price: 24000000,
        spec: 'Nhôm tấm dập gân 2.5mm chống va đập, khóa an toàn Monokey',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'adv-puig-windshield',
        name: 'Kính chắn gió khí động học Puig Touring chỉnh điện',
        brand: 'Puig Spain',
        price: 8500000,
        spec: 'Nhựa Polycarbonate 4mm chống xước, giảm 85% áp lực gió vào ngực',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'adv-clearwater-lights',
        name: 'Cặp đèn trợ sáng Clearwater Darla LED 48W Pha Xa',
        brand: 'Clearwater Lights USA',
        price: 14000000,
        spec: 'Độ sáng 4.800 Lumens, chiếu xa 350m xuyên màn sương mù',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'adv-crashbar-kit',
        name: 'Bộ khung chống đổ thép ống liền mạch + Bảo vệ lốc máy',
        brand: 'Touratech Custom',
        price: 12000000,
        spec: 'Thép cường lực sơn tĩnh điện nhám cát chống trầy xước va đập đá văng',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

// Mechanic 2: Suspended Curved Rail Parts
export const SUSPENDED_PARTS = [
  {
    id: 'rail-part-1',
    code: 'EXH-AKRA-TI-01',
    name: 'Cổ Pô Titanium Uốn Khò Nhiệt 7 Màu',
    brand: 'Akrapovič Lab',
    tag: 'TI-GRADE 5 TITANIUM',
    price: 12500000,
    rating: '5.0',
    weight: '780g (Siêu nhẹ)',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Uốn cong thủy lực liền mạch, khò nhiệt thủ công tạo vân ngũ sắc tím xanh vàng đặc trưng.',
    rearSpec: {
      material: 'Hợp kim Titan ASTM B265 Grade 5',
      weldTech: 'Hàn TIG buồng khí Argon tinh khiết 99.99%',
      fitment: 'Honda SH 150i/160i/350i, Vario 160, ADV 160',
      qrWarranty: 'QR-CERT-AKRA-8892',
      powerGain: '+1.8 HP dải tua 6,500 - 9,000 RPM'
    }
  },
  {
    id: 'rail-part-2',
    code: 'SUSP-OHL-HO819',
    name: 'Cặp Phuộc Sau Ohlins HO819 Bình Dầu Hoàng Gia',
    brand: 'Öhlins Racing',
    tag: 'GOLD FLUID NITROGEN',
    price: 25500000,
    rating: '5.0',
    weight: '3.4 kg / cặp',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Huyền thoại phuộc vàng xứ Thụy Điển, piston dầu nén khí Nitơ độc lập mang lại cảm giác êm ái tuyệt đỉnh.',
    rearSpec: {
      material: 'Vỏ nhôm hàng không phay CNC mạ Anodized Gold',
      weldTech: 'Ty phuộc mạ Chrome cứng chống trầy vi mô',
      fitment: 'Honda SH 125/150/160, SH 350i',
      qrWarranty: 'QR-CERT-OHLINS-SWEDEN-1099',
      powerGain: 'Khử 98% xung lực dằn sốc mặt đường'
    }
  },
  {
    id: 'rail-part-3',
    code: 'BRK-BREM-GP4RX',
    name: 'Heo Dầu Brembo GP4-RX Billet Niken 4-Piston',
    brand: 'Brembo Italy',
    tag: 'BILLET 5-AXIS CNC',
    price: 36000000,
    rating: '5.0',
    weight: '1.2 kg',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Đỉnh cao phanh đường đua MotoGP. Đúc từ nhôm nguyên khối nguyên bản, mạ Niken bóng gương chống ăn mòn.',
    rearSpec: {
      material: 'Hợp kim nhôm 7075 T651 đúc nguyên khối',
      weldTech: '4 Piston đối xứng 32mm thông khí tản nhiệt',
      fitment: 'Honda SH, Vario, Winner X, CB650R, Monkey',
      qrWarranty: 'QR-CERT-BREMBO-ORIGINAL-9941',
      powerGain: 'Áp suất kẹp phanh 140 bar đáp ứng <0.05s'
    }
  },
  {
    id: 'rail-part-4',
    code: 'MCR-CORSA-19',
    name: 'Cùm Thắng Brembo RCS 19 Corsa Corta CNC',
    brand: 'Brembo Italy',
    tag: 'CORSA CORTA 3-MODE',
    price: 8900000,
    rating: '4.9',
    weight: '350g',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Cho phép người lái chuyển đổi 3 hành trình bóp phanh: Normal (êm phố), Sport (thể thao), Race (gắt tức thì).',
    rearSpec: {
      material: 'Nhôm rèn áp lực cao cán nhiệt',
      weldTech: 'Tay phanh có khớp chống gãy gập khi ngã xe',
      fitment: 'Tương thích tất cả ghi-đông Honda 22mm',
      qrWarranty: 'QR-CERT-BREMBO-CC-7712',
      powerGain: 'Điều chỉnh cự ly tay bóp 6 nấc tiện dụng'
    }
  },
  {
    id: 'rail-part-5',
    code: 'DSC-BRAK-SUN-300',
    name: 'Đĩa Thắng Braking Sunstar Lòng Nhôm CNC 300mm',
    brand: 'Braking Sunstar',
    tag: 'CERAMIC WAVE ROTOR',
    price: 6800000,
    rating: '4.9',
    weight: '920g',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Thiết kế cánh hoa lượn sóng tản nhiệt tối ưu, chống biến dạng nhiệt độ cao khi đổ đèo dốc gắt.',
    rearSpec: {
      material: 'Thép không gỉ AISI 420 nhiệt luyện cao tần',
      weldTech: 'Lòng đĩa nhôm 7075 tán rive nổi trôi tự do (Floating)',
      fitment: 'Honda SH 150/160/350i, Winner X, Sonic',
      qrWarranty: 'QR-CERT-BRAKING-IT-4402',
      powerGain: 'Hạ nhiệt độ phanh 40% so với đĩa zin'
    }
  },
  {
    id: 'rail-part-6',
    code: 'DMP-MATRIS-SDR',
    name: 'Trợ Lực Cổ Matris SDR Titanium 16 Nấc',
    brand: 'Matris Dampers',
    tag: 'SPEED DAMPER TITANIUM',
    price: 14500000,
    rating: '5.0',
    weight: '410g',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Triệt tiêu hoàn toàn hiện tượng rung lắc tay lái (tank-slapper) khi chạy tốc độ cao hoặc rơi vào ổ gà gắt.',
    rearSpec: {
      material: 'Vỏ Titanium đánh bóng vi sợi, ty mạ TiN vàng',
      weldTech: 'Van thủy lực hồi vị tuần hoàn 16 mức độ cứng mềm',
      fitment: 'Honda Winner X, Monkey 125, Vario 160',
      qrWarranty: 'QR-CERT-MATRIS-MILANO-3310',
      powerGain: 'Kiểm soát ổn định góc đánh lái tuyệt đối'
    }
  }
];

// Mechanic 3: Shuffle Grid & Wheel Fitment Studio
export const SHUFFLE_WHEELS = [
  {
    id: 'wheel-kspeed-turbofan',
    name: 'Mâm K-Speed Turbofan Forged CNC',
    series: 'SERIES 01 // AERO TURBO',
    brand: 'K-Speed Customs',
    price: 18500000,
    weight: '2.15 kg (-40% so với mâm zin)',
    sizes: ['1.60 x 17"', '1.85 x 17"', '2.15 x 14" (Vario/SH)'],
    finishes: [
      { name: 'Obsidian Black', hex: '#18181b', label: 'Đen Mờ Satin' },
      { name: 'Anodized Champagne', hex: '#d97706', label: 'Vàng Hoàng Gia' },
      { name: 'Titanium Ice', hex: '#38bdf8', label: 'Xanh Khò Titan' }
    ],
    features: [
      'Cánh turbofan định hướng gió làm mát cùm phanh',
      'Phay CNC nguyên khối trên phôi nhôm hàng không T6061',
      'Đạt chuẩn kiểm định va đập JWL / VIA Nhật Bản'
    ],
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    badge: 'BESTSELLER 2026'
  },
  {
    id: 'wheel-kingspeed-5star',
    name: 'Mâm King Speed 5 Cây Xéo Billet Forged',
    series: 'SERIES 02 // SLENDER LIGHTWEIGHT',
    brand: 'King Speed Racing',
    price: 15800000,
    weight: '1.95 kg (Mâm nhẹ nhất phân khúc)',
    sizes: ['1.60 x 17"', '1.85 x 17"', '2.50 x 14"'],
    finishes: [
      { name: 'Gunmetal Gray', hex: '#4b5563', label: 'Xám Xi Măng' },
      { name: 'Racing Gold', hex: '#eab308', label: 'Vàng Đua HRC' },
      { name: 'Gloss Carbon', hex: '#09090b', label: 'Đen Bóng Carbon' }
    ],
    features: [
      '5 chấu xéo thanh mảnh tạo hiệu ứng nan hoa xoay ảo ảnh',
      'Phù hợp các dòng xe côn tay và xe ga phong cách Drag/Track',
      'Bạc đạn Koyo Japan chính hãng độ ma sát cực thấp'
    ],
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    badge: 'ULTRA LIGHT'
  },
  {
    id: 'wheel-overracing-gp6',
    name: 'Mâm Over Racing GP-Six Forged Japan',
    series: 'SERIES 03 // MOTO3 TRACK SPEC',
    brand: 'Over Racing Japan',
    price: 32000000,
    weight: '2.05 kg',
    sizes: ['2.50 x 12" (Monkey)', '1.85 x 17" (Winner/SH)', '3.00 x 17"'],
    finishes: [
      { name: 'Champagne Gold', hex: '#b45309', label: 'Vàng Cát Gold' },
      { name: 'Nardo Grey', hex: '#64748b', label: 'Xám Nardo' },
      { name: 'Hyper Silver', hex: '#e2e8f0', label: 'Bạc Kim Loại' }
    ],
    features: [
      'Thương hiệu phay CNC danh tiếng nhất Nhật Bản',
      'Cấu trúc 6 chấu phân bố đều tải trọng khi vào cua gắt',
      'Được tin dùng trong giải vô địch đua xe Châu Á ARRC'
    ],
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    badge: 'JAPAN RACING'
  },
  {
    id: 'wheel-daytona-forged',
    name: 'Mâm Daytona Multi-Spoke CNC Luxury',
    series: 'SERIES 04 // EXECUTIVE ELEGANCE',
    brand: 'Daytona Racing',
    price: 21500000,
    weight: '2.30 kg',
    sizes: ['2.15 x 16" (SH 350i)', '2.50 x 16"', '1.85 x 17"'],
    finishes: [
      { name: 'Diamond Cut Black', hex: '#27272a', label: 'Đen Phay Kim Cương' },
      { name: 'Titanium Bronze', hex: '#78350f', label: 'Đồng Titanium' },
      { name: 'Crystal White', hex: '#f8fafc', label: 'Trắng Ngọc Trai' }
    ],
    features: [
      'Họa tiết nan đa chấu mô phỏng mâm siêu xe Porsche GT3 RS',
      'Xử lý bề mặt Diamond Cut phản chiếu ánh sáng lấp lánh ban đêm',
      'Tương thích hoàn hảo cảm biến phanh ABS 2 kênh của Honda'
    ],
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=800&q=80',
    badge: 'LUXURY CNC'
  }
];

export const HONDA_BIKE_MODELS = [
  { id: 'sh350', name: 'Honda SH 350i / 160i', type: 'Maxi Scooter', offset: 'Rear Dual' },
  { id: 'vario', name: 'Honda Vario 160 / 125', type: 'Urban Sport', offset: 'Single Arm' },
  { id: 'winner', name: 'Honda Winner X 150', type: 'Underbone', offset: 'Pro-Link' },
  { id: 'monkey', name: 'Honda Monkey 125', type: 'Mini Street', offset: 'Dual Spring' }
];
