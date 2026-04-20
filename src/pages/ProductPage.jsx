import { useParams, useNavigate } from "react-router-dom";
import { products } from "../services/products";
import Navbar from "../components/Navbar";
import { useState } from "react";
import bg from "../assets/Loginbackground.jpeg";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  // State for reviews logic
  const [reviews, setReviews] = useState(product?.reviews || []);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    const newReview = { user: "You", rating, comment };
    setReviews([newReview, ...reviews]);
    setComment("");
  };

  if (!product) return <div className="text-center p-20 font-bold">Product not found</div>;

  return (
    <div 
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen w-full bg-[#F9F7F2]/92 backdrop-blur-[4px]">
        <Navbar />

        <main className="max-w-6xl mx-auto px-8 pt-32 pb-20">
          
          {/* Back Navigation */}
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-[#5A6355] mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-[#2D332D] transition-colors">
              ← Back to Collection
            </span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT: Visuals */}
            <div className="space-y-6">
              <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-white aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Review Highlights */}
              <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/50">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D332D] mb-6">💬 Community Reviews</h2>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {reviews.map((r, i) => (
                    <div key={i} className="bg-white/80 p-4 rounded-2xl shadow-sm border border-white/50">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-bold text-[#2D332D]">{r.user}</p>
                        <p className="text-xs text-yellow-600">{"⭐".repeat(r.rating)}</p>
                      </div>
                      <p className="text-sm text-[#5A6355] italic">"{r.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Product Story */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-green-800 opacity-60 mb-2 block">
                  Non-Toxic Selection
                </span>
                <h1 className="text-5xl font-bold text-[#2D332D] tracking-tight mb-4">{product.name}</h1>
                <div className="flex items-center gap-4">
                   <p className="text-2xl font-medium text-[#2D332D]">{product.price}</p>
                   <span className="text-sm text-[#5A6355]">⭐ {product.rating} ({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* WHY BETTER SECTION */}
              <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-sm mb-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-green-900 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                   Why this is better
                </h2>
                <ul className="space-y-4">
                  {product.whyBetter.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-700 mt-1">✓</span>
                      <span className="text-[#5A6355] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ADD REVIEW FORM */}
              <form onSubmit={handleSubmit} className="bg-[#2D332D] rounded-[2.5rem] p-8 text-white shadow-xl">
                <h3 className="font-bold mb-4 tracking-wide">Leave your feedback</h3>
                <div className="flex gap-4 mb-4">
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="bg-white/10 border border-white/20 p-3 rounded-xl text-sm outline-none"
                  >
                    {[5,4,3,2,1].map((n) => (
                      <option key={n} value={n} className="text-black">{n} Stars</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Share your experience..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 p-3 rounded-xl text-sm outline-none placeholder:text-white/40 min-h-[44px]"
                  />
                </div>
                <button className="w-full bg-white text-[#2D332D] py-4 rounded-xl font-bold text-sm tracking-widest hover:bg-green-100 transition-all active:scale-95">
                  SUBMIT REVIEW
                </button>
              </form>

              <button 
                onClick={() => window.open(product.link)}
                className="mt-6 w-full border-2 border-[#2D332D] text-[#2D332D] py-5 rounded-[2rem] font-bold tracking-[0.2em] hover:bg-[#2D332D] hover:text-white transition-all shadow-lg"
              >
                VIEW ON SHOP
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;