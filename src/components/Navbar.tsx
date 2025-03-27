
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import RetroButton from './RetroButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-retro-black/90 backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="retro-container flex justify-between items-center">
        <Link 
          to="/" 
          className="font-retro text-retro-blue text-xl md:text-2xl hover:animate-text-flicker"
        >
          TECH<span className="text-retro-pink">FEST</span> '24
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/competitions" 
            className={`terminal-text transition-colors duration-300 ${
              isActive('/competitions') 
                ? 'text-retro-pink' 
                : 'text-white hover:text-retro-blue'
            }`}
          >
            Competitions
          </Link>
          <Link 
            to="/workshops" 
            className={`terminal-text transition-colors duration-300 ${
              isActive('/workshops') 
                ? 'text-retro-pink' 
                : 'text-white hover:text-retro-blue'
            }`}
          >
            Workshops
          </Link>
          <Link 
            to="/exhibitions" 
            className={`terminal-text transition-colors duration-300 ${
              isActive('/exhibitions') 
                ? 'text-retro-pink' 
                : 'text-white hover:text-retro-blue'
            }`}
          >
            Exhibitions
          </Link>
          <Link 
            to="/gallery" 
            className={`terminal-text transition-colors duration-300 ${
              isActive('/gallery') 
                ? 'text-retro-pink' 
                : 'text-white hover:text-retro-blue'
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className="inline-block"
          >
            <RetroButton 
              variant="green" 
              className="py-1 px-3 text-xs"
            >
              Contact
            </RetroButton>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-retro-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-retro-black/95 backdrop-blur-sm border-t border-retro-blue/30 animate-page-transition-in">
          <div className="flex flex-col space-y-3 p-4">
            <Link 
              to="/competitions" 
              className={`terminal-text py-2 px-3 ${
                isActive('/competitions') 
                  ? 'text-retro-pink bg-retro-darkblue/70 rounded' 
                  : 'text-white'
              }`}
            >
              Competitions
            </Link>
            <Link 
              to="/workshops" 
              className={`terminal-text py-2 px-3 ${
                isActive('/workshops') 
                  ? 'text-retro-pink bg-retro-darkblue/70 rounded' 
                  : 'text-white'
              }`}
            >
              Workshops
            </Link>
            <Link 
              to="/exhibitions" 
              className={`terminal-text py-2 px-3 ${
                isActive('/exhibitions') 
                  ? 'text-retro-pink bg-retro-darkblue/70 rounded' 
                  : 'text-white'
              }`}
            >
              Exhibitions
            </Link>
            <Link 
              to="/gallery" 
              className={`terminal-text py-2 px-3 ${
                isActive('/gallery') 
                  ? 'text-retro-pink bg-retro-darkblue/70 rounded' 
                  : 'text-white'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`terminal-text py-2 px-3 ${
                isActive('/contact') 
                  ? 'text-retro-pink bg-retro-darkblue/70 rounded' 
                  : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
