import { Waves, Utensils, Wifi, Car, Dumbbell, Heart, Users, Wine } from "lucide-react";
import realHotelPool from "@/assets/real-hotel-pool.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Outdoor Swimming Pool",
      description: "Refreshing outdoor pool with terrace area and poolside service",
      image: realHotelPool
    },
    {
      icon: Utensils,
      title: "Two Restaurants",
      description: "American, Italian and authentic Egyptian cuisine with vegetarian options",
      image: realHotelPool
    },
    {
      icon: Heart,
      title: "Sauna & Wellness",
      description: "Relaxing sauna facilities for your comfort and well-being",
      image: realHotelPool
    },
    {
      icon: Users,
      title: "Shared Lounge",
      description: "Comfortable communal area for socializing and relaxation",
      image: realHotelPool
    },
    {
      icon: Wine,
      title: "Terrace Bar",
      description: "Scenic terrace bar with drinks and light refreshments",
      image: realHotelPool
    },
    {
      icon: Car,
      title: "Airport Transportation",
      description: "Convenient shuttle service to/from Sphinx International Airport",
      image: realHotelPool
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "On-site parking facilities for guests arriving by car",
      image: realHotelPool
    },
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      description: "Complimentary WiFi throughout the property (rated 10/10 by guests)",
      image: realHotelPool
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
                24-Hour Front Desk Service
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Our dedicated staff provides round-the-clock assistance, concierge service, 
                and room service to ensure your stay is comfortable and memorable.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/80">Front Desk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-white/80">Room Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-white/80">Concierge</div>
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
