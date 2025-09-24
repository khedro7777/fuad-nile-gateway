import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-nile text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
            <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Al Fouad Palace</h3>
                <p className="text-white/80 text-sm">Pyramids View Hotel</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Experience authentic Egyptian hospitality just 2.6 miles from the Great Pyramids. 
              Comfortable accommodations with modern amenities and traditional charm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-white/80 hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-white/80 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#attractions" className="text-white/80 hover:text-white transition-colors">Attractions</a></li>
              <li><a href="#booking" className="text-white/80 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Room Service 24/7</li>
              <li>Private Tours</li>
              <li>Airport Transfer</li>
              <li>Spa & Wellness</li>
              <li>Event Planning</li>
              <li>Concierge Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Al Remaya, Giza</p>
                  <p>12411 Cairo, Egypt</p>
                  <p>Near the Great Pyramids</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">+20 2 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">info@alfouadpalace.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Fuad Hotel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4 text-white/40 text-xs">
            Experience the magic of Egypt • Heritage • Luxury • Hospitality
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;