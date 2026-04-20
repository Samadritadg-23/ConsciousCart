import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import BrandLogo from "../assets/Brandlogo.jpeg";
import bg from "../assets/Loginbackground.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat selection:bg-green-100"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Subtle light overlay to maintain the "airy" feel */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-[440px]">
                {/* Main Glass Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-10 sm:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center">
                    
                    {/* Brand Logo - Floating Style */}
                    <div className="flex justify-center mb-8">
                        <div className="relative p-1 bg-white rounded-full shadow-sm ring-1 ring-black/5">
                            <img
                                src={BrandLogo}
                                alt="ConsciousCart Logo"
                                className="h-20 w-20 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Header Section */}
                    <div className="space-y-3 mb-10">
                        <h1 className="text-4xl font-bold text-[#2D332D] tracking-tight">
                            ConsciousCart
                        </h1>
                        <p className="text-[#5A6355] font-medium leading-relaxed max-w-[240px] mx-auto opacity-80">
                            Your journey to a non-toxic lifestyle starts here.
                        </p>
                    </div>

                    {/* Action Section */}
                    <div className="space-y-6">
                        <button
                            onClick={handleLogin}
                            className="group relative flex items-center justify-center gap-4 w-full bg-white text-[#2D332D] font-bold px-6 py-4 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 border border-gray-100"
                        >
                            <img 
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                                alt="Google" 
                                className="w-5 h-5"
                            />
                            <span className="tracking-tight">Continue with Google</span>
                        </button>
                        
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A6355] opacity-50 font-bold">
                            Secured by Firebase
                        </p>
                    </div>
                </div>

                {/* Footer Link (Optional) */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-[#2D332D]/60 font-medium">
                        New to conscious living? <span className="text-[#2D332D] underline underline-offset-4 cursor-pointer hover:text-green-800 transition-colors">Learn more</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;