
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-retro-black">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="relative z-10 text-center p-8">
          <h1 className="font-retro text-9xl text-retro-red mb-4 animate-text-flicker">404</h1>
          <h2 className="font-pixel text-2xl text-retro-blue mb-8">SYSTEM MALFUNCTION</h2>
          
          <div className="max-w-md mx-auto terminal-text text-white/80 mb-8 p-4 border-2 border-retro-red/50 bg-retro-black">
            <p className="mb-2">&gt; ERROR: PAGE_NOT_FOUND</p>
            <p className="mb-2">&gt; LOCATION: {location.pathname}</p>
            <p className="mb-2">&gt; DIAGNOSIS: The requested file does not exist in the system.</p>
            <p>&gt; SOLUTION: Return to a known location.</p>
          </div>
          
          <Link to="/">
            <RetroButton variant="green" size="lg">RETURN TO HOME</RetroButton>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
