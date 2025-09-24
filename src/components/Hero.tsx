import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pyramids-nile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Egyptian Pattern Overlay */}
      <div className="hero-pattern" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Welcome to 
            <span className="block text-gradient-gold">Fuad Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of Egyptian heritage and modern luxury. 
            Where ancient wonders meet contemporary comfort along the majestic Nile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gold-button text-lg px-8 py-4">
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white/50 hover:bg-white/10 text-lg px-8 py-4"
            >
              Explore Rooms
            </Button>
          </div>
          <div className="text-center text-white/80">
            <p className="text-sm mb-2">Located near the Giza Pyramids & Grand Egyptian Museum</p>
            <p className="text-xs">✦ Heritage ✦ Luxury ✦ Comfort ✦</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;