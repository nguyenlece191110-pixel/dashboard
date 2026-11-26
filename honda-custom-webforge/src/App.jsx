import React, { useState } from 'react';
import ExactVideoNavbar from './components/ExactVideoNavbar';
import ExactTryTheLook from './components/ExactTryTheLook';
import ExactClotheslineRail from './components/ExactClotheslineRail';
import ExactShuffleGrid from './components/ExactShuffleGrid';
import BuildDrawer from './components/BuildDrawer';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { sounds } from './utils/audio';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [themeMode, setThemeMode] = useState('light'); // 'light' is the exact studio look from the video
  const [currency, setCurrency] = useState('USD');
  const [toastMessage, setToastMessage] = useState(null);

  const formatPrice = (amount) => {
    if (currency === 'VND') {
      const vnd = Math.round(amount * 25400);
      return `${vnd.toLocaleString('vi-VN')}₫`;
    }
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddBuildToCart = (lookCombo) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === lookCombo.id);
      if (existing) {
        return prev.map(item => item.id === lookCombo.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...lookCombo, quantity: 1 }];
    });
    showToast(`Added full ensemble to bag!`);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.chosenSize === item.chosenSize);
      if (existing) {
        return prev.map(i => (i.id === item.id && i.chosenSize === item.chosenSize)
          ? { ...i, quantity: (i.quantity || 1) + 1 }
          : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`Added "${item.name}" to bag!`);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Convert look format for BuildDrawer
  const activeBuildDrawerData = selectedLook ? {
    id: selectedLook.id,
    name: selectedLook.name,
    category: selectedLook.category,
    season: '2026 ARCHIVE',
    tagline: selectedLook.name,
    totalPrice: selectedLook.totalPrice,
    image: selectedLook.modelImage,
    description: 'Complete runway look curated by WebForge Studio. Tap individual items to customize sizes or add the full outfit in one touch.',
    components: selectedLook.items.map(i => ({
      id: i.id,
      name: i.name,
      brand: 'WEBFORGE',
      category: 'Apparel',
      price: i.price,
      spec: `Color: ${i.color} • Size: ${i.size}`,
      sizes: ['S', 'M', 'L', 'XL'],
      image: i.image
    }))
  } : null;

  return (
    <div className={`min-h-screen ${themeMode === 'light' ? 'bg-[#fcfcfd] text-zinc-900' : 'bg-[#090a0f] text-zinc-100'} transition-colors duration-300`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-black text-white shadow-2xl flex items-center gap-2.5 font-mono text-xs animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Exact Video Navigation Header */}
      <ExactVideoNavbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* MECHANIC 1: EXACT "Try the Look." (STEP 8 IN VIDEO) */}
      <ExactTryTheLook 
        onSelectLook={(look) => setSelectedLook(look)}
        formatPrice={formatPrice}
      />

      {/* MECHANIC 2: EXACT CLOTHESLINE RAIL & HOODIE FOCUS (STEP 14, 22, 28 IN VIDEO) */}
      <ExactClotheslineRail 
        onAddToCart={handleAddToCart}
        formatPrice={formatPrice}
      />

      {/* MECHANIC 3: EXACT SHUFFLE GRID (AIR JORDAN 12 & LUKA 5 RESHUFFLE) */}
      <ExactShuffleGrid 
        onAddToCart={handleAddToCart}
        formatPrice={formatPrice}
      />

      {/* FOOTER */}
      <Footer />

      {/* SLIDE-OUT SHOP THE LOOK DRAWER */}
      <BuildDrawer 
        build={activeBuildDrawerData}
        isOpen={!!selectedLook}
        onClose={() => setSelectedLook(null)}
        onAddBuildToCart={handleAddBuildToCart}
        onAddPartToCart={handleAddToCart}
        formatPrice={formatPrice}
      />

      {/* SHOPPING BAG DRAWER */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        formatPrice={formatPrice}
      />
    </div>
  );
}
