import React, { useState, useEffect, useRef } from "react";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Configurar el audio al montar
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }

    // Mostrar el mensaje de ayuda a los 5 segundos si no está sonando música
    const hintTimer = setTimeout(() => {
      if (!isPlaying) {
        setShowHint(true);
      }
    }, 5000);

    const handleStopMusic = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    // Escuchar el evento personalizado para parar la música cuando empiece el video
    window.addEventListener("stop-music-player", handleStopMusic);

    return () => {
      window.removeEventListener("stop-music-player", handleStopMusic);
      clearTimeout(hintTimer);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setShowHint(false);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay bloqueado o error de audio:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-4 group">
      <audio ref={audioRef} src="/music.mp3" loop />

      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-700 shadow-xl border overflow-hidden ${
          isPlaying
            ? "bg-brand-gold border-brand-gold shadow-brand-gold/40 scale-105"
            : "bg-white/90 backdrop-blur-md border-brand-gold/20 hover:border-brand-gold/50 shadow-black/5 hover:scale-110"
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {/* Animated Background Ripples when playing */}
        {isPlaying && (
          <>
            <div className="absolute inset-0 animate-ping bg-white/20 rounded-full"></div>
            <div className="absolute inset-0 animate-pulse bg-brand-gold/40 rounded-full scale-110"></div>
          </>
        )}

        {/* Visualizer bars when playing */}
        <div
          className={`flex items-end gap-[3px] h-5 transition-all duration-500 transform ${isPlaying ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4 absolute"}`}
        >
          <div className="w-[3px] bg-white rounded-full animate-music-bar-1 h-3"></div>
          <div className="w-[3px] bg-white rounded-full animate-music-bar-2 h-5"></div>
          <div className="w-[3px] bg-white rounded-full animate-music-bar-3 h-4"></div>
          <div className="w-[3px] bg-white rounded-full animate-music-bar-1 h-2"></div>
        </div>

        {/* Icon when paused */}
        <span
          className={`material-symbols-outlined transition-all duration-700 ${
            isPlaying
              ? "opacity-0 scale-0 rotate-180 absolute"
              : "text-brand-gold scale-125 opacity-100 rotate-0"
          } text-3xl font-light`}
        >
          play_circle
        </span>
      </button>

      {/* floating hint - appears after 5s if not playing */}
      <div
        className={`fixed bottom-20 md:bottom-24 left-6 transition-all duration-700 transform ${
          showHint && !isPlaying
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="relative bg-brand-stone text-white px-4 py-2 rounded-xl shadow-2xl text-xs font-medium tracking-wide flex items-center gap-2 group/hint animate-bounce-slow">
          <span className="material-symbols-outlined text-brand-gold text-lg">
            music_note
          </span>
          <span>¿Quieres escuchar nuestra música?</span>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-brand-stone rotate-45"></div>
        </div>
      </div>

      {/* Floating Track Info (Desktop only) */}
      <div
        className={`hidden md:flex flex-col transition-all duration-700 transform ${
          isPlaying
            ? "translate-x-0 opacity-100"
            : "-translate-x-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-brand-gold/10 shadow-sm">
          <p className="text-[10px] font-bold text-brand-goldDark uppercase tracking-[0.2em] leading-tight mb-0.5">
            Música Especial
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
            <p className="text-xs font-serif italic text-brand-stone whitespace-nowrap">
              Nuestra canción
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes music-bar-anim {
          0%, 100% { height: 25%; opacity: 0.7; }
          50% { height: 100%; opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-music-bar-1 { animation: music-bar-anim 0.8s ease-in-out infinite; }
        .animate-music-bar-2 { animation: music-bar-anim 0.6s ease-in-out infinite 0.1s; }
        .animate-music-bar-3 { animation: music-bar-anim 0.7s ease-in-out infinite 0.2s; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `,
        }}
      />
    </div>
  );
};

export default MusicPlayer;
