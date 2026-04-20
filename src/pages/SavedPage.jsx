import { useSaved } from "../context/SavedContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import bg from "../assets/Loginbackground.jpeg";

const SavedPage = () => {
  const { saved } = useSaved();
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Frosted Overlay */}
      <div className="min-h-screen w-full bg-[#F9F7F2]/90 backdrop-blur-[2px]">
        <Navbar />

        <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">
          
          {/* Back Button with consistent styling */}
          <div className="mb-10">
            <button 
              onClick={() => navigate("/dashboard")}
              className="group flex items-center gap-3 text-[#5A6355] hover:text-[#2D332D] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white group-hover:shadow-md transition-all">
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                Back to Dashboard
              </span>
            </button>
          </div>

          {/* Heading with editorial style */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-2">
              <span className="h-px w-12 bg-green-800/30"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#5A6355]">
                Your Sanctuary
              </span>
            </div>
            <h1 className="text-5xl font-bold text-[#2D332D] tracking-tight">
              Saved Collection
            </h1>
          </header>

          {/* Grid Logic */}
          {saved.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {saved.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group bg-white/60 backdrop-blur-md rounded-[2.5rem] p-5 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="px-2">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-green-800/60">
                        {product.category}
                      </span>
                      <span className="text-xs">⭐ {product.rating || "4.8"}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#2D332D] group-hover:text-green-900 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-[#5A6355] mt-2 italic opacity-80">
                      View details →
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Elegant Empty State */
            <div className="flex flex-col items-center justify-center py-32 bg-white/40 rounded-[3rem] border border-dashed border-[#5A6355]/20">
              <div className="w-16 h-16 rounded-full bg-[#E8EDE3] flex items-center justify-center mb-6 text-2xl">
                ♡
              </div>
              <h2 className="text-xl font-bold text-[#2D332D] mb-2">Your collection is empty</h2>
              <p className="text-[#5A6355] text-sm italic mb-8 max-w-xs text-center">
                Start building your non-toxic routine by saving products you love.
              </p>
              <button 
                onClick={() => navigate("/all-products")}
                className="px-8 py-4 bg-[#2D332D] text-white rounded-2xl font-bold text-xs tracking-[0.2em] uppercase hover:bg-green-900 transition-all shadow-lg active:scale-95"
              >
                Explore Library
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SavedPage;