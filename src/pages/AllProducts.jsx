import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../services/products";
import Navbar from "../components/Navbar";
import bg from "../assets/Loginbackground.jpeg";
import { useSaved } from "../context/SavedContext";

const AllProducts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const { toggleSave, isSaved } = useSaved();

    // Sync search from URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlSearch = params.get("search") || "";
        setQuery(urlSearch);
    }, [location.search]);

    // Filter logic
    const filtered = products.filter((p) => {
        const searchTerm = query.toLowerCase();
        return (
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm) ||
            p.toxicAlternative.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <div
            className="min-h-screen w-full bg-fixed bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="min-h-screen w-full bg-[#F9F7F2]/90 backdrop-blur-[2px]">
                <Navbar />

                <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                    >
                        ← Back to Dashboard
                    </button>

                    {/* Search */}
                    <div className="mb-12">
                        <input
                            type="text"
                            placeholder="Refine your search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full max-w-md p-4 rounded-2xl bg-white border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-green-100"
                        />

                        {query && (
                            <p className="mt-4 text-sm text-gray-500 italic">
                                Showing results for "{query}" ({filtered.length} found)
                            </p>
                        )}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="relative bg-white/70 p-6 rounded-[2rem] border border-white shadow-sm cursor-pointer hover:-translate-y-2 transition"
                            >

                                {/* ❤️ HEART BUTTON */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSave(product);
                                    }}
                                    className="absolute top-4 right-4 text-xl"
                                >
                                    <i
                                        className={`fa-${isSaved(product.id) ? "solid" : "regular"} fa-heart ${isSaved(product.id) ? "text-red-500" : "text-gray-400"
                                            }`}
                                    ></i>
                                </button>

                                <img
                                    src={product.image}
                                    className="aspect-video w-full object-cover rounded-2xl mb-4"
                                />

                                <h3 className="text-xl font-bold">{product.name}</h3>
                                <p className="text-sm text-red-800 mt-1">
                                    Instead of: {product.toxicAlternative}
                                </p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(product.link);
                                    }}
                                    className="mt-6 w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
                                >
                                    View Alternative
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Empty */}
                    {filtered.length === 0 && (
                        <div className="text-center py-20 opacity-50">
                            <p>No products match your search.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AllProducts;