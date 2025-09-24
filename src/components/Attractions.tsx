import { MapPin, Clock, Star, Camera } from "lucide-react";
import egyptianMosqueImage from "@/assets/egyptian-mosque.jpg";

const Attractions = () => {
  const attractions = [
    {
      name: "Great Pyramid of Giza",
      distance: "2.5 km",
      duration: "15 min drive",
      rating: "World Heritage Site",
      description: "The last remaining wonder of the ancient world, standing majestically for over 4,500 years.",
      highlights: ["Great Pyramid", "Sphinx", "Sound & Light Show", "Camel Rides"],
      image: egyptianMosqueImage,
      type: "Ancient Wonder"
    },
    {
      name: "Grand Egyptian Museum",
      distance: "3.2 km",
      duration: "20 min drive",
      rating: "Newest Attraction",
      description: "The world's largest archaeological museum dedicated to Egyptian civilization.",
      highlights: ["Tutankhamun Treasures", "Royal Mummies", "Interactive Exhibits", "Gift Shop"],
      image: egyptianMosqueImage,
      type: "Museum"
    },
    {
      name: "Islamic Cairo",
      distance: "25 km",
      duration: "45 min drive",
      rating: "UNESCO Site",
      description: "Historic Islamic district with stunning mosques, madrasas, and medieval architecture.",
      highlights: ["Al-Azhar Mosque", "Khan el-Khalili", "Citadel", "Historic Markets"],
      image: egyptianMosqueImage,
      type: "Historic District"
    },
    {
      name: "Nile River Cruise",
      distance: "Walking Distance",
      duration: "At Hotel Dock",
      rating: "Exclusive Access",
      description: "Private felucca rides and dinner cruises departing directly from our hotel marina.",
      highlights: ["Sunset Cruises", "Dinner Aboard", "Traditional Felucca", "Private Charter"],
      image: egyptianMosqueImage,
      type: "River Experience"
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Nearby <span className="text-gradient-gold">Attractions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in Egypt's incredible heritage with world-famous landmarks at your doorstep
            </p>
          </div>

          {/* Attractions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {attractions.map((attraction, index) => (
              <div key={index} className="luxury-card overflow-hidden fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {attraction.distance}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{attraction.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{attraction.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{attraction.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {attraction.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Camera className="w-4 h-4 mr-1" />
                      Must-See Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="bg-accent/10 text-accent px-2 py-1 rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Book tours at concierge
                    </span>
                    <button className="text-primary hover:text-primary/80 font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tour Packages */}
          <div className="text-center fade-in">
            <div className="luxury-card p-8 bg-gradient-nile text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Exclusive Tour Packages
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                Let our expert concierge team arrange personalized tours to Egypt's most incredible sites. 
                From private pyramid access to authentic cultural experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">Private</div>
                  <div className="text-white/80 text-sm">Guided Tours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/80 text-sm">Concierge Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-white/80 text-sm">Local Guides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;