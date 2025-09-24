import { Crown, Star, Users, Calendar } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Inspired by Egypt's golden age of hospitality and grandeur"
    },
    {
      icon: Star,
      title: "Luxury Service",
      description: "Exceptional service that honors ancient traditions of hospitality"
    },
    {
      icon: Users,
      title: "Cultural Experience",
      description: "Immerse yourself in authentic Egyptian culture and history"
    },
    {
      icon: Calendar,
      title: "Prime Location", 
      description: "Just 2.6 miles from Giza Pyramids, rated 8.4/10 by couples"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              About <span className="text-gradient-gold">Fuad Hotel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A legacy of Egyptian hospitality, where ancient traditions meet modern luxury
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                Our Story of Heritage & Hospitality
              </h3>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Al Fouad Palace Pyramids View is a distinguished 3-star hotel located in the heart of Giza, 
                  offering spectacular pyramid views just 2.6 miles from the Great Pyramids of Giza. 
                  Our prime location in Al Remaya provides easy access to Egypt's most iconic landmarks.
                </p>
                <p>
                  Named in honor of Egyptian heritage, our hotel combines traditional hospitality with modern 
                  comfort. We pride ourselves on providing exceptional service with a 24-hour front desk, 
                  airport transportation, and personalized concierge service to make your Egyptian adventure unforgettable.
                </p>
                <p>
                  From our outdoor swimming pool and terrace bar to our authentic restaurant serving American, 
                  Italian, and local Egyptian cuisine, we offer complete facilities for both leisure and 
                  business travelers seeking comfort near the wonders of ancient Egypt.
                </p>
              </div>
            </div>

            <div className="fade-in-delayed">
              <div className="luxury-card p-8 text-center">
                <div className="text-6xl font-display font-bold text-primary mb-4">7.4</div>
                <h4 className="text-xl font-display font-semibold mb-2">Guest Rating</h4>
                <p className="text-muted-foreground">
                  "Good" rating from 33 verified guest reviews on international platforms
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="luxury-card p-8 text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center mt-16 fade-in">
            <blockquote className="text-2xl md:text-3xl font-display italic text-primary max-w-4xl mx-auto">
              "Where the ancient Nile meets modern luxury, 
              and every guest becomes part of Egypt's eternal story."
            </blockquote>
            <cite className="block mt-4 text-muted-foreground">
              — The Fuad Hotel Legacy
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;