import { useEffect, useState } from "react";
import { 
  Calendar, 
  Users, 
  Star,
  ArrowRight,
  Award,
  Shield,
  Clock,
  Globe
} from "lucide-react";

const Hero = () => {
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState({
    vendors: 0,
    events: 0,
    cities: 0,
    happyClients: 0
  });

  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Complete wedding services from venues to catering",
      icon: "💍",
      vendors: "850+",
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional event management for businesses",
      icon: "💼",
      vendors: "620+",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Birthday Parties",
      description: "Make birthdays memorable with our experts",
      icon: "🎂",
      vendors: "720+",
      color: "bg-gradient-to-r from-orange-500 to-yellow-500"
    },
    {
      id: 4,
      title: "Concerts & Shows",
      description: "DJs, artists, and complete show management",
      icon: "🎵",
      vendors: "480+",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  // Animate stats counter
  useEffect(() => {
    const targets = {
      vendors: 5000,
      events: 25000,
      cities: 120,
      happyClients: 100000
    };

    const duration = 2000;
    const steps = 60;
    const increment = targets.vendors / steps;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setStats({
        vendors: Math.min(Math.floor(currentStep * increment), targets.vendors),
        events: Math.min(Math.floor((currentStep * targets.events) / steps), targets.events),
        cities: Math.min(Math.floor((currentStep * targets.cities) / steps), targets.cities),
        happyClients: Math.min(Math.floor((currentStep * targets.happyClients) / steps), targets.happyClients)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-50" />
        
        {/* Pattern Dots */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #ef4444 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full mb-10 shadow-xl shadow-red-500/20">
              <Award className="w-6 h-6" />
              <span className="font-bold text-lg">#1 Event Platform in India</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="block text-gray-900">Your Perfect Event</span>
              <span className="block">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  Starts Here
                </span>
              </span>
            </h1>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute -inset-24 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                <span className="relative flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <button className="group relative px-10 py-5 bg-white text-gray-800 font-bold text-lg rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative flex items-center justify-center gap-3">
                  <Users className="w-6 h-6" />
                </span>
              </button>
            </div> */}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Verified Vendors</h3>
                </div>
                <p className="text-gray-600">All vendors are background checked and quality verified</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-50 rounded-xl">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Quick Booking</h3>
                </div>
                <p className="text-gray-600">Book vendors in minutes with our streamlined process</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Globe className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Pan India</h3>
                </div>
                <p className="text-gray-600">Services available in 120+ cities across India</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl transform -skew-y-3" />
            <div className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 transform skew-y-3">
              <div className="transform -skew-y-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: "Verified Vendors", value: stats.vendors, suffix: "+", icon: "👥" },
                    { label: "Events Organized", value: stats.events, suffix: "+", icon: "🎉" },
                    { label: "Cities Across India", value: stats.cities, suffix: "+", icon: "📍" },
                    { label: "Happy Clients", value: stats.happyClients, suffix: "+", icon: "😊" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-5xl font-bold text-white mb-2">{stat.icon}</div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">
                        {stat.value.toLocaleString()}{stat.suffix}
                      </div>
                      <div className="text-white/90 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Showcase */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular <span className="text-red-500">Event Services</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose from our wide range of professional services for every occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    index === activeService ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Card */}
                  <div className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 ${
                    index === activeService 
                      ? 'border-red-500 shadow-2xl' 
                      : 'border-gray-100 group-hover:border-red-300 group-hover:shadow-2xl'
                  }`}>
                    {/* Icon Background */}
                    <div className={`absolute -top-6 -right-6 w-24 h-24 ${service.color} rounded-2xl opacity-20 blur-xl`} />
                    
                    {/* Service Icon */}
                    <div className="text-5xl mb-6">{service.icon}</div>
                    
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {/* Vendor Count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-500 font-medium">{service.vendors} vendors</span>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                        index === activeService ? 'translate-x-2 text-red-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  {index === activeService && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;