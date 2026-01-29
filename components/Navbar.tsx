import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/20 py-3 md:py-4 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-gold text-xl md:text-2xl">
                favorite
              </span>
              <span
                className={`text-lg md:text-xl font-serif font-bold tracking-wide ${scrolled ? "text-brand-stone" : "text-white"}`}
              >
                M & J
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#"
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? "text-brand-text hover:text-brand-gold" : "text-gray-200 hover:text-white"}`}
                >
                  Inicio
                </a>
                <a
                  href="#invitacion"
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? "text-brand-text hover:text-brand-gold" : "text-gray-200 hover:text-white"}`}
                >
                  La Invitación
                </a>
                <a
                  href="#details"
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? "text-brand-text hover:text-brand-gold" : "text-gray-200 hover:text-white"}`}
                >
                  Detalles
                </a>
                <a
                  href="#rsvp"
                  className="bg-brand-gold hover:bg-brand-goldDark text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/20 active:scale-95"
                >
                  CONFIRMAR
                </a>
              </div>

              {/* Mobile Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 transition-colors ${scrolled ? "text-brand-stone" : "text-white"}`}
                  aria-label="Toggle menu"
                >
                  <span className="material-symbols-outlined">
                    {mobileMenuOpen ? "close" : "menu"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden animate-fade-in"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-brand-cream z-40 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-gold/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-gold text-2xl">
                favorite
              </span>
              <span className="text-xl font-serif font-bold text-brand-stone">
                M & J
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-brand-stone"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-2 p-6">
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-brand-stone hover:text-brand-gold font-bold uppercase tracking-wider text-sm py-3 px-4 rounded-lg hover:bg-brand-beige transition-all"
            >
              Inicio
            </a>
            <a
              href="#invitacion"
              onClick={closeMobileMenu}
              className="text-brand-stone hover:text-brand-gold font-bold uppercase tracking-wider text-sm py-3 px-4 rounded-lg hover:bg-brand-beige transition-all"
            >
              La Invitación
            </a>
            <a
              href="#details"
              onClick={closeMobileMenu}
              className="text-brand-stone hover:text-brand-gold font-bold uppercase tracking-wider text-sm py-3 px-4 rounded-lg hover:bg-brand-beige transition-all"
            >
              Detalles
            </a>
            <a
              href="#rsvp"
              onClick={closeMobileMenu}
              className="bg-brand-gold hover:bg-brand-goldDark text-white font-bold uppercase tracking-wider text-sm py-3 px-4 rounded-lg transition-all shadow-lg mt-2 text-center"
            >
              CONFIRMAR
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
