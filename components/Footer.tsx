import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-stone py-16 px-4 text-center border-t border-brand-gold/10 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#D6C096 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-brand-gold text-3xl">
            favorite
          </span>
          <h2 className="text-4xl font-serif text-white font-bold tracking-wide">
            Marta & Jorge
          </h2>
          <p className="text-brand-gold/80 uppercase tracking-[0.2em] text-xs mt-1">
            20 . 06 . 2026
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a
            href="#"
            className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Inicio
          </a>
          <a
            href="#details"
            className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Detalles
          </a>
          <a
            href="#rsvp"
            className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Confirmar
          </a>
          <a
            href="#rsvp"
            className="text-white/60 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
          >
            {" "}
            La Invitación
          </a>
        </div>

        <div className="w-12 h-px bg-white/10 my-2"></div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Codiaj • Todos los derechos reservados.
          </p>

          <div className="flex flex-col items-center gap-1.5 pt-2">
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-light">
              Arquitectura Web by
            </p>
            <a
              href="https://www.codiaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <span className="text-brand-gold font-bold tracking-[0.5em] text-sm group-hover:text-white transition-colors duration-300">
                CODIAJ
              </span>
              <span className="text-white/20 text-[8px] uppercase tracking-[0.2em] mt-1 group-hover:text-brand-gold/60 transition-colors">
                Ecosistema Digital para los Marta y Jorge
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
