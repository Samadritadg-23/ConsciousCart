import { useState, useEffect } from "react";
import { products } from "../services/products";

const FeaturedSlider = () => {
  const featured = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featured.length]);

  const product = featured[index];

  return (
    <section className="px-8 mt-24 mb-16">
      <div className="max-w-7xl mx-auto h-[550px] relative rounded-[3rem] overflow-hidden shadow-2xl bg-[#E8EDE3]">
        
        {/* Background Layer: Blurry context to fill the space */}
        <div key={`bg-${product.id}`} className="absolute inset-0 transition-opacity duration-1000">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover blur-3xl opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-[#2D332D]/40"></div>
        </div>

        {/* Image Layer: The Full Product Image */}
        <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none">
          <div key={`img-${product.id}`} className="w-1/2 h-[80%] animate-fadeIn">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-full flex flex-col justify-center px-16 z-10 pointer-events-none">
          <div className="max-w-xl text-white pointer-events-auto">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">Replacing:</span>
              <span className="text-[11px] font-medium opacity-90 line-through decoration-white/50">{product.toxicAlternative}</span>
            </div>

            <h2 className="text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              {product.name}
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-yellow-400 text-sm tracking-widest">
                {"★".repeat(Math.floor(product.rating))}
                <span className="opacity-40">{"★".repeat(5 - Math.floor(product.rating))}</span>
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-70">
                Top Rated Choice
              </span>
            </div>

            <button
              onClick={() => window.open(product.link)}
              className="group inline-flex items-center gap-4 bg-white text-[#2D332D] pl-8 pr-2 py-2 rounded-full font-bold transition-all hover:bg-[#E8EDE3] hover:scale-105 active:scale-95 shadow-xl"
            >
              <span>Switch to this</span>
              <div className="w-10 h-10 bg-[#2D332D] rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-10 left-16 flex gap-3 z-20">
          {featured.map((_, i) => (
            <div 
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;