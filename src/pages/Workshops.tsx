
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";

const Workshops = () => {
  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-retro-black relative overflow-hidden">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="retro-container relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-retro-blue/20 border border-retro-blue/30 rounded-sm">
            <span className="terminal-text text-retro-blue text-sm">EXPAND YOUR KNOWLEDGE</span>
          </div>
          <h1 className="retro-title text-white mb-6">
            <span className="text-retro-blue">WORKSHOPS</span>
          </h1>
          <p className="terminal-text text-white/80 max-w-3xl mx-auto mb-8">
            Learn from industry experts and gain hands-on experience with cutting-edge technologies.
            Our workshops are designed to enhance your skills and knowledge in various tech domains.
          </p>
        </div>
      </section>
      
      {/* Workshops List */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workshop 1 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-blue/50">
                <img 
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="AI Workshop" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-blue/50">
                  <span className="terminal-text text-retro-blue text-xs">MAR 15 | 10 AM</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-blue text-lg mb-3">AI & MACHINE LEARNING</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Get started with artificial intelligence and machine learning. Learn about neural networks,
                deep learning, and how to implement ML models for practical applications.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-blue/20 border border-retro-blue/30 text-retro-blue terminal-text text-xs">
                  Beginner Friendly
                </span>
                <span className="inline-block px-2 py-1 bg-retro-blue/20 border border-retro-blue/30 text-retro-blue terminal-text text-xs">
                  3 Hours
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Instructor: Dr. Sarah Chen
                </div>
                <RetroButton variant="blue" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Workshop 2 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-green/50">
                <img 
                  src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="VR Workshop" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-green/50">
                  <span className="terminal-text text-retro-green text-xs">MAR 16 | 2 PM</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-green text-lg mb-3">VR DEVELOPMENT</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Dive into the world of virtual reality development. Learn how to create immersive VR experiences
                using Unity and implement interactive elements in your VR applications.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-green/20 border border-retro-green/30 text-retro-green terminal-text text-xs">
                  Intermediate
                </span>
                <span className="inline-block px-2 py-1 bg-retro-green/20 border border-retro-green/30 text-retro-green terminal-text text-xs">
                  4 Hours
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Instructor: Alex Rodriguez
                </div>
                <RetroButton variant="green" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Workshop 3 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-purple/50">
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Blockchain Workshop" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-purple/50">
                  <span className="terminal-text text-retro-purple text-xs">MAR 17 | 11 AM</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-purple text-lg mb-3">BLOCKCHAIN FUNDAMENTALS</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Understand the underlying technology behind cryptocurrencies. Learn about blockchain architecture,
                smart contracts, and build a simple decentralized application.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-purple/20 border border-retro-purple/30 text-retro-purple terminal-text text-xs">
                  Beginner Friendly
                </span>
                <span className="inline-block px-2 py-1 bg-retro-purple/20 border border-retro-purple/30 text-retro-purple terminal-text text-xs">
                  3 Hours
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Instructor: Michael Lee
                </div>
                <RetroButton variant="purple" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Workshop 4 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-red/50">
                <img 
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Cybersecurity Workshop" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-red/50">
                  <span className="terminal-text text-retro-red text-xs">MAR 18 | 1 PM</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-red text-lg mb-3">CYBERSECURITY ESSENTIALS</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Learn about common security vulnerabilities and how to protect against them.
                Practice ethical hacking techniques and understand defense mechanisms.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-red/20 border border-retro-red/30 text-retro-red terminal-text text-xs">
                  Intermediate
                </span>
                <span className="inline-block px-2 py-1 bg-retro-red/20 border border-retro-red/30 text-retro-red terminal-text text-xs">
                  4 Hours
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Instructor: James Wilson
                </div>
                <RetroButton variant="red" size="sm">REGISTER</RetroButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-retro-black">
        <div className="retro-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="retro-title text-retro-blue mb-6">
              LEVEL UP YOUR <span className="text-retro-pink">SKILLS</span>
            </h2>
            <p className="terminal-text text-white/80 mb-8">
              Workshops have limited seats available. Register early to secure your spot
              and take advantage of these unique learning opportunities.
            </p>
            <RetroButton variant="green" size="lg">REGISTER FOR WORKSHOPS</RetroButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Workshops;
