
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";
import { ArrowRight } from "lucide-react";

const Exhibitions = () => {
  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-24 relative bg-retro-black overflow-hidden flex items-center">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        <div className="relative z-10 retro-container py-16">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-3 py-1 bg-retro-yellow/20 border border-retro-yellow/30 rounded-sm">
              <span className="terminal-text text-retro-yellow text-sm">EXHIBITIONS</span>
            </div>
            <h1 className="retro-title text-white mb-6">
              WITNESS <span className="text-retro-blue">TECHNOLOGICAL</span> <span className="text-retro-pink">MARVELS</span>
            </h1>
            <p className="terminal-text text-white/80 mb-8">
              Step into a world where technology meets art and innovation. Our exhibition showcases the most groundbreaking projects 
              from students, faculty, and industry partners that push the boundaries of what's possible.
            </p>
            <RetroButton variant="green" size="lg">
              REGISTER YOUR PROJECT
            </RetroButton>
          </div>
        </div>
      </section>
      
      {/* Exhibition Categories */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-blue/20 border border-retro-blue/30 rounded-sm">
              <span className="terminal-text text-retro-blue text-sm">CATEGORIES</span>
            </div>
            <h2 className="retro-title text-white mb-6">
              EXPLORE <span className="text-retro-green">EXHIBITION</span> ZONES
            </h2>
            <p className="terminal-text text-white/80 max-w-3xl mx-auto">
              Our exhibition is divided into specialized zones, each showcasing different aspects of technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="retro-card p-6 border-l-4 border-retro-blue">
              <h3 className="font-pixel text-retro-blue mb-4">ARTIFICIAL INTELLIGENCE</h3>
              <p className="terminal-text text-white/70 mb-6">
                Explore cutting-edge AI applications, machine learning models, and neural networks
                developed by our talented students and faculty members.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-blue/70">HALL A</span>
                <span className="text-xs text-white/50">17 PROJECTS</span>
              </div>
            </div>
            
            <div className="retro-card p-6 border-l-4 border-retro-pink">
              <h3 className="font-pixel text-retro-pink mb-4">ROBOTICS & AUTOMATION</h3>
              <p className="terminal-text text-white/70 mb-6">
                Witness the future of robotics with autonomous systems, drones, robotic arms,
                and innovative mechatronic solutions in action.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-pink/70">HALL B</span>
                <span className="text-xs text-white/50">23 PROJECTS</span>
              </div>
            </div>
            
            <div className="retro-card p-6 border-l-4 border-retro-green">
              <h3 className="font-pixel text-retro-green mb-4">AR/VR EXPERIENCES</h3>
              <p className="terminal-text text-white/70 mb-6">
                Immerse yourself in virtual and augmented reality applications
                that blend digital content with the physical world.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-green/70">HALL C</span>
                <span className="text-xs text-white/50">15 PROJECTS</span>
              </div>
            </div>
            
            <div className="retro-card p-6 border-l-4 border-retro-purple">
              <h3 className="font-pixel text-retro-purple mb-4">SUSTAINABLE TECH</h3>
              <p className="terminal-text text-white/70 mb-6">
                Discover innovations aimed at creating a more sustainable future
                through renewable energy, waste management, and eco-friendly solutions.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-purple/70">HALL D</span>
                <span className="text-xs text-white/50">19 PROJECTS</span>
              </div>
            </div>
            
            <div className="retro-card p-6 border-l-4 border-retro-yellow">
              <h3 className="font-pixel text-retro-yellow mb-4">IOT & SMART DEVICES</h3>
              <p className="terminal-text text-white/70 mb-6">
                Explore a connected world with Internet of Things projects
                that make everyday objects smarter and more efficient.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-yellow/70">HALL E</span>
                <span className="text-xs text-white/50">21 PROJECTS</span>
              </div>
            </div>
            
            <div className="retro-card p-6 border-l-4 border-retro-blue">
              <h3 className="font-pixel text-retro-blue mb-4">BLOCKCHAIN & FINTECH</h3>
              <p className="terminal-text text-white/70 mb-6">
                Understanding the revolutionary potential of blockchain technology
                and its applications beyond cryptocurrencies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-retro-blue/70">HALL F</span>
                <span className="text-xs text-white/50">12 PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-retro-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="retro-grid"></div>
        </div>
        
        <div className="retro-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-pink/20 border border-retro-pink/30 rounded-sm">
              <span className="terminal-text text-retro-pink text-sm">FEATURED</span>
            </div>
            <h2 className="retro-title text-white mb-6">
              <span className="text-retro-green">SPOTLIGHT</span> PROJECTS
            </h2>
            <p className="terminal-text text-white/80 max-w-3xl mx-auto">
              These outstanding projects showcase the pinnacle of innovation and creativity at Neutron 2024.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="retro-card overflow-hidden">
              <div className="h-56 overflow-hidden border-b border-retro-blue/30">
                <img 
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="AI-powered drone" 
                  className="w-full h-full object-cover object-center pixelated-image transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-retro-blue/20 text-retro-blue px-2 py-1">ROBOTICS</span>
                  <span className="text-xs text-white/50">TEAM NEBULA</span>
                </div>
                <h3 className="font-pixel text-retro-blue mb-3">AUTONOMOUS RESCUE DRONE SYSTEM</h3>
                <p className="terminal-text text-white/70 text-sm mb-4">
                  An AI-powered drone squadron designed to assist in disaster relief operations
                  by creating accurate 3D maps of affected areas and locating survivors.
                </p>
                <RetroButton variant="blue" size="sm" className="w-full">VIEW PROJECT</RetroButton>
              </div>
            </div>
            
            <div className="retro-card overflow-hidden">
              <div className="h-56 overflow-hidden border-b border-retro-pink/30">
                <img 
                  src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="VR Medical Training" 
                  className="w-full h-full object-cover object-center pixelated-image transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-retro-pink/20 text-retro-pink px-2 py-1">VR/AR</span>
                  <span className="text-xs text-white/50">TEAM QUANTUM</span>
                </div>
                <h3 className="font-pixel text-retro-pink mb-3">MEDICAL TRAINING SIMULATOR</h3>
                <p className="terminal-text text-white/70 text-sm mb-4">
                  An immersive VR environment that allows medical students to practice
                  complex surgical procedures with realistic haptic feedback.
                </p>
                <RetroButton variant="purple" size="sm" className="w-full">VIEW PROJECT</RetroButton>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <RetroButton variant="green" size="lg">
              VIEW ALL PROJECTS
              <ArrowRight className="ml-2" size={16} />
            </RetroButton>
          </div>
        </div>
      </section>
      
      {/* Sponsor Showcase */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-green/20 border border-retro-green/30 rounded-sm">
              <span className="terminal-text text-retro-green text-sm">INDUSTRY PARTNERS</span>
            </div>
            <h2 className="retro-title text-white mb-6">
              <span className="text-retro-blue">INNOVATION</span> SHOWCASES
            </h2>
            <p className="terminal-text text-white/80 max-w-3xl mx-auto">
              Our industry partners bring cutting-edge technology and exclusive demonstrations to Neutron 2024.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="retro-card p-6">
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <span className="font-retro text-retro-green text-2xl">TECH</span>
                  <span className="font-retro text-white text-2xl">CO</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-green text-center mb-3">QUANTUM COMPUTING DEMO</h3>
              <p className="terminal-text text-white/70 text-center text-sm mb-4">
                Experience the power of quantum computing with a live demonstration
                of quantum algorithms solving complex problems in seconds.
              </p>
              <div className="text-center">
                <span className="text-xs text-white/50">HALL A - BOOTH 12</span>
              </div>
            </div>
            
            <div className="retro-card p-6">
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <span className="font-retro text-retro-blue text-2xl">PIXEL</span>
                  <span className="font-retro text-white text-2xl">LABS</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-blue text-center mb-3">HOLOGRAPHIC DISPLAY</h3>
              <p className="terminal-text text-white/70 text-center text-sm mb-4">
                Witness the next generation of displays with true 3D holographic
                technology that requires no special glasses or headsets.
              </p>
              <div className="text-center">
                <span className="text-xs text-white/50">HALL B - BOOTH 7</span>
              </div>
            </div>
            
            <div className="retro-card p-6">
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <span className="font-retro text-retro-pink text-2xl">RETRO</span>
                  <span className="font-retro text-white text-2xl">CORP</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-pink text-center mb-3">AI MUSIC COMPOSITION</h3>
              <p className="terminal-text text-white/70 text-center text-sm mb-4">
                Create your own music with the help of an advanced AI system that
                understands musical theory and emotional expression.
              </p>
              <div className="text-center">
                <span className="text-xs text-white/50">HALL C - BOOTH 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-retro-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="retro-grid"></div>
        </div>
        
        <div className="retro-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="retro-title text-white mb-6">
              READY TO <span className="text-retro-pink">SHOWCASE</span> YOUR <span className="text-retro-blue">PROJECT</span>?
            </h2>
            <p className="terminal-text text-white/80 mb-8">
              There's still time to register your innovative project for exhibition at Neutron 2024.
              Don't miss this opportunity to showcase your work to thousands of tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <RetroButton variant="green" size="lg">SUBMIT YOUR PROJECT</RetroButton>
              <RetroButton variant="purple" size="lg">EXHIBITION GUIDELINES</RetroButton>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
