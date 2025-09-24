import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Coffee, Bath, Users, Bed } from "lucide-react";
import realHotelRoom from "@/assets/real-hotel-room.jpg";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Premium Pyramid View",
      image: realHotelRoom,
      price: "$120",
      size: "25 m²",
      guests: "2 Adults",
      beds: "Twin/Double Bed",
      amenities: ["Pyramid View", "Air Conditioning", "Minibar", "Flat-screen TV", "Private Bathroom", "Free WiFi"],
      features: [Wifi, Coffee, Bath],
      description: "Comfortable room with stunning pyramid views, air conditioning and modern amenities"
    },
    {
      id: 2,
      name: "Standard Double Room",
      image: realHotelRoom,
      price: "$95",
      size: "22 m²",
      guests: "2 Adults",
      beds: "Double Bed",
      amenities: ["City View", "Air Conditioning", "Safety Deposit Box", "Electric Kettle", "Private Bathroom", "Free WiFi"],
      features: [Wifi, Coffee, Bath],
      description: "Well-appointed room with modern comforts and essential amenities for a pleasant stay"
    },
    {
      id: 3,
      name: "Triple Room",
      image: realHotelRoom,
      price: "$135",
      size: "28 m²",
      guests: "3 Adults",
      beds: "3 Single Beds",
      amenities: ["Garden View", "Air Conditioning", "Minibar", "Flat-screen TV", "Private Bathroom", "Free WiFi"],
      features: [Wifi, Coffee, Bath, Users],
      description: "Spacious room perfect for families or groups, with three comfortable beds"
    },
    {
      id: 4,
      name: "Family Suite",
      image: realHotelRoom,
      price: "$180",
      size: "35 m²",
      guests: "4 Adults",
      beds: "2 Double Beds",
      amenities: ["Pyramid View", "Separate Seating Area", "Minibar", "Two Bathrooms", "Balcony", "Free WiFi"],
      features: [Wifi, Car, Coffee, Bath, Users],
      description: "Generous family accommodation with separate living space and stunning pyramid views"
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Rooms & <span className="text-gradient-gold">Suites</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Luxurious accommodations designed to reflect Egypt's royal heritage and modern comfort
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div key={room.id} className="luxury-card overflow-hidden fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Room Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gold text-primary-foreground font-semibold">
                      {room.price}/night
                    </Badge>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {room.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{room.guests}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{room.beds}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Features */}
                  <div className="flex items-center space-x-2 mb-4">
                    {room.features.map((Feature, featureIndex) => (
                      <div key={featureIndex} className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <Feature className="w-4 h-4 text-accent" />
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <Badge key={amenityIndex} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  {/* Room Size & Booking */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">{room.size}</span> • Premium Location
                    </div>
                    <Button className="gold-button">
                      Reserve Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="text-center mt-16 fade-in">
            <div className="luxury-card p-8 bg-gradient-nile text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Complete Egyptian Experience Package
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                All rooms include complimentary breakfast, free WiFi, airport shuttle service, 
                and access to our outdoor pool and terrace bar.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                View All Amenities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;