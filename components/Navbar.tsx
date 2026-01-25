import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/20 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-gold text-2xl">favorite</span>
            <span className={`text-xl font-serif font-bold tracking-wide ${scrolled ? 'text-brand-stone' : 'text-white'}`}>
              M & J
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-text hover:text-brand-gold' : 'text-gray-200 hover:text-white'}`}>Inicio</a>
              <a href="#details" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-text hover:text-brand-gold' : 'text-gray-200 hover:text-white'}`}>Detalles</a>
              <a href="#rsvp" className="bg-brand-gold hover:bg-brand-goldDark text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/20">
                RSVP
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button className={`p-2 transition-colors ${scrolled ? 'text-brand-stone' : 'text-white'}`}>
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;