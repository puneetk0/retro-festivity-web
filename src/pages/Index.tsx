
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="page-transition-wrapper">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-24 bg-retro-darkblue relative overflow-hidden">
        <div className="retro-container">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-blue/20 border border-retro-blue/30 rounded-sm">
              <span className="terminal-text text-retro-blue text-sm">ABOUT THE EVENT</span>
            </div>
            <h2 className="retro-title text-white mb-8">WHAT IS <span className="text-retro-pink">TECH</span><span className="text-retro-blue">FEST</span>?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="terminal-text text-white/80 mb-6">
                TechFest is the annual technology festival of our college, 
                celebrating innovation, creativity, and the future of technology 
                with a unique retro aesthetic that bridges the past and the future.
              </p>
              <p className="terminal-text text-white/80">
                From coding competitions to robotics exhibitions, from AR/VR experiences 
                to cybersecurity workshops, TechFest offers something for every tech enthusiast.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="retro-card p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-retro-blue/20 rounded-sm flex items-center justify-center">
                  <span className="font-retro text-2xl text-retro-blue">01</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-blue text-center mb-3">COMPETITIONS</h3>
              <p className="terminal-text text-white/70 text-center text-sm">
                Battle it out in hackathons, coding contests, gaming tournaments, and more.
              </p>
            </div>
            
            <div className="retro-card p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-retro-pink/20 rounded-sm flex items-center justify-center">
                  <span className="font-retro text-2xl text-retro-pink">02</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-pink text-center mb-3">WORKSHOPS</h3>
              <p className="terminal-text text-white/70 text-center text-sm">
                Learn from industry experts in hands-on sessions on cutting-edge technologies.
              </p>
            </div>
            
            <div className="retro-card p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-retro-yellow/20 rounded-sm flex items-center justify-center">
                  <span className="font-retro text-2xl text-retro-yellow">03</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-yellow text-center mb-3">EXHIBITIONS</h3>
              <p className="terminal-text text-white/70 text-center text-sm">
                Experience futuristic tech demos and innovative projects from students and sponsors.
              </p>
            </div>
            
            <div className="retro-card p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-retro-green/20 rounded-sm flex items-center justify-center">
                  <span className="font-retro text-2xl text-retro-green">04</span>
                </div>
              </div>
              <h3 className="font-pixel text-retro-green text-center mb-3">TALKS</h3>
              <p className="terminal-text text-white/70 text-center text-sm">
                Get inspired by tech leaders, innovators, and visionaries sharing their knowledge.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/competitions">
              <RetroButton variant="purple" size="lg">EXPLORE EVENTS</RetroButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-24 bg-retro-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="retro-grid"></div>
        </div>
        
        <div className="retro-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-pink/20 border border-retro-pink/30 rounded-sm">
              <span className="terminal-text text-retro-pink text-sm">PREVIOUS EDITION</span>
            </div>
            <h2 className="retro-title text-white mb-6">HIGHLIGHTS FROM <span className="text-retro-blue">2023</span></h2>
            <p className="terminal-text text-white/80 max-w-3xl mx-auto">
              Take a look at some of the amazing moments from last year's event 
              that made TechFest 2023 an unforgettable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden border-2 border-retro-purple">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Hackathon participants" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110 pixelated-image"
              />
              <div className="p-4 bg-retro-darkblue">
                <h3 className="font-pixel text-retro-purple mb-2">48-HOUR HACKATHON</h3>
                <p className="terminal-text text-white/70 text-sm">Over 200 participants built innovative solutions</p>
              </div>
            </div>
            
            <div className="overflow-hidden border-2 border-retro-blue">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="VR experience" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110 pixelated-image"
              />
              <div className="p-4 bg-retro-darkblue">
                <h3 className="font-pixel text-retro-blue mb-2">VR SHOWCASE</h3>
                <p className="terminal-text text-white/70 text-sm">Immersive virtual reality experiences for attendees</p>
              </div>
            </div>
            
            <div className="overflow-hidden border-2 border-retro-green">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Robotics competition" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110 pixelated-image"
              />
              <div className="p-4 bg-retro-darkblue">
                <h3 className="font-pixel text-retro-green mb-2">ROBOTICS BATTLE</h3>
                <p className="terminal-text text-white/70 text-sm">Robots competing in an epic showdown</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/gallery">
              <RetroButton variant="blue" size="lg">VIEW FULL GALLERY</RetroButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="py-24 bg-retro-darkblue">
        <div className="retro-container">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-yellow/20 border border-retro-yellow/30 rounded-sm">
              <span className="terminal-text text-retro-yellow text-sm">OUR PARTNERS</span>
            </div>
            <h2 className="retro-title text-white mb-6">POWERED BY <span className="text-retro-green">INNOVATORS</span></h2>
            <p className="terminal-text text-white/80 max-w-3xl mx-auto">
              TechFest wouldn't be possible without the support of our amazing sponsors and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-retro-black/50 border border-retro-green/30 rounded-sm">
              <div className="text-center">
                <span className="font-retro text-retro-green">TECH</span>
                <span className="font-retro text-white">CO</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-retro-black/50 border border-retro-blue/30 rounded-sm">
              <div className="text-center">
                <span className="font-retro text-retro-blue">PIXEL</span>
                <span className="font-retro text-white">LABS</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-retro-black/50 border border-retro-pink/30 rounded-sm">
              <div className="text-center">
                <span className="font-retro text-retro-pink">RETRO</span>
                <span className="font-retro text-white">CORP</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-retro-black/50 border border-retro-yellow/30 rounded-sm">
              <div className="text-center">
                <span className="font-retro text-retro-yellow">BYTE</span>
                <span className="font-retro text-white">BROS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-retro-black relative overflow-hidden">
        <div className="retro-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="retro-title text-retro-pink mb-6">
              ARE YOU <span className="text-retro-blue">READY</span> TO DIVE INTO THE 
              <span className="text-retro-green"> FUTURE</span>?
            </h2>
            <p className="terminal-text text-white/80 mb-8">
              Join us for TechFest 2024 and be part of the most exciting tech event of the year.
              Register now to secure your spot and experience technology like never before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <RetroButton variant="green" size="lg">REGISTER NOW</RetroButton>
              <Link to="/contact">
                <RetroButton variant="blue" size="lg">CONTACT US</RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
