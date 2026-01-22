import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Sparkles,
  Star,
  Award,
  Shield,
  Globe,
  Download,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    {
      title: "Services",
      links: [
        { name: "Wedding Planning", path: "/services/wedding" },
        { name: "Corporate Events", path: "/services/corporate" },
        { name: "Birthday Parties", path: "/services/birthday" },
        { name: "Catering Services", path: "/services/catering" },
        { name: "Photography", path: "/services/photography" },
        { name: "Venue Booking", path: "/services/venue" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Blog", path: "/blog" },
        { name: "Partners", path: "/partners" },
        { name: "Success Stories", path: "/success" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Cancellation", path: "/cancellation" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ]
    }
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Surat", "Kanpur", "Nagpur", "Indore", "Thane"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    <span className="text-3xl font-black text-white relative">
                      Event<span className="text-orange-500">Spark</span>
                    </span>
                    <Sparkles className="absolute -top-2 -right-3 w-5 h-5 text-orange-500 animate-pulse" />
                  </div>
                  <div className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                    PRO
                  </div>
                </div>
              </Link>

              <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
                India's most trusted platform for event services. Connecting you with 5000+ verified vendors for unforgettable celebrations.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold">Secure</div>
                    <div className="text-sm text-gray-400">100% Safe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold">Verified</div>
                    <div className="text-sm text-gray-400">All Vendors</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-bold">120+ Cities</div>
                    <div className="text-sm text-gray-400">Pan India</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Star className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="font-bold">4.9/5</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-500" />
                  Get Event Tips & Offers
                </h3>
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      Subscribe
                    </button>
                  </div>
                  {isSubscribed && (
                    <div className="absolute -bottom-8 left-0 text-green-400 text-sm flex items-center gap-2 animate-fade-in">
                      <Sparkles className="w-4 h-4" />
                      Successfully subscribed! Check your email.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {quickLinks.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-500 pl-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.path}
                            className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                          >
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Popular Cities */}
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-6">Popular Cities</h3>
                <div className="flex flex-wrap gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      to={`/city/${city.toLowerCase()}`}
                      className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-orange-500 transition-all duration-300 border border-white/10 hover:border-orange-500/50"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="grid md:grid-cols-2 gap-12 py-12 border-t border-white/10">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <a href="tel:+9118001234567" className="text-xl font-bold hover:text-orange-500 transition-colors">
                      +91 1800 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email Us</div>
                    <a href="mailto:hello@eventspark.com" className="text-xl font-bold hover:text-orange-500 transition-colors">
                      hello@eventspark.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Visit Us</div>
                    <div className="text-lg font-bold">123 Event Street, Mumbai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Download */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                {/* Social Media */}
                <div>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/10"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Apps */}
                <div>
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href="#"
                      className="flex-1 min-w-[200px] p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-white/10 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">📱</div>
                        <div>
                          <div className="text-sm text-gray-400">Download on</div>
                          <div className="font-bold text-lg flex items-center gap-2">
                            Google Play
                            <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex-1 min-w-[200px] p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-white/10 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">📱</div>
                        <div>
                          <div className="text-sm text-gray-400">Download on</div>
                          <div className="font-bold text-lg flex items-center gap-2">
                            App Store
                            <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black/50 border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} EventSpark. All rights reserved.
              </div>

              {/* Made with love */}
              <div className="flex items-center gap-2 text-gray-300">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in India
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-white/10">
              {["Visa", "Mastercard", "Rupay", "PayPal", "UPI", "Net Banking", "Cash"].map((method) => (
                <div key={method} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;