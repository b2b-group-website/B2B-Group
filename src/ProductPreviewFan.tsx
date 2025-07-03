import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

// Tipi per le categorie
export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  image: string;
  accentColor: string; // es: 'from-primary to-blue-600'
  cta: string;
  comingSoon?: boolean;
  comingSoonText?: string;
};

// Props del componente
interface ProductPreviewFanProps {
  categories: ProductCategory[];
  onSelectCategory?: (key: string) => void;
  onEnterEcommerce?: () => void;
  onBackToSite?: () => void;
}

/**
 * Componente "ProductPreviewFan"
 * Visualizza le categorie prodotto in stile ventaglio interattivo con animazioni.
 * Responsive: ventaglio su desktop, lista/carousel su mobile.
 *
 * @param categories Array di categorie da mostrare
 * @param onSelectCategory Callback opzionale per click su una categoria
 * @param onEnterEcommerce Callback opzionale per transizione verso l'ecommerce
 * @param onBackToSite Callback opzionale per tornare al sito principale
 */
const ProductPreviewFan: React.FC<ProductPreviewFanProps> = ({
  categories,
  onSelectCategory,
  onEnterEcommerce,
  onBackToSite,
}) => {
  // Stato per hover/espansione
  const [hovered, setHovered] = React.useState<string | null>(null);
  const isMobile = useIsMobile();

  // Transizione verso ecommerce
  const [fadeOut, setFadeOut] = React.useState(false);
  const handleEnterEcommerce = () => {
    setFadeOut(true);
    setTimeout(() => {
      onEnterEcommerce && onEnterEcommerce();
    }, 600);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 px-4 py-12 transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* X per tornare al sito principale */}
      {onBackToSite && (
        <button
          onClick={onBackToSite}
          className="absolute top-4 left-4 z-50 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200 shadow-md"
          aria-label="Torna al sito principale"
        >
          <X className="w-6 h-6" />
        </button>
      )}
      {/* Titolo e descrizione */}
      <div className="mb-12 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Scopri i nostri mondi di prodotto
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light">
          Dall'ufficio all'industria, esplora soluzioni pensate per ogni esigenza professionale. Ogni settore è un mondo da scoprire: lasciati ispirare!
        </p>
      </div>

      {/* Ventaglio desktop / Lista mobile */}
      <div className={`w-full flex ${isMobile ? "flex-col gap-4" : "justify-center items-end"} max-w-5xl mx-auto`}>
        {categories.map((cat, i) => {
          // Calcolo inclinazione e z-index per effetto ventaglio
          const angle = isMobile ? 0 : (i - (categories.length - 1) / 2) * 12; // es: -24, -12, 0, 12, 24
          const z = isMobile ? 0 : (hovered === cat.key ? 99 : 10 + i); // z-index alto su hover
          const expanded = hovered === cat.key;
          return (
            <motion.div
              key={cat.key}
              className={`relative ${isMobile ? "w-full" : "w-56 h-80"} cursor-pointer select-none`}
              style={{
                zIndex: z,
                marginLeft: isMobile ? 0 : i === 0 ? 0 : -48,
                rotate: isMobile ? 0 : `${angle}deg`,
              }}
              initial={false}
              animate={expanded ? { scale: 1.08, y: -20 } : { scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onMouseEnter={() => !isMobile && setHovered(cat.key)}
              onMouseLeave={() => !isMobile && setHovered(null)}
              onClick={() => {
                if (isMobile) setHovered(expanded ? null : cat.key);
                onSelectCategory && onSelectCategory(cat.key);
              }}
            >
              {/* Card/spicchio */}
              <div
                className={`group relative rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br ${cat.accentColor} transition-all duration-500 flex flex-col h-full shadow-xl ${cat.comingSoon ? 'grayscale opacity-60 pointer-events-none' : ''}`}
              >
                {/* Immagine preview */}
                <div className="h-32 w-full overflow-hidden flex items-center justify-center bg-black/20">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Titolo e descrizione */}
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-white mb-1 drop-shadow-sm">
                      {cat.title}
                    </h2>
                    <p className="text-gray-100 text-sm font-light mb-2 line-clamp-2">
                      {cat.description}
                    </p>
                    {/* Avviso coming soon */}
                    {cat.comingSoon && (
                      <div className="mt-2 mb-1 px-3 py-1 rounded-xl bg-orange-500/90 text-white text-xs font-bold shadow inline-block animate-pulse relative z-10" style={{ filter: 'none' }}>
                        {cat.comingSoonText || 'Disponibile a breve'}
                      </div>
                    )}
                  </div>
                  {/* CTA visibile solo su hover/espansione e se non comingSoon */}
                  <AnimatePresence>
                    {(expanded || isMobile) && !cat.comingSoon && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 w-full py-2 rounded-xl bg-white/90 text-gray-900 font-bold text-base shadow hover:bg-white"
                        onClick={handleEnterEcommerce}
                      >
                        {cat.cta}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Hook per mobile detection (semplice)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default ProductPreviewFan; 