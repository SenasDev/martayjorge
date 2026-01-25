import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-beige border-t border-brand-gold/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
            <h2 className="text-3xl font-serif text-brand-stone font-bold">M & J</h2>
            <div className="flex gap-8">
                <a href="#" className="text-brand-text hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Nuestra Historia</a>
                <a href="#details" className="text-brand-text hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Detalles</a>
                <a href="#rsvp" className="text-brand-text hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Regalo</a>
            </div>
            <p className="text-brand-text/70 text-xs mt-4">© 2026 Boda de Marta & Jorge. Celebrando el amor.</p>
        </div>
    </footer>
  );
};

export default Footer;