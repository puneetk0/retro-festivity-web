
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Hackathon participants working on their projects",
      category: "competitions",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "VR demo experience at the exhibition",
      category: "exhibitions",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Workshop on AI and machine learning",
      category: "workshops",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Robotics battle competition",
      category: "competitions",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Students presenting their projects",
      category: "exhibitions",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Blockchain workshop in progress",
      category: "workshops",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Students collaborating during a hackathon",
      category: "competitions",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Interactive art installation",
      category: "exhibitions",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Cybersecurity workshop demonstration",
      category: "workshops",
    },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-retro-black relative overflow-hidden">
        <div className="retro-grid"></div>
        <div className="scanline"></div>
        
        <div className="retro-container relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-retro-pink/20 border border-retro-pink/30 rounded-sm">
            <span className="terminal-text text-retro-pink text-sm">MEMORIES FROM 2023</span>
          </div>
          <h1 className="retro-title text-white mb-6">
            <span className="text-retro-pink">GALLERY</span>
          </h1>
          <p className="terminal-text text-white/80 max-w-3xl mx-auto mb-8">
            Relive the moments from previous TechFest events through our gallery.
            Explore photos from competitions, workshops, and exhibitions.
          </p>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="py-8 bg-retro-darkblue border-y border-retro-blue/30">
        <div className="retro-container">
          <div className="flex justify-center flex-wrap gap-4">
            <button 
              className={`px-4 py-2 terminal-text border ${
                activeCategory === "all" 
                  ? "border-retro-blue bg-retro-blue/20 text-retro-blue" 
                  : "border-white/30 hover:border-retro-blue/50 text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              ALL
            </button>
            <button 
              className={`px-4 py-2 terminal-text border ${
                activeCategory === "competitions" 
                  ? "border-retro-red bg-retro-red/20 text-retro-red" 
                  : "border-white/30 hover:border-retro-red/50 text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveCategory("competitions")}
            >
              COMPETITIONS
            </button>
            <button 
              className={`px-4 py-2 terminal-text border ${
                activeCategory === "workshops" 
                  ? "border-retro-green bg-retro-green/20 text-retro-green" 
                  : "border-white/30 hover:border-retro-green/50 text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveCategory("workshops")}
            >
              WORKSHOPS
            </button>
            <button 
              className={`px-4 py-2 terminal-text border ${
                activeCategory === "exhibitions" 
                  ? "border-retro-purple bg-retro-purple/20 text-retro-purple" 
                  : "border-white/30 hover:border-retro-purple/50 text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveCategory("exhibitions")}
            >
              EXHIBITIONS
            </button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-retro-black">
        <div className="retro-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative border-2 border-transparent hover:border-retro-blue overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pixelated-image"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-retro-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="terminal-text text-white">{image.alt}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`terminal-text text-xs px-2 py-1 ${
                    image.category === "competitions" ? "bg-retro-red/80" : 
                    image.category === "workshops" ? "bg-retro-green/80" : 
                    "bg-retro-purple/80"
                  }`}>
                    {image.category.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-retro-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl max-h-[90vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain border-4 border-retro-blue"
            />
            <div className="bg-retro-darkblue p-4">
              <p className="terminal-text text-white">{selectedImage.alt}</p>
            </div>
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-retro-black border-2 border-retro-red text-retro-red hover:bg-retro-red hover:text-retro-black"
              onClick={() => setSelectedImage(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
