import Navbar from "../components/Navbar";
import FeaturedSlider from "../components/FeaturedSlider";
import TopPicks from "../components/TopPicks";
import CategorySection from "../components/CategorySection";
import bg from "../assets/Loginbackground.jpeg";

const Dashboard = () => {
  return (
    <div 
      className="min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen w-full bg-[#F9F7F2]/80 backdrop-blur-[2px] pb-20">
        
        <Navbar />

        <main className="space-y-16 pt-4">
          
          <FeaturedSlider />

          <div className="max-w-7xl mx-auto px-4 space-y-24">
            
            <TopPicks />

            <div className="h-px bg-gradient-to-r from-transparent via-[#2D332D]/10 to-transparent mx-20" />

            <CategorySection />

          </div>
        </main>

        <footer className="mt-20 py-12 border-t border-[#2D332D]/5 text-center">
          <p className="text-xs text-[#5A6355] opacity-50">
            © 2026 ConsciousCart
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;