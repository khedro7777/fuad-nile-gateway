import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Mail, Phone } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    roomType: ""
  });

  const roomTypes = [
    { value: "premium-pyramid", label: "Premium Pyramid View - $120/night" },
    { value: "standard-double", label: "Standard Double Room - $95/night" },
    { value: "triple-room", label: "Triple Room - $135/night" },
    { value: "family-suite", label: "Family Suite - $180/night" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission here
    console.log("Booking request:", formData);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Book Your <span className="text-gradient-gold">Stay</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reserve your Egyptian luxury experience with us. Our team will contact you to confirm your reservation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <Card className="luxury-card fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Reservation Details</CardTitle>
                <CardDescription>
                  Fill in your details and we'll confirm your booking within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+20 123 456 789"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  {/* Stay Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Check-in Date *</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={formData.checkin}
                        onChange={(e) => handleInputChange("checkin", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Check-out Date *</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={formData.checkout}
                        onChange={(e) => handleInputChange("checkout", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Select onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5+">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roomType">Room Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("roomType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          {roomTypes.map((room) => (
                            <SelectItem key={room.value} value={room.value}>
                              {room.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gold-button text-lg py-3">
                    Reserve Your Stay
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 fade-in-delayed">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+20 2 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">reservations@alfouadpalace.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Reservation Hours</p>
                      <p className="text-muted-foreground">24/7 Available for Reservations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card bg-gradient-nile text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Special Offers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-white/90">
                  <div>
                    <h4 className="font-semibold mb-2">Pyramid View Package</h4>
                    <p className="text-sm">Stay 3+ nights and enjoy breakfast & airport transfer</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Family Special</h4>
                    <p className="text-sm">Kids under 12 stay free with family room booking</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Couples Getaway</h4>
                    <p className="text-sm">Romantic package with dinner and spa access</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-display font-semibold mb-2">Personal Concierge</h4>
                    <p className="text-sm text-muted-foreground">
                      Our dedicated team will help plan your perfect Egyptian experience
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;