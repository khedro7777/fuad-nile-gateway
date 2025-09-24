import { Waves, Utensils, Wifi, Car, Dumbbell, Heart, Users, Wine } from "lucide-react";
import hotelPoolImage from "@/assets/hotel-pool.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Infinity Pool",
      description: "Stunning infinity pool overlooking the Nile with poolside service",
      image: hotelPoolImage
    },
    {
      icon: Utensils,
      title: "Al-Nile Restaurant",
      description: "Authentic Egyptian cuisine with panoramic pyramid views",
      image: hotelPoolImage
    },
    {
      icon: Heart,
      title: "Royal Spa",
      description: "Traditional Egyptian treatments and modern wellness therapies",
      image: hotelPoolImage
    },
    {
      icon: Users,
      title: "Conference Hall",
      description: "State-of-the-art meeting facilities for business and events",
      image: hotelPoolImage
    },
    {
      icon: Wine,
      title: "Pharaoh's Lounge",
      description: "Elegant bar with premium spirits and Nile sunset views",
      image: hotelPoolImage
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "24/7 modern gym with professional equipment and trainer",
      image: hotelPoolImage
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking and luxury car rental service",
      image: hotelPoolImage
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the hotel",
      image: hotelPoolImage
    }
  ];

  const featuredAmenities = amenities.slice(0, 4);
  const otherAmenities = amenities.slice(4);

  return (
    <section id="amenities" className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Hotel <span className="text-gradient-gold">Amenities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              World-class facilities designed for your comfort and enjoyment
            </p>
          </div>

          {/* Featured Amenities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredAmenities.map((amenity, index) => (
              <div key={index} className="luxury-card overflow-hidden fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                    <amenity.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Amenities List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherAmenities.map((amenity, index) => (
              <div key={index} className="luxury-card p-6 text-center fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-display font-semibold mb-2 text-foreground">
                  {amenity.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Nile Terrace Highlight */}
          <div className="mt-16 fade-in">
            <div className="luxury-card p-8 bg-gradient-nile text-white text-center">
              <h3 className="text-3xl font-display font-bold mb-4">
                Nile View Terrace
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Experience breathtaking sunset views from our exclusive Nile Terrace. 
                Perfect for romantic dinners, private events, or simply watching the eternal river flow by.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">360°</div>
                  <div className="text-white/80">Panoramic Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/80">Open Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Private</div>
                  <div className="text-white/80">Event Space</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
