
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";
import { Link } from "react-router-dom";

const Competitions = () => {
  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-retro-black relative overflow-hidden">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="retro-container relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-retro-red/20 border border-retro-red/30 rounded-sm">
            <span className="terminal-text text-retro-red text-sm">CHALLENGE YOURSELF</span>
          </div>
          <h1 className="retro-title text-white mb-6">
            <span className="text-retro-red">COMPETITIONS</span>
          </h1>
          <p className="terminal-text text-white/80 max-w-3xl mx-auto mb-8">
            Compete with the best minds in technology and showcase your skills.
            From coding challenges to hardware hacking, we've got something for everyone.
          </p>
        </div>
      </section>
      
      {/* Competitions List */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competition 1 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-blue/50">
                <img 
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Hackathon" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-blue/50">
                  <span className="terminal-text text-retro-blue text-xs">MAR 15-16</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-blue text-lg mb-3">48-HOUR HACKATHON</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Build innovative solutions to real-world problems in this 48-hour coding marathon. 
                Form teams of up to 4 members and compete for exciting prizes.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-blue/20 border border-retro-blue/30 text-retro-blue terminal-text text-xs">
                  Coding
                </span>
                <span className="inline-block px-2 py-1 bg-retro-blue/20 border border-retro-blue/30 text-retro-blue terminal-text text-xs">
                  Problem Solving
                </span>
                <span className="inline-block px-2 py-1 bg-retro-blue/20 border border-retro-blue/30 text-retro-blue terminal-text text-xs">
                  Team Event
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Prize: $1000
                </div>
                <RetroButton variant="blue" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Competition 2 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-red/50">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Gaming Tournament" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-red/50">
                  <span className="terminal-text text-retro-red text-xs">MAR 17</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-red text-lg mb-3">RETRO GAMING TOURNAMENT</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Step back in time with our retro gaming tournament featuring classic games from the 80s and 90s.
                Show off your gaming skills and compete for the title of Retro Gaming Champion.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-red/20 border border-retro-red/30 text-retro-red terminal-text text-xs">
                  Gaming
                </span>
                <span className="inline-block px-2 py-1 bg-retro-red/20 border border-retro-red/30 text-retro-red terminal-text text-xs">
                  Individual
                </span>
                <span className="inline-block px-2 py-1 bg-retro-red/20 border border-retro-red/30 text-retro-red terminal-text text-xs">
                  Retro
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Prize: $500
                </div>
                <RetroButton variant="red" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Competition 3 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-green/50">
                <img 
                  src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Robotics" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-green/50">
                  <span className="terminal-text text-retro-green text-xs">MAR 18</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-green text-lg mb-3">ROBOTICS BATTLE</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Design and build robots to navigate obstacle courses, complete tasks, and battle other robots.
                Put your engineering and programming skills to the test.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-green/20 border border-retro-green/30 text-retro-green terminal-text text-xs">
                  Robotics
                </span>
                <span className="inline-block px-2 py-1 bg-retro-green/20 border border-retro-green/30 text-retro-green terminal-text text-xs">
                  Hardware
                </span>
                <span className="inline-block px-2 py-1 bg-retro-green/20 border border-retro-green/30 text-retro-green terminal-text text-xs">
                  Team Event
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Prize: $800
                </div>
                <RetroButton variant="green" size="sm">REGISTER</RetroButton>
              </div>
            </div>
            
            {/* Competition 4 */}
            <div className="retro-card hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden border-b-2 border-retro-purple/50">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Coding Challenge" 
                  className="w-full h-full object-cover pixelated-image"
                />
                <div className="absolute top-2 right-2 bg-retro-black/80 px-3 py-1 border border-retro-purple/50">
                  <span className="terminal-text text-retro-purple text-xs">MAR 19</span>
                </div>
              </div>
              
              <h3 className="font-pixel text-retro-purple text-lg mb-3">COMPETITIVE CODING</h3>
              <p className="terminal-text text-white/70 mb-4 text-sm">
                Solve algorithmic problems and optimize your code in this fast-paced individual coding competition.
                Race against time to solve as many problems as you can.
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 bg-retro-purple/20 border border-retro-purple/30 text-retro-purple terminal-text text-xs">
                  Algorithms
                </span>
                <span className="inline-block px-2 py-1 bg-retro-purple/20 border border-retro-purple/30 text-retro-purple terminal-text text-xs">
                  Individual
                </span>
                <span className="inline-block px-2 py-1 bg-retro-purple/20 border border-retro-purple/30 text-retro-purple terminal-text text-xs">
                  Speed
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="terminal-text text-white/70 text-sm">
                  Prize: $600
                </div>
                <RetroButton variant="purple" size="sm">REGISTER</RetroButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-retro-black">
        <div className="retro-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="retro-title text-retro-green mb-6">
              READY TO <span className="text-retro-blue">COMPETE</span>?
            </h2>
            <p className="terminal-text text-white/80 mb-8">
              Don't miss your chance to showcase your skills and win exciting prizes!
              Register now for your favorite competitions.
            </p>
            <RetroButton variant="purple" size="lg">REGISTER NOW</RetroButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Competitions;
