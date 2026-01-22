import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  Sparkles, 
  Star, 
  Home, 
  Calendar, 
  Users, 
  Briefcase, 
  HelpCircle, 
  Phone, 
  Heart, 
  Globe, 
  Settings, 
  Award, 
  BookOpen,
  Music as MusicIcon,
  Car,
  List,
  MessageSquare,
  Handshake,
  FileText,
  Shield
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const animationRef = useRef(null);
  const dropdownRef = useRef(null);

  // Shooting star border animation
  useEffect(() => {
    let startTime = null;
    const duration = 3000;
    
    const animateBorder = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setBorderProgress(progress * 100);
      animationRef.current = requestAnimationFrame(animateBorder);
    };
    
    animationRef.current = requestAnimationFrame(animateBorder);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (activeDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Main navigation links with dropdowns
  const mainNavLinks = [
    { 
      label: "Home", 
      path: "/",
      icon: <Home size={16} />
    },
    { 
      label: "Services", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Event Planning", path: "/services/event-planning", icon: <Calendar size={14} /> },
        { label: "Catering Services", path: "/services/catering", icon: <Briefcase size={14} /> },
        { label: "Decoration & Theme", path: "/services/decoration", icon: <Sparkles size={14} /> },
        { label: "Photography & Videography", path: "/services/photography", icon: <Award size={14} /> },
        { label: "DJ & Entertainment", path: "/services/entertainment", icon: <MusicIcon size={14} /> },
        { label: "Venue Booking", path: "/services/venue", icon: <MapPin size={14} /> },
        { label: "Transportation", path: "/services/transportation", icon: <Car size={14} /> },
        { label: "Invitation Cards", path: "/services/invitations", icon: <BookOpen size={14} /> },
      ]
    },
    { 
      label: "Events", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Weddings", path: "/events/weddings", icon: <Heart size={14} /> },
        { label: "Birthday Parties", path: "/events/birthdays", icon: <Calendar size={14} /> },
        { label: "Corporate Events", path: "/events/corporate", icon: <Briefcase size={14} /> },
        { label: "Concerts & Shows", path: "/events/concerts", icon: <MusicIcon size={14} /> },
        { label: "Festivals", path: "/events/festivals", icon: <Globe size={14} /> },
        { label: "Baby Showers", path: "/events/baby-showers", icon: <Users size={14} /> },
      ]
    },
    { 
      label: "Vendors", 
      hasDropdown: true,
      dropdownItems: [
        { label: "All Vendors", path: "/vendors/all", icon: <Users size={14} /> },
        { label: "Top Rated", path: "/vendors/top-rated", icon: <Star size={14} /> },
        { label: "New Vendors", path: "/vendors/new", icon: <Sparkles size={14} /> },
        { label: "By Category", path: "/vendors/categories", icon: <List size={14} /> },
        { label: "Vendor Reviews", path: "/vendors/reviews", icon: <MessageSquare size={14} /> },
      ]
    },
    { 
      label: "Career", 
      path: "/career"
    },
    { 
      label: "About Us", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Our Story", path: "/about/story", icon: <BookOpen size={14} /> },
        { label: "Our Team", path: "/about/team", icon: <Users size={14} /> },
        { label: "Careers", path: "/about/careers", icon: <Briefcase size={14} /> },
        { label: "Partners", path: "/about/partners", icon: <Handshake size={14} /> },
        { label: "Testimonials", path: "/about/testimonials", icon: <MessageSquare size={14} /> },
      ]
    },
    { 
      label: "Support", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Help Center", path: "/support/help", icon: <HelpCircle size={14} /> },
        { label: "Contact Us", path: "/support/contact", icon: <Phone size={14} /> },
        { label: "FAQs", path: "/support/faqs", icon: <HelpCircle size={14} /> },
        { label: "Feedback", path: "/support/feedback", icon: <MessageSquare size={14} /> },
        { label: "Terms & Conditions", path: "/support/terms", icon: <FileText size={14} /> },
        { label: "Privacy Policy", path: "/support/privacy", icon: <Shield size={14} /> },
      ]
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Header with search bar-like shadow */}
        <div className={`relative bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-xl shadow-gray-300/70 backdrop-blur-sm bg-white/98' 
            : 'shadow-lg shadow-gray-300/50'
        }`}>
          {/* Shooting Star Border */}
          <div className="relative overflow-hidden h-[3px]">
            {/* Animated border track */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            
            {/* Shooting star effect */}
            <div 
              className="absolute top-0 h-full w-48"
              style={{
                left: `${borderProgress}%`,
                transform: `translateX(-${borderProgress}%)`,
              }}
            >
              {/* Main shooting star */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-orange-500 blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/80 via-orange-400/80 to-yellow-400/80" />
              
              {/* Sparkle trail */}
              <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-orange-300/50 to-transparent" />
              <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-yellow-300/30 to-transparent" />
              
              {/* Star at the head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-br from-white to-yellow-300 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-white to-yellow-300 rounded-full blur-sm" />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-md animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-sm animate-ping" style={{ animationDelay: '1s' }} />
                  
                  {/* Star points */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-gradient-to-b from-yellow-400 to-transparent" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-gradient-to-t from-yellow-400 to-transparent" />
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent" />
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-[2px] bg-gradient-to-l from-yellow-400 to-transparent" />
                  
                  {/* Diagonal points */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-gradient-to-br from-yellow-400 to-transparent rotate-45" />
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-bl from-yellow-400 to-transparent -rotate-45" />
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-tr from-yellow-400 to-transparent -rotate-45" />
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-gradient-to-tl from-yellow-400 to-transparent rotate-45" />
                </div>
              </div>
            </div>
            
            {/* Glowing particles */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full blur-sm animate-pulse"
                style={{
                  left: `${(i * 20) + 10}%`,
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: '0 0 8px 2px rgba(251, 191, 36, 0.5)',
                }}
              />
            ))}
          </div>

          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              {/* Left Section - Logo & Mobile Menu */}
              <div className="flex items-center gap-4 lg:gap-8">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X size={22} className="text-gray-700" />
                  ) : (
                    <Menu size={22} className="text-gray-700" />
                  )}
                </button>

                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center gap-2 group"
                  aria-label="Event Home"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    <span className="text-2xl lg:text-3xl font-black text-red-500 relative tracking-tighter">
                      Event<span className="text-orange-500">Hub</span>
                    </span>
                    <div className="absolute -top-3 -right-3">
                      <div className="relative">
                        <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
                        <div className="absolute inset-0 w-5 h-5 bg-orange-500/20 rounded-full blur-sm animate-ping" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Desktop Navigation with Dropdowns */}
                <div className="hidden lg:flex items-center gap-6">
                  {mainNavLinks.map((link) => (
                    <div key={link.label} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                      {link.hasDropdown ? (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="flex items-center gap-1 text-gray-700 hover:text-red-500 font-semibold text-[15px] transition-all duration-300 relative group"
                        >
                          {link.icon && <span className="mr-1">{link.icon}</span>}
                          {link.label}
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                          />
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-400" />
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          className="flex items-center gap-1 text-gray-700 hover:text-red-500 font-semibold text-[15px] transition-all duration-300 relative group"
                        >
                          {link.icon && <span className="mr-1">{link.icon}</span>}
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-400" />
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      {link.hasDropdown && activeDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-gray-400/50 border border-gray-100 animate-scale-in z-50 overflow-hidden">
                          <div className="p-2">
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50/50 rounded-xl font-medium text-[14px] transition-all duration-200 hover:translate-x-1 group/item"
                              >
                                <span className="text-gray-400 group-hover/item:text-red-400 transition-colors">
                                  {item.icon}
                                </span>
                                {item.label}
                                <ChevronDown size={12} className="ml-auto -rotate-90 text-gray-300 group-hover/item:text-red-300" />
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 p-2">
                            <Link
                              to={link.label === "Services" ? "/services/all" : `/${link.label.toLowerCase()}/all`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-center gap-2 px-4 py-2.5 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold text-[14px] hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                            >
                              <Sparkles size={14} />
                              View All {link.label}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Section - Search */}
              <div className="hidden lg:flex flex-1 max-w-xl mx-8">
                <div className="relative w-full">
                  <div
                    className={`relative flex items-center bg-white rounded-2xl transition-all duration-500 ${
                      isSearchFocused
                        ? "shadow-2xl shadow-red-500/25 ring-2 ring-red-500/30"
                        : "shadow-lg shadow-gray-300/70 hover:shadow-xl hover:shadow-gray-400/60"
                    }`}
                  >
                    {/* Location */}
                    <div className="flex items-center gap-2 px-4 py-3.5 border-r border-gray-200 hover:bg-gray-50/80 transition-colors duration-300 rounded-l-2xl">
                      <MapPin size={18} className="text-red-500 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Location"
                        defaultValue="Bengaluru"
                        className="outline-none text-[15px] w-32 bg-transparent placeholder-gray-500 font-medium"
                      />
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>

                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-4 py-3.5 flex-1">
                      <Search size={18} className="text-gray-500 flex-shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        placeholder="Search DJs, Catering, Venues, Decorations..."
                        className="outline-none text-[15px] w-full bg-transparent placeholder-gray-500 font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200 shadow-sm"
                        >
                          <X size={16} className="text-gray-500" />
                        </button>
                      )}
                    </div>

                    {/* Search Button */}
                    <button className="px-7 py-3.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-[15px] hover:shadow-lg hover:shadow-red-500/40 active:scale-95 transition-all duration-300 rounded-r-2xl relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-x-24 -inset-y-8 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                      <span className="relative flex items-center gap-2">
                        <Search size={16} />
                        Search
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section - Auth & CTA */}
              <div className="flex items-center gap-4">
                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-red-500 font-semibold text-[15px] px-4 py-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <User size={18} />
                    Log in
                  </Link>

                  <Link
                    to="/signup"
                    className="relative overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-red-500/30 rounded-xl transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-x-24 -inset-y-8 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                    <span className="relative block text-white font-bold text-[15px] px-6 py-2.5 rounded-xl transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-95 flex items-center gap-2">
                      <Star size={16} className="text-yellow-300" />
                      Register
                    </span>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Mobile Search */}
            <div className="lg:hidden pb-4">
              <div className="flex items-center bg-gray-50/80 rounded-2xl px-4 py-3 gap-3 shadow-lg">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="outline-none text-[15px] flex-1 bg-transparent placeholder-gray-500 font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40">
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div 
              ref={mobileMenuRef}
              className="absolute top-0 left-0 w-80 h-full bg-white shadow-2xl shadow-black/30 animate-slide-in-left"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-black text-red-500">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 shadow-md"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {mainNavLinks.map((link) => (
                    <div key={link.label}>
                      {link.hasDropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                            className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-red-500 hover:bg-red-50/50 rounded-xl font-semibold text-[15px] transition-all duration-300"
                          >
                            <span className="flex items-center gap-2">
                              {link.icon}
                              {link.label}
                            </span>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {activeDropdown === link.label && (
                            <div className="ml-6 space-y-1 animate-fade-in">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-4 text-gray-600 hover:text-red-500 hover:bg-red-50/30 rounded-xl font-medium text-[14px] transition-all duration-300"
                                >
                                  {item.icon}
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-red-500 hover:bg-red-50/50 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-3 py-3.5 px-4 text-gray-700 hover:text-red-500 hover:bg-red-50/50 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} />
                    Log in to Account
                  </Link>
                  
                  <Link
                    to="/signup"
                    className="block text-center bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-[15px] py-3.5 px-4 rounded-xl hover:shadow-2xl hover:shadow-red-500/30 active:scale-95 transition-all duration-500 shadow-xl relative overflow-hidden group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute -inset-x-24 -inset-y-8 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Star size={16} className="text-yellow-300" />
                      Create Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;