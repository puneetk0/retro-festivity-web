
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";

const Exhibitions = () => {
  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-retro-black relative overflow-hidden">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="retro-container relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-retro-yellow/20 border border-retro-yellow/30 rounded-sm">
            <span className="terminal-text text-retro-yellow text-sm">DISCOVER INNOVATION</span>
          </div>
          <h1 className="retro-title text-white mb-6">
            <span className="text-retro-yellow">EXHIBITIONS</span>
          </h1>
          <p className="terminal-text text-white/80 max-w-3xl mx-auto mb-8">
            Explore fascinating technology demonstrations, innovative projects, and interactive
            installations from students, faculty, and industry partners.
          </p>
        </div>
      </section>
      
      {/* Exhibitions List */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exhibition 1 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-green">
                <img 
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-green text-lg mb-3">RETRO COMPUTING MUSEUM</h3>
              <p className="terminal-text text-white/70 text-sm">
                Experience the evolution of computing with our collection of vintage computers,
                game consoles, and electronic devices from the 70s, 80s, and 90s.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Hall A | All Days
                </span>
              </div>
            </div>
            
            {/* Exhibition 2 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-blue">
                <img 
                  src="https://images.unsplash.com/photo-1563802560775-445d06537a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-blue text-lg mb-3">VR/AR EXPERIENCE ZONE</h3>
              <p className="terminal-text text-white/70 text-sm">
                Step into virtual worlds and experience augmented reality applications.
                Try out the latest VR headsets and AR demos created by students and professionals.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Hall B | All Days
                </span>
              </div>
            </div>
            
            {/* Exhibition 3 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-purple">
                <img 
                  src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-purple text-lg mb-3">ROBOTICS SHOWCASE</h3>
              <p className="terminal-text text-white/70 text-sm">
                Watch robots in action! From autonomous drones to humanoid robots,
                this exhibition showcases the latest advancements in robotics technology.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Hall C | All Days
                </span>
              </div>
            </div>
            
            {/* Exhibition 4 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-pink">
                <img 
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-pink text-lg mb-3">INTERACTIVE ART INSTALLATION</h3>
              <p className="terminal-text text-white/70 text-sm">
                Experience the fusion of technology and art with our interactive installations.
                Create digital art, control light and sound with your movements, and more.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Hall D | All Days
                </span>
              </div>
            </div>
            
            {/* Exhibition 5 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-red">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-red text-lg mb-3">FUTURE TECH PAVILION</h3>
              <p className="terminal-text text-white/70 text-sm">
                Get a glimpse of tomorrow's technologies. Explore prototypes and concepts
                that push the boundaries of what's possible in various tech domains.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Hall E | All Days
                </span>
              </div>
            </div>
            
            {/* Exhibition 6 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 mb-4 overflow-hidden border-2 border-retro-yellow">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Tech Demo" 
                  className="w-full h-full object-cover pixelated-image"
                />
              </div>
              <h3 className="font-pixel text-retro-yellow text-lg mb-3">STUDENT PROJECTS SHOWCASE</h3>
              <p className="terminal-text text-white/70 text-sm">
                Discover innovative projects created by students across various disciplines.
                From software applications to hardware inventions, see the next generation of tech.
              </p>
              <div className="mt-4">
                <span className="text-retro-yellow terminal-text text-xs">
                  Location: Central Hall | All Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Exhibition Map */}
      <section className="py-16 bg-retro-black">
        <div className="retro-container">
          <div className="text-center mb-12">
            <h2 className="retro-title text-retro-green mb-6">
              EXHIBITION <span className="text-retro-blue">MAP</span>
            </h2>
            <p className="terminal-text text-white/80 mb-8 max-w-3xl mx-auto">
              Navigate through our exhibition halls with this interactive map.
              Click on different areas to learn more about the exhibitions.
            </p>
          </div>
          
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <div className="border-2 border-retro-blue p-4 bg-retro-black/60 relative">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="border-2 border-retro-green p-4">
                  <p className="font-pixel text-retro-green text-sm">HALL A</p>
                  <p className="terminal-text text-white/70 text-xs">Retro Computing</p>
                </div>
                <div className="border-2 border-retro-blue p-4">
                  <p className="font-pixel text-retro-blue text-sm">HALL B</p>
                  <p className="terminal-text text-white/70 text-xs">VR/AR Zone</p>
                </div>
                <div className="border-2 border-retro-purple p-4">
                  <p className="font-pixel text-retro-purple text-sm">HALL C</p>
                  <p className="terminal-text text-white/70 text-xs">Robotics</p>
                </div>
                <div className="border-2 border-retro-pink p-4">
                  <p className="font-pixel text-retro-pink text-sm">HALL D</p>
                  <p className="terminal-text text-white/70 text-xs">Interactive Art</p>
                </div>
                <div className="border-2 border-retro-red p-4">
                  <p className="font-pixel text-retro-red text-sm">HALL E</p>
                  <p className="terminal-text text-white/70 text-xs">Future Tech</p>
                </div>
                <div className="border-2 border-retro-yellow p-4">
                  <p className="font-pixel text-retro-yellow text-sm">CENTRAL</p>
                  <p className="terminal-text text-white/70 text-xs">Student Projects</p>
                </div>
                <div className="col-span-3 border-2 border-white/30 p-4 mt-4">
                  <p className="font-pixel text-white text-sm">ENTRANCE / EXIT</p>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-retro-darkblue">
        <div className="retro-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="retro-title text-retro-yellow mb-6">
              EXPLORE THE <span className="text-retro-pink">FUTURE</span>
            </h2>
            <p className="terminal-text text-white/80 mb-8">
              Don't miss these amazing exhibitions! Register now to get your pass
              and experience the future of technology.
            </p>
            <RetroButton variant="yellow" size="lg">GET YOUR PASS</RetroButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
