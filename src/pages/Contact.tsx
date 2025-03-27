
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroButton from "@/components/RetroButton";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-retro-black relative overflow-hidden">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="retro-container relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-retro-green/20 border border-retro-green/30 rounded-sm">
            <span className="terminal-text text-retro-green text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="retro-title text-white mb-6">
            <span className="text-retro-green">CONTACT US</span>
          </h1>
          <p className="terminal-text text-white/80 max-w-3xl mx-auto mb-8">
            Have questions about TechFest 2024? Interested in sponsoring or participating?
            Reach out to us through the form below or use our contact information.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-retro-darkblue">
        <div className="retro-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="retro-card">
              <h2 className="font-pixel text-retro-blue text-xl mb-6 text-center">SEND US A MESSAGE</h2>
              
              {isSubmitted ? (
                <div className="p-6 border-2 border-retro-green bg-retro-green/10 text-center animate-page-transition-in">
                  <h3 className="font-pixel text-retro-green mb-3">MESSAGE SENT SUCCESSFULLY!</h3>
                  <p className="terminal-text text-white/80">
                    Thank you for contacting us. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block terminal-text text-white/80 mb-2">
                      &gt; NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-retro-black border-2 border-retro-blue/50 px-4 py-3 terminal-text text-white focus:border-retro-blue focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block terminal-text text-white/80 mb-2">
                      &gt; EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-retro-black border-2 border-retro-blue/50 px-4 py-3 terminal-text text-white focus:border-retro-blue focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block terminal-text text-white/80 mb-2">
                      &gt; SUBJECT
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-retro-black border-2 border-retro-blue/50 px-4 py-3 terminal-text text-white focus:border-retro-blue focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Participation">Participation</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Media">Media</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block terminal-text text-white/80 mb-2">
                      &gt; MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-retro-black border-2 border-retro-blue/50 px-4 py-3 terminal-text text-white focus:border-retro-blue focus:outline-none resize-none"
                    />
                  </div>
                  
                  <div className="text-center">
                    <RetroButton 
                      type="submit" 
                      variant="green" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </RetroButton>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="retro-card mb-8">
                <h2 className="font-pixel text-retro-green text-xl mb-6 text-center">CONTACT INFORMATION</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-retro-green/20 flex items-center justify-center border border-retro-green/50">
                      <span className="text-retro-green">📍</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-retro-green mb-2">ADDRESS</h3>
                      <p className="terminal-text text-white/80">
                        Engineering College Campus,<br />
                        Tech City, Innovation State,<br />
                        123456
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-retro-blue/20 flex items-center justify-center border border-retro-blue/50">
                      <span className="text-retro-blue">📧</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-retro-blue mb-2">EMAIL</h3>
                      <p className="terminal-text text-white/80">
                        info@techfest2024.edu<br />
                        sponsorship@techfest2024.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-retro-pink/20 flex items-center justify-center border border-retro-pink/50">
                      <span className="text-retro-pink">📞</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-retro-pink mb-2">PHONE</h3>
                      <p className="terminal-text text-white/80">
                        +1 (123) 456-7890<br />
                        +1 (123) 456-7891
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="retro-card">
                <h2 className="font-pixel text-retro-purple text-xl mb-6 text-center">FOLLOW US</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-retro-black/60 border border-retro-purple/50 hover:bg-retro-purple/20 transition-colors"
                  >
                    <span className="text-retro-purple">FB</span>
                    <span className="terminal-text text-white/80">/techfest2024</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-retro-black/60 border border-retro-blue/50 hover:bg-retro-blue/20 transition-colors"
                  >
                    <span className="text-retro-blue">TW</span>
                    <span className="terminal-text text-white/80">@techfest2024</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-retro-black/60 border border-retro-pink/50 hover:bg-retro-pink/20 transition-colors"
                  >
                    <span className="text-retro-pink">IG</span>
                    <span className="terminal-text text-white/80">@techfest.2024</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-retro-black/60 border border-retro-yellow/50 hover:bg-retro-yellow/20 transition-colors"
                  >
                    <span className="text-retro-yellow">YT</span>
                    <span className="terminal-text text-white/80">/techfest</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-retro-black relative overflow-hidden">
        <div className="retro-container">
          <div className="text-center mb-12">
            <h2 className="retro-title text-white mb-6">
              FIND <span className="text-retro-blue">US</span>
            </h2>
          </div>
          
          <div className="retro-card p-1">
            {/* Retro-style map placeholder */}
            <div className="relative h-80 overflow-hidden">
              <div className="absolute inset-0 retro-grid"></div>
              <div className="absolute inset-0 bg-retro-darkblue/80"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-retro-red animate-pulse flex items-center justify-center">
                  <span className="text-retro-red font-retro">X</span>
                </div>
                <p className="terminal-text text-white mt-4">TECHFEST 2024 LOCATION</p>
                <p className="terminal-text text-white/60 text-sm">Engineering College Campus, Tech City</p>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {Array(24).fill(0).map((_, i) => (
                  <div key={i} className="border border-retro-blue/20"></div>
                ))}
              </div>
              
              {/* Coordinate markers */}
              <div className="absolute top-0 left-0 right-0 flex justify-between px-4 text-retro-green terminal-text text-xs">
                <span>0°N</span>
                <span>90°E</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-retro-darkblue">
        <div className="retro-container">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-retro-yellow/20 border border-retro-yellow/30 rounded-sm">
              <span className="terminal-text text-retro-yellow text-sm">HAVE QUESTIONS?</span>
            </div>
            <h2 className="retro-title text-white mb-6">
              FREQUENTLY ASKED <span className="text-retro-blue">QUESTIONS</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="retro-card hover:scale-[1.01] transition-transform duration-300">
              <h3 className="font-pixel text-retro-blue mb-3">WHEN IS TECHFEST 2024 TAKING PLACE?</h3>
              <p className="terminal-text text-white/80">
                TechFest 2024 is scheduled to take place from March 15-18, 2024. The event will run from 9 AM to 6 PM each day.
              </p>
            </div>
            
            <div className="retro-card hover:scale-[1.01] transition-transform duration-300">
              <h3 className="font-pixel text-retro-pink mb-3">HOW CAN I REGISTER FOR THE EVENT?</h3>
              <p className="terminal-text text-white/80">
                You can register for TechFest 2024 through our website. Click on the "Register Now" button on the homepage or visit the specific competition/workshop page to register for individual events.
              </p>
            </div>
            
            <div className="retro-card hover:scale-[1.01] transition-transform duration-300">
              <h3 className="font-pixel text-retro-green mb-3">IS THERE A REGISTRATION FEE?</h3>
              <p className="terminal-text text-white/80">
                The main event entry is free for all students with a valid ID. However, some competitions and workshops may have a nominal registration fee. Check the specific event pages for details.
              </p>
            </div>
            
            <div className="retro-card hover:scale-[1.01] transition-transform duration-300">
              <h3 className="font-pixel text-retro-yellow mb-3">CAN I PARTICIPATE IN MULTIPLE EVENTS?</h3>
              <p className="terminal-text text-white/80">
                Yes, you can participate in multiple events as long as there are no scheduling conflicts. Make sure to check the event timings before registering for multiple events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
