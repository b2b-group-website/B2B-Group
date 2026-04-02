import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from 'lucide-react';

export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  image: string;
  accentColor: string; 
  cta: string;
  comingSoon?: boolean;
  comingSoonText?: string;
};

interface ProductPreviewFanProps {
  categories: ProductCategory[];
  onSelectCategory?: (key: string) => void;
  onEnterEcommerce?: () => void;
  onBackToSite?: () => void;
}

const ProductPreviewFan: React.FC<ProductPreviewFanProps> = ({
  categories,
  onSelectCategory,
  onEnterEcommerce,
  onBackToSite,
}) => {
  const [hovered, setHovered] = useState<string | null>(categories[0]?.key || null);
  const isMobile = useIsMobile();
  const [fadeOut, setFadeOut] = useState(false);

  const handleEnterEcommerce = () => {
    setFadeOut(true);
    setTimeout(() => {
      onEnterEcommerce && onEnterEcommerce();
    }, 600);
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center bg-dark-gray px-4 py-16 transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {onBackToSite && (
        <button
          onClick={onBackToSite}
          className="absolute top-8 left-8 z-50 p-3 rounded-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white hover:text-dark-gray transition-colors duration-300"
          aria-label="Torna al sito"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="mb-16 text-center max-w-3xl relative z-10 space-y-6">
        <div className="inline-block px-3 py-1 border border-white/20 text-white/70 uppercase tracking-widest text-xs font-bold mb-2 rounded-[2px]">
          Divisioni B2B
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Ecosistema <span className="text-primary">Prodotti</span>
        </h1>
        <p className="text-lg text-gray-400 font-medium">
          Dall'ufficio all'industria, esplora soluzioni pensate per ogni esigenza professionale con layout rigorosi e specifiche tecniche.
        </p>
      </div>

      <div className={`w-full max-w-7xl mx-auto flex ${isMobile ? "flex-col" : "flex-row"} gap-[2px] bg-white/10 p-[2px] rounded-[2px] relative z-10 shadow-2xl h-[600px]`}>
        {categories.map((cat) => {
          const isExpanded = hovered === cat.key;
          return (
            <motion.div
              key={cat.key}
              className={`relative cursor-pointer overflow-hidden rounded-[2px] bg-dark-gray flex flex-col ${cat.comingSoon ? 'grayscale opacity-60 pointer-events-none' : ''}`}
              initial={false}
              animate={{ flex: isExpanded ? 3 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              onMouseEnter={() => !isMobile && setHovered(cat.key)}
              onMouseLeave={() => !isMobile && setHovered(cat.key)} 
              onClick={() => {
                if (isMobile) setHovered(isExpanded ? null : cat.key);
                onSelectCategory && onSelectCategory(cat.key);
              }}
            >
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="object-cover w-full h-full opacity-40 mix-blend-overlay transition-transform duration-700"
                  style={{ transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accentColor} opacity-20`}></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end p-6 md:p-8">
                <div className="flex-1 flex items-start justify-end">
                  {cat.comingSoon && (
                    <div className="px-3 py-1 bg-dark-gray/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-[2px] backdrop-blur-sm">
                      {cat.comingSoonText || 'In arrivo'}
                    </div>
                  )}
                </div>

                <div className="border-l-2 border-primary pl-4 mb-4">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight whitespace-nowrap">
                    {cat.title}
                  </h2>
                </div>
                
                <AnimatePresence>
                  {isExpanded && !cat.comingSoon && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden flex flex-col justify-end"
                    >
                      <p className="text-gray-300 text-sm font-medium mb-6 line-clamp-3">
                        {cat.description}
                      </p>
                      
                      <button
                        className="w-full sm:w-auto px-6 py-4 bg-white text-dark-gray font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center group rounded-[2px]"
                        onClick={(e) => { e.stopPropagation(); handleEnterEcommerce(); }}
                      >
                        {cat.cta}
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default ProductPreviewFan; 