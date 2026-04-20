import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../services/products";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import bg from "../assets/Loginbackground.jpeg";
import { useSaved } from "../context/SavedContext";

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { toggleSave, isSaved } = useSaved();

    // Local state for LIVE filtering
    const [searchQuery, setSearchQuery] = useState("");

    // FILTER LOGIC: This runs on every keystroke
    const filtered = products.filter((p) => {
        const isInCategory = p.category.toLowerCase() === category.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return isInCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen w-full bg-fixed bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="min-h-screen w-full bg-[#F9F7F2]/90 backdrop-blur-[2px]">
                <Navbar />

                <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">

                    <button onClick={() => navigate("/dashboard")} className="mb-8 group flex items-center gap-3 text-[#5A6355] hover:text-[#2D332D] transition-all">
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold">← Back to Dashboard</span>
                    </button>

                    <div className="mb-12">
                        {/* Pass the state and the setter down to the SearchBar */}
                        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
                    </div>

                    <header className="mb-16">
                        <h1 className="text-5xl font-bold text-[#2D332D] capitalize">{category}</h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-5 border border-white/50 transition-all hover:-translate-y-2 cursor-pointer"
                            >
                                {/* ❤️ HEART BUTTON */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSave(product);
                                    }}
                                    className="absolute top-4 right-4 text-xl transition hover:scale-125"
                                >
                                    <i
                                        className={`fa-${isSaved(product.id) ? "solid" : "regular"} fa-heart ${isSaved(product.id) ? "text-red-500" : "text-gray-400"
                                            }`}
                                    ></i>
                                </button>
                                <img src={product.image} className="aspect-[4/3] rounded-[2rem] object-cover mb-6 shadow-sm" />
                                <div className="px-2">
                                    <span className="text-[10px] uppercase font-bold text-[#A85547] block mb-2">Replace: {product.toxicAlternative}</span>
                                    <h3 className="text-xl font-bold text-[#2D332D] mb-3">{product.name}</h3>
                                    <p className="text-sm text-[#5A6355] italic mb-6">"{product.reason}"</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(product.link);
                                        }}
                                        className="w-full bg-[#2D332D] text-white py-4 rounded-2xl font-bold text-sm hover:bg-green-900 shadow-lg"
                                    >
                                        View Selection
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 bg-white/40 rounded-[3rem] border border-dashed border-[#5A6355]/20">
                            <p className="text-[#5A6355] font-medium italic">No products matching "{searchQuery}" in {category}.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default CategoryPage;