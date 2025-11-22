import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Globe, Zap, Shield, Users, Send, ArrowLeft } from 'lucide-react';

// --- Components ---

const Navigation = ({ onNavigate, mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Refresher siden / Går til Hjem */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => {
            onNavigate('home');
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
             <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:scale-75 transition-transform"></div>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Toppfjell</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className="text-white/90 hover:text-white cursor-pointer text-sm font-medium transition-colors">
            Tjenester
          </button>
          <button onClick={() => onNavigate('home')} className="text-white/90 hover:text-white cursor-pointer text-sm font-medium transition-colors">
            Om oss
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-white hover:text-white/80 text-sm font-medium transition-colors">
            Logg inn
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all shadow-lg shadow-white/10"
          >
            Kontakt oss
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-4 md:hidden h-screen">
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-white text-lg font-medium text-left">Tjenester</button>
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-white text-lg font-medium text-left">Om oss</button>
          <div className="h-px bg-white/10 my-2"></div>
          <button className="text-white text-lg font-medium text-left">Logg inn</button>
          <button 
            onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
            className="bg-white text-slate-900 px-5 py-3 rounded-full text-base font-medium w-full"
          >
            Kontakt oss
          </button>
        </div>
      )}
    </nav>
  );
};

const Badge = () => (
  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 cursor-pointer hover:bg-white/20 transition-colors animate-fade-in-down">
    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
    <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
      Ledende innen Executive Search
    </span>
    <ArrowRight size={12} className="text-white/70" />
  </div>
);

const LogoTicker = () => {
  const logos = [
    "TELENOR", "GJENSIDIGE", "EQUINOR", "DNB", "KONGSBERG", "ORKLA", "YARA"
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-gradient-to-t from-slate-950/80 to-transparent backdrop-blur-[2px] py-8 md:py-12 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60">
           {logos.map((logo, idx) => (
             <span key={idx} className="text-white font-semibold text-lg tracking-widest uppercase font-sans hover:opacity-100 transition-opacity cursor-default select-none">
               {logo}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop" 
          alt="Foggy Mountains" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-slate-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto pt-20 pb-32 flex flex-col items-center animate-fade-in-up">
        <Badge />
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6 drop-shadow-xl">
          Ledere som flytter fjell.<br className="hidden md:block" />
          <span className="text-white/90">Vi finner dem for deg.</span>
        </h1>
        
        <p className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto">
          Skreddersydd rekruttering av toppledere og spesialister. Vi kobler eksepsjonelle talenter med ambisiøse selskaper.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Kontakt oss
          </button>
          <button className="text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/5 backdrop-blur-sm transition-all border border-transparent hover:border-white/10">
             Se ledige stillinger
          </button>
        </div>
      </div>

      <LogoTicker />
    </div>
  );
};

const FeatureGrid = () => {
    const features = [
        { icon: <Globe className="w-6 h-6" />, title: "Nasjonalt Nettverk", desc: "Tilgang til de fremste kandidatene over hele Norge, fra sør til nord." },
        { icon: <Zap className="w-6 h-6" />, title: "Rask Prosess", desc: "Effektiv kartlegging og utvelgelse uten at det går på bekostning av kvaliteten." },
        { icon: <Shield className="w-6 h-6" />, title: "Full Diskresjon", desc: "Vi garanterer konfidensialitet for både oppdragsgiver og kandidater." },
        { icon: <Users className="w-6 h-6" />, title: "Kandidatgaranti", desc: "Vi sikrer at matchen er riktig. Langsiktighet er nøkkelen til suksess." }
    ];

    return (
        <div className="bg-slate-950 py-24 px-6 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-white font-serif text-4xl md:text-5xl mb-4">Forberedt på fremtiden.</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Vi finner menneskene som skal lede bedriften din gjennom neste fase.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-white text-xl font-medium mb-3">{f.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- New Contact Page Component ---

const ContactPage = ({ onBack }) => {
  const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to a backend
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12 flex flex-col items-center relative">
      {/* Background reuse for consistency */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-slate-950"></div>
         <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-900 to-slate-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl animate-fade-in-up">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Tilbake til forsiden
        </button>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
          {!isSubmitted ? (
            <>
              <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ta kontakt</h2>
                <p className="text-white/60">Fyll ut skjemaet, så tar en av våre rådgivere kontakt med deg innen kort tid.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Navn</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ola Nordmann"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/10 transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Selskap</label>
                    <input 
                      type="text" 
                      placeholder="Bedrift AS"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/10 transition-all"
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">E-post</label>
                  <input 
                    required
                    type="email" 
                    placeholder="ola@bedrift.no"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/10 transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Melding</label>
                  <textarea 
                    rows="4"
                    placeholder="Hva kan vi bistå med?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/10 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-slate-900 font-semibold text-lg py-4 rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  Send henvendelse <Send size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Takk for din henvendelse!</h3>
              <p className="text-white/60 mb-8">Vi har mottatt meldingen din og vil ta kontakt med deg snarest.</p>
              <button 
                onClick={onBack}
                className="text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Tilbake til forsiden
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle navigation
  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-white/30 selection:text-white">
      <Navigation 
        onNavigate={navigate} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      {currentPage === 'home' ? (
        <>
          <Hero onNavigate={navigate} />
          <FeatureGrid />
        </>
      ) : (
        <ContactPage onBack={() => navigate('home')} />
      )}
      
      {/* Footer stays on all pages */}
      <footer className="bg-black text-white/40 py-12 px-6 text-center text-sm relative z-20 border-t border-white/5">
        <p>© 2024 Toppfjell AS. Alle rettigheter reservert.</p>
      </footer>

      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}