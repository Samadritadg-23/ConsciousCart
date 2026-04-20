import { products } from "../services/products";

const ProductList = ({ selectedCategory }) => {
  const filtered = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="px-8 pb-20 max-w-7xl mx-auto">
      {/* Dynamic Header */}
      <div className="flex items-baseline gap-4 mb-10">
        <h2 className="text-3xl font-bold text-[#2D332D] tracking-tight">
          {selectedCategory}
        </h2>
        <span className="text-[#5A6355] text-sm font-medium opacity-60">
          {filtered.length} conscious alternatives found
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-[2.5rem] p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(45,51,45,0.08)] border border-transparent hover:border-[#E8EDE3]"
          >
            {/* Image Container with Soft Zoom */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] mb-6 bg-[#F9F7F2]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <p className="text-[10px] font-bold text-[#5A6355]">
                    ⭐ {product.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-2">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#A85547] font-bold">
                  Instead of: {product.toxicAlternative}
                </span>
                <h3 className="text-xl font-bold text-[#2D332D] group-hover:text-green-900 transition-colors">
                  {product.name}
                </h3>
              </div>

              <p className="text-sm text-[#5A6355] leading-relaxed line-clamp-2 mb-6 italic opacity-80">
                "{product.reason}"
              </p>

              {/* Action Button */}
              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full bg-[#E8EDE3]/50 text-[#2D332D] font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-[#2D332D] hover:text-white group/btn"
              >
                <span className="text-sm">View Alternative</span>
                <svg 
                  className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;