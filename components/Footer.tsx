import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-stone py-16 px-4 text-center border-t border-brand-gold/10 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#D6C096 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-brand-gold text-3xl">favorite</span>
          <h2 className="text-4xl font-serif text-white font-bold tracking-wide">Marta & Jorge</h2>
          <p className="text-brand-gold/80 uppercase tracking-[0.2em] text-xs mt-1">20 . 06 . 2026</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="#" className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest">Inicio</a>
          <a href="#details" className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest">Detalles</a>
          <a href="#rsvp" className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest">Confirmar</a>
          <a href="#rsvp" className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest">Lista de Boda</a>
        </div>

        <div className="w-12 h-px bg-white/10 my-2"></div>

        <p className="text-white/30 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Boda Marta & Jorge
          <span className="mx-2">•</span>
          Celebrando el amor en Madrid
        </p>
      </div>
    </footer>
  );
};

export default Footer;