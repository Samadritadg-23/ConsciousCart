import { products } from "../services/products";
import { useNavigate } from "react-router-dom";
import { useSaved } from "../context/SavedContext";

const TopPicks = () => {
    const top = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const navigate = useNavigate();
    const { toggleSave, isSaved } = useSaved();


    return (
        <section className="px-8 py-16 max-w-7xl mx-auto">
            {/* Header with high-end spacing */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 px-2 gap-4">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A85547] mb-2 block">
                        Highly Recommended
                    </span>
                    <h2 className="text-3xl font-bold text-[#2D332D] tracking-tight">
                        Top Conscious Picks
                    </h2>
                </div>
                <button
                    onClick={() => navigate("/products")}
                    className="text-sm font-bold text-[#5A6355] border-b border-[#5A6355]/20 pb-1 hover:border-[#5A6355] transition-all"
                >
                    Explore all products →
                </button>
            </div>

            {/* Grid: Taller aspect ratio for a premium feel */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {top.map((p) => (
                    <div
                        key={p.id}
                        onClick={() => navigate(`/product/${p.id}`)}
                        className="group cursor-pointer"
                    >
                        {/* Image Wrapper */}
                        <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-3">
                            {/* Save button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSave(p);
                                }}
                                className="absolute top-3 right-3 text-lg transition hover:scale-125"
                            >
                                <i
                                    className={`fa-${isSaved(p.id) ? "solid" : "regular"} fa-heart ${isSaved(p.id) ? "text-red-500" : "text-gray-400"
                                        }`}
                                ></i>
                            </button>
                            <img
                                src={p.image}
                                alt={p.name}
                                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Subtle Overlay Badge */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]">
                                <div className="bg-white/80 backdrop-blur-md py-2 rounded-2xl text-center shadow-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                    <span className="text-[10px] font-bold text-[#2D332D] uppercase tracking-wider">
                                        Quick View
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Product Meta */}
                        <div className="text-center px-2">
                            <h3 className="text-sm font-semibold text-[#2D332D] leading-tight mb-1 group-hover:text-green-800 transition-colors">
                                {p.name}
                            </h3>
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-[10px] text-[#5A6355] font-medium tracking-wide">
                                    RATING
                                </span>
                                <span className="text-[10px] font-bold text-green-700">
                                    {p.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopPicks;