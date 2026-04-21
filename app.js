```react
import React, { useState } from 'react';

// --- INLINE SVG ICONS (Replaces external library to fix loading issues) ---
const SearchIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>);
const MapPinIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
const StarIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const ScissorsIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>);
const ChevronLeftIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>);
const PhoneIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const CheckCircleIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);


// --- MOCK DATA FOR LAGOS TAILORS ---
const TAILORS = [
  {
    id: 1,
    name: "Stitches by Tola",
    location: "Yaba, Lagos",
    specialty: ["Aso Ebi", "Bridal", "Women's Wear"],
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1598522325752-0545f4cbf23a?auto=format&fit=crop&w=800&q=80",
    bio: "Premium bespoke tailoring for women. We specialize in turning your Owambe fabrics into show-stopping masterpieces.",
    price: "₦15,000 - ₦80,000"
  },
  {
    id: 2,
    name: "Ikeja Bespoke Co.",
    location: "Ikeja, Lagos",
    specialty: ["Suits", "Agbada", "Men's Native"],
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
    bio: "Expert men's tailoring. From crisp corporate suits to rich, traditional Agbada and Senator styles.",
    price: "₦20,000 - ₦150,000"
  },
  {
    id: 3,
    name: "Lekki Alterations & Fit",
    location: "Lekki Phase 1, Lagos",
    specialty: ["Alterations", "Ready-to-wear", "Bespoke"],
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=800&q=80",
    bio: "Quick, precise, and perfect alterations. We make your clothes fit like a glove, with rapid turnaround times.",
    price: "₦5,000 - ₦30,000"
  },
  {
    id: 4,
    name: "Surulere Styles",
    location: "Surulere, Lagos",
    specialty: ["Casuals", "Ankara", "Kids"],
    rating: 4.5,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?auto=format&fit=crop&w=800&q=80",
    bio: "Modern Ankara styles for everyday wear. Affordable, stylish, and durable outfits for the whole family.",
    price: "₦10,000 - ₦40,000"
  },
  {
    id: 5,
    name: "House of Zik",
    location: "Victoria Island, Lagos",
    specialty: ["Haute Couture", "Bridal", "Evening Wear"],
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    bio: "Luxury fashion house offering exclusive haute couture designs for high-profile events and red carpets.",
    price: "₦100,000+"
  },
  {
    id: 6,
    name: "Mainland Stitches",
    location: "Maryland, Lagos",
    specialty: ["Uniforms", "Corporate", "Bulk Orders"],
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    bio: "Your go-to for corporate wear and bulk uniform orders. Quality stitching at scale.",
    price: "₦8,000 - ₦25,000"
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedTailor, setSelectedTailor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTailorSelect = (tailor) => {
    setSelectedTailor(tailor);
    setCurrentView('profile');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedTailor(null);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const filteredTailors = TAILORS.filter(tailor => 
    tailor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tailor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tailor.specialty.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleBackToHome}
          >
            <div className="bg-emerald-600 p-2 rounded-lg">
              <ScissorsIcon className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-900">OwaTailor</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <button className="hover:text-emerald-600 transition">For Tailors</button>
            <button className="hover:text-emerald-600 transition">Sign In</button>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pb-12">
        {currentView === 'home' && (
          <HomeView 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            tailors={filteredTailors} 
            onSelectTailor={handleTailorSelect} 
          />
        )}
        
        {currentView === 'profile' && selectedTailor && (
          <ProfileView 
            tailor={selectedTailor} 
            onBack={handleBackToHome} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
             <ScissorsIcon className="h-6 w-6 text-emerald-500" />
             <span className="font-bold text-xl text-white">OwaTailor</span>
          </div>
          <p className="mb-4">Connecting Lagosians to the best bespoke tailors and fashion designers.</p>
          <p className="text-sm">© 2026 OwaTailor Nigeria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// --- HOME VIEW COMPONENT ---
function HomeView({ searchQuery, setSearchQuery, tailors, onSelectTailor }) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Find the Perfect Tailor <br className="hidden md:block"/> in Lagos
          </h1>
          <p className="text-lg md:text-xl mb-8 text-emerald-100">
            From Aso Ebi to bespoke suits, connect with top-rated fashion designers and tailors near you.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full flex items-center shadow-lg max-w-2xl mx-auto">
            <div className="pl-4 text-gray-400">
              <SearchIcon className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search by location (e.g. Yaba) or specialty..." 
              className="w-full py-3 px-4 text-gray-800 focus:outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Tailors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? 'Search Results' : 'Top Rated Tailors'}
            </h2>
            <p className="text-gray-500 mt-1">
              {tailors.length} {tailors.length === 1 ? 'tailor' : 'tailors'} found
            </p>
          </div>
        </div>

        {tailors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tailors.map(tailor => (
              <TailorCard key={tailor.id} tailor={tailor} onClick={() => onSelectTailor(tailor)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <ScissorsIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900">No tailors found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- TAILOR CARD COMPONENT ---
function TailorCard({ tailor, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={tailor.image} 
          alt={tailor.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <StarIcon className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-bold text-gray-900">{tailor.rating}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{tailor.name}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {tailor.location}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tailor.specialty.map((item, idx) => (
            <span key={idx} className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium border border-emerald-100">
              {item}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">{tailor.reviews} reviews</span>
          <span className="text-sm font-medium text-emerald-600">View Profile →</span>
        </div>
      </div>
    </div>
  );
}

// --- PROFILE VIEW COMPONENT ---
function ProfileView({ tailor, onBack }) {
  const [bookingState, setBookingState] = useState('idle');

  const handleBook = () => {
    setBookingState('loading');
    setTimeout(() => {
      setBookingState('success');
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-in slide-in-from-right-4 duration-300">
      <button 
        onClick={onBack}
        className="flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition mb-6"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Search
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={tailor.image} 
            alt={tailor.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-3/5 p-8 md:p-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{tailor.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
                {tailor.location}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-amber-500 mb-1">
                <StarIcon className="h-6 w-6" />
                <span className="text-2xl font-bold text-gray-900">{tailor.rating}</span>
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">{tailor.reviews} Reviews</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed">{tailor.bio}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {tailor.specialty.map((item, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Estimated Price</h3>
              <p className="text-gray-700 font-medium">{tailor.price}</p>
              <p className="text-xs text-gray-400 mt-1">*Varies by fabric and design</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            {bookingState === 'success' ? (
              <div className="flex-1 bg-emerald-50 text-emerald-700 py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 border border-emerald-200">
                <CheckCircleIcon className="h-6 w-6" />
                Request Sent Successfully!
              </div>
            ) : (
              <button 
                onClick={handleBook}
                disabled={bookingState === 'loading'}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition shadow-lg shadow-emerald-200 flex justify-center items-center disabled:opacity-70"
              >
                {bookingState === 'loading' ? 'Sending Request...' : 'Book Consultation'}
              </button>
            )}
            
            <button className="sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-xl font-medium transition flex items-center justify-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              Call
            </button>
            <button className="sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-xl font-medium transition flex items-center justify-center gap-2">
              <MailIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


```


