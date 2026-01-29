import React, { useState } from "react";
import { useInView } from "../hooks/useParallax";

const InvitationSection: React.FC = () => {
  const { ref: sectionRef, isInView: isVisible } = useInView({
    threshold: 0.1,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    // Stop background music
    window.dispatchEvent(new CustomEvent("stop-music-player"));

    // Hide overlay after 5 seconds of playing
    setTimeout(() => {
      setShowOverlay(false);
    }, 5000);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <section
      id="invitacion"
      ref={sectionRef}
      className="py-20 bg-brand-beige border-t border-brand-gold/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            La Invitación
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-stone mb-6">
            Nuestra Historia en Video
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto text-lg">
            Queríamos hacer algo especial y único. Aquí tenéis el resultado de
            horas "peleando" con la Inteligencia Artificial.
          </p>
        </div>

        <div
          className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-gold/10 transition-all duration-1000 delay-200 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <div className="w-full relative bg-black/20">
            <video
              src="/videoboda.mp4"
              controls={isPlaying}
              className="w-full h-auto min-h-[300px] md:min-h-[500px] max-h-[85vh] block object-contain"
              poster="https://images.unsplash.com/photo-1519225448526-0a09daa3124c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
              onPlay={handlePlay}
              onPause={handlePause}
            >
              Tu navegador no soporta el tag de video.
            </video>

            {/* Initial Play Overlay - Minimalist focus */}
            {!isPlaying && showOverlay && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group/overlay"
                onClick={() => {
                  const video = document.querySelector("video");
                  if (video) video.play();
                }}
              >
                <div className="animate-pulse-slow mb-4 md:mb-6 group-hover/overlay:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-7xl md:text-9xl fill-1 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    play_circle
                  </span>
                </div>
                <div className="text-center px-6 transition-all duration-500">
                  <p className="text-white text-xl md:text-3xl font-serif italic mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    "La IA nos dijo que esto sería fácil... claramente mintió"
                  </p>
                  <p className="text-amber-100 text-xs md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                    ¡Dale al play para ver el desastre!
                  </p>
                </div>
              </div>
            )}

            {/* Badge */}
            <div
              className={`absolute top-4 right-4 z-10 pointer-events-none transition-opacity duration-500 ${!showOverlay && isPlaying ? "opacity-0" : "opacity-100"}`}
            >
              <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-brand-gold/20">
                <span className="flex items-center gap-2 text-brand-stone font-bold text-[10px] md:text-xs uppercase tracking-widest leading-none">
                  <span className="material-symbols-outlined text-brand-gold text-sm md:text-base">
                    smart_toy
                  </span>
                  Bloopers IA
                </span>
              </div>
            </div>

            {/* Bottom Hint */}
            {isPlaying && showOverlay && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 pointer-events-none animate-fade-in">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-serif mb-1">
                    Cuando la IA intenta ayudar...
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm">
                    Nuestros intentos fallidos de crear la invitación perfecta.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
