import React, { useEffect, useRef, useState } from "react";

const GallerySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showQr, setShowQr] = useState(false);
  const albumUrl = "https://photos.app.goo.gl/JJywmTYGyQFKAr2e9";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(albumUrl)}&color=595045&bgcolor=FDFBF7`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-brand-cream border-t border-brand-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            Recuerdos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-stone mb-6">
            Capturando Nuestro Día
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto text-lg">
            Vuestras sonrisas y recuerdos hacen que este día sea eterno.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* CTA Box - Striking & Calling for Action */}
          <div
            className={`w-full md:w-1/2 bg-gradient-to-br from-brand-gold via-brand-goldDark to-brand-gold rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center group shadow-[0_20px_50px_rgba(214,192,150,0.3)] hover:shadow-[0_25px_60px_rgba(214,192,150,0.5)] transition-all duration-1000 delay-100 transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
              <span className="material-symbols-outlined text-4xl fill-1">
                photo_camera
              </span>
            </div>

            {!showQr ? (
              <div className="animate-fade-in w-full flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
                  Nuestro Álbum <br className="hidden md:block" /> Colaborativo
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed max-w-[250px]">
                  Vuestras fotos son el mejor regalo. ¡Compártelas con nosotros!
                </p>
                <div className="flex flex-col w-full gap-3">
                  <a
                    href={albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-brand-goldDark font-bold uppercase text-sm tracking-[0.2em] py-4 rounded-xl shadow-xl hover:bg-brand-beige transition-all active:scale-95 text-center"
                  >
                    SUBIR FOTOS AHORA
                  </a>
                  <button
                    onClick={() => setShowQr(true)}
                    className="w-full bg-brand-stone/20 backdrop-blur text-white font-bold uppercase text-[10px] tracking-[0.3em] py-3 rounded-xl hover:bg-white/10 transition-all border border-white/20"
                  >
                    GENERAR QR PARA COMPARTIR
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-scale-in w-full flex flex-col items-center">
                <div className="bg-white p-4 rounded-2xl shadow-2xl mb-6 relative">
                  <img
                    src={qrUrl}
                    alt="QR Album Boda"
                    className="w-48 h-48 md:w-56 md:h-56"
                  />
                  <div className="absolute -top-3 -right-3 bg-brand-stone text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-sm">
                      qr_code_2
                    </span>
                  </div>
                </div>
                <h4 className="text-white font-serif italic text-lg mb-4">
                  ¡Escanea y comparte!
                </h4>
                <button
                  onClick={() => setShowQr(false)}
                  className="text-white/80 hover:text-white font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 group/back"
                >
                  <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  VOLVER
                </button>
              </div>
            )}
          </div>

          {/* Secondary Image (Rings) - Subtle & Aesthetic */}
          <div
            className={`w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden group shadow-lg transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <img
              src="img/anillos.avif"
              alt="Anillos"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-brand-stone/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
