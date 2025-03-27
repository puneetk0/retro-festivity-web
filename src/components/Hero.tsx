
import { useEffect, useState } from 'react';
import RetroButton from './RetroButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'WELCOME TO THE MOST INNOVATIVE TECH FEST OF THE YEAR';
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Terminal text typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (counter < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[counter]);
        setCounter(counter + 1);
      }, 80);
    }
    
    return () => clearTimeout(timeout);
  }, [counter, fullText]);
  
  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('April 12, 2025 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    // Initial calculation
    updateCountdown();
    
    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="min-h-screen pt-24 crt-screen">
      <div className="retro-grid"></div>
      <div className="scanline"></div>
      
      <div className="relative z-10 retro-container flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/lovable-uploads/091599ca-dd1e-413f-90e2-6e0d0141d700.png" 
            alt="Neutron Logo" 
            className="h-24 md:h-32 mb-4 animate-glow-pulse" 
          />
          <h1 className="retro-title text-retro-pink mb-2 animate-glow-pulse">
            NEU<span className="text-retro-blue">TRON</span> 2025
          </h1>
          <div className="h-20 flex items-center justify-center">
            <p className="terminal-text text-retro-green">
              &gt; {displayedText}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
        
        <div className="max-w-2xl mb-12 border border-retro-blue/30 bg-retro-darkblue/60 p-6 rounded-sm">
          <p className="terminal-text text-white/80 mb-6">
            Join us for a mind-bending journey through technology, innovation, and creativity.
            Experience the fusion of past and future in this unique retro-themed tech extravaganza.
          </p>
          
          {/* Larger Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4">
            <div className="countdown-block">
              <div className="text-3xl md:text-5xl lg:text-6xl font-retro text-retro-green mb-1">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="terminal-text text-xs md:text-sm text-retro-blue uppercase">Days</div>
            </div>
            
            <div className="countdown-block">
              <div className="text-3xl md:text-5xl lg:text-6xl font-retro text-retro-green mb-1">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="terminal-text text-xs md:text-sm text-retro-blue uppercase">Hours</div>
            </div>
            
            <div className="countdown-block">
              <div className="text-3xl md:text-5xl lg:text-6xl font-retro text-retro-green mb-1">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="terminal-text text-xs md:text-sm text-retro-blue uppercase">Mins</div>
            </div>
            
            <div className="countdown-block">
              <div className="text-3xl md:text-5xl lg:text-6xl font-retro text-retro-green mb-1">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="terminal-text text-xs md:text-sm text-retro-blue uppercase">Secs</div>
            </div>
          </div>
          
          <div className="text-center terminal-text text-sm text-retro-yellow">
            <span className="text-retro-blue">&lt;</span>
            <span>NEUTRON 2025 | APRIL 12</span>
            <span className="text-retro-blue">&gt;</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          <Link to="/competitions">
            <div className="neon-border p-6 flex flex-col items-center" style={{"--neon-color-1": "#ff71ce", "--neon-color-2": "#b967ff"} as React.CSSProperties}>
              <h3 className="font-pixel text-retro-pink mb-3">COMPETITIONS</h3>
              <p className="terminal-text text-white/70 text-sm mb-3">Battle for glory in our tech arenas</p>
              <RetroButton variant="red" size="sm">EXPLORE</RetroButton>
            </div>
          </Link>
          
          <Link to="/workshops">
            <div className="neon-border p-6 flex flex-col items-center" style={{"--neon-color-1": "#0ff", "--neon-color-2": "#05ffa1"} as React.CSSProperties}>
              <h3 className="font-pixel text-retro-blue mb-3">WORKSHOPS</h3>
              <p className="terminal-text text-white/70 text-sm mb-3">Learn from the tech wizards</p>
              <RetroButton variant="blue" size="sm">DISCOVER</RetroButton>
            </div>
          </Link>
          
          <Link to="/exhibitions">
            <div className="neon-border p-6 flex flex-col items-center" style={{"--neon-color-1": "#fffb96", "--neon-color-2": "#05ffa1"} as React.CSSProperties}>
              <h3 className="font-pixel text-retro-yellow mb-3">EXHIBITIONS</h3>
              <p className="terminal-text text-white/70 text-sm mb-3">Witness technological marvels</p>
              <RetroButton variant="green" size="sm">VISIT</RetroButton>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <RetroButton variant="purple" size="lg">REGISTER NOW</RetroButton>
          <Link to="/gallery">
            <RetroButton variant="blue" size="lg">VIEW GALLERY</RetroButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
