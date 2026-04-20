import { useAuth } from "../context/AuthContext";
import BrandLogo from "../assets/Brandlogo.jpeg";
import { useNavigate } from "react-router-dom";
import { useSaved } from "../context/SavedContext";
const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { saved } = useSaved();

    return (
        <nav className="fixed top-0 z-50 w-full px-8 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/40 px-8 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

                {/* LEFT: Logo + Name */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <img
                            src={BrandLogo}
                            alt="logo"
                            className="w-9 h-9 rounded-full object-cover transition-transform duration-500 group-hover:rotate-[10deg]"
                        />
                        {/* Subtle organic glow behind logo */}
                        <div className="absolute inset-0 bg-green-200/30 blur-xl rounded-full -z-10"></div>
                    </div>
                    <h1 className="text-xl font-semibold tracking-tight text-[#2D332D]">
                        ConsciousCart
                    </h1>
                </div>

                {/* RIGHT: Saved + Profile + Logout */}
                <div className="flex items-center gap-8">

                    {/* Saved Products - Icon based for a cleaner look */}
                    <button
                        onClick={() => navigate("/saved")}
                        className="flex items-center gap-2 text-[#5A6355] font-medium hover:text-[#2D332D] transition-colors group"
                    >
                        <svg
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <span className="text-sm tracking-wide">
                            Saved ({saved.length})
                        </span>
                    </button>

                    {/* Profile & Logout Group */}
                    <div className="flex items-center gap-4 pl-6 border-l border-gray-200/60">
                        <div className="group relative">
                            <img
                                src={user?.photoURL}
                                alt="profile"
                                className="w-9 h-9 rounded-full border-2 border-white shadow-sm ring-1 ring-[#E8EDE3] object-cover transition-all group-hover:ring-green-200"
                            />
                        </div>

                        <button
                            onClick={logout}
                            className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 hover:text-[#A85547] transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;