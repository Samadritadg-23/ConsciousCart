import { useNavigate } from "react-router-dom";

const categories = [
  { 
    name: "Personal Care", 
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M9 10a3 3 0 1 1 6 0" 
  },
  { 
    name: "Food", 
    icon: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" 
  },
  { 
    name: "Clothing", 
    icon: "M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 2V11a10.1 10.1 0 005.25 8.86L12 22l4.75-2.14A10.1 10.1 0 0022 11V5.46a2 2 0 00-1.62-2z" 
  },
  { 
    name: "Daily Essentials", 
    icon: "M3 6h18M3 12h18M3 18h18" 
  },
  { 
    name: "Lifestyle", 
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" 
  }
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-8 pb-20 max-w-7xl mx-auto">
      {/* Header with high-end editorial line */}
      <div className="flex items-center justify-between mb-12 px-2">
        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#5A6355] opacity-70">
          Explore Categories
        </h2>
        <div className="h-[1px] flex-grow ml-8 bg-[#2D332D]/10"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.name.toLowerCase())}`)}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* The "Pebble" Icon Container */}
            <div className="relative w-full aspect-square flex items-center justify-center mb-6 transition-all duration-500">
              
              {/* Background Decorative Shape (The Doodle Shadow) */}
              <div className="absolute inset-0 bg-[#E8EDE3]/40 rounded-[2.5rem] rotate-3 group-hover:rotate-12 group-hover:bg-[#E8EDE3] transition-all duration-700 ease-out"></div>
              
              {/* Main White Card for the Icon */}
              <div className="relative z-10 w-[85%] h-[85%] bg-white/80 backdrop-blur-sm rounded-[2.2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-xl group-hover:bg-white">
                <svg 
                  className="w-10 h-10 text-[#5A6355] transition-colors duration-300 group-hover:text-[#2D332D]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                </svg>
              </div>
            </div>

            {/* Category Label */}
            <span className="text-sm font-semibold text-[#5A6355] tracking-tight transition-colors duration-300 group-hover:text-[#2D332D]">
              {cat.name}
            </span>
            
            {/* Subtle indicator dot that appears on hover */}
            <div className="w-1 h-1 bg-green-800 rounded-full mt-3 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;