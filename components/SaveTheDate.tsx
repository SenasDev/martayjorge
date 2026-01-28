import React, { useState, useEffect } from 'react';

const SaveTheDate: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Target date: June 20, 2026 at 20:00:00 (Event Start)
    const targetDate = new Date('2026-06-20T20:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Stop timer if date passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Parallax effect for background pattern
  const patternOffset = scrollY * 0.1;

  return (
    <section className="bg-brand-stone pt-28 md:pt-32 pb-10 md:pb-12 px-4 text-center relative overflow-hidden border-b border-brand-gold/20">
      {/* Decorative pattern with parallax */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-75"
        style={{
          backgroundImage: 'radial-gradient(#BFA15F 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          transform: `translateY(${patternOffset}px)`
        }}
      ></div>

      {/* Floating decorative circles */}
      <div className="absolute top-10 left-[5%] w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-[5%] w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-brand-gold/80 uppercase tracking-[0.25em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold mb-1 md:mb-2 animate-slide-up">
            <span className="w-6 md:w-8 h-px bg-brand-gold/50"></span>
            <span>Nos vamos a casar</span>
            <span className="w-6 md:w-8 h-px bg-brand-gold/50"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Marta <span className="text-brand-gold italic font-light">&</span> Jorge
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-brand-beige/90 mt-1 md:mt-2 tracking-[0.2em] md:tracking-widest animate-slide-up" style={{ animationDelay: '0.2s' }}>
            20 • 06 • 2026
          </h2>

          {/* Countdown Timer */}
          <div className="flex gap-3 sm:gap-6 md:gap-8 mt-6 md:mt-8 justify-center items-start text-brand-gold animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center gap-0.5 md:gap-1 min-w-[60px] sm:min-w-[70px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-brand-text/60">Días</span>
            </div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
            <div className="flex flex-col items-center gap-0.5 md:gap-1 min-w-[60px] sm:min-w-[70px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-brand-text/60">Horas</span>
            </div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
            <div className="flex flex-col items-center gap-0.5 md:gap-1 min-w-[60px] sm:min-w-[70px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-brand-text/60">Min</span>
            </div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
            <div className="flex flex-col items-center gap-0.5 md:gap-1 min-w-[60px] sm:min-w-[70px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-brand-text/60">Seg</span>
            </div>
          </div>

          <p className="text-brand-text/60 text-xs md:text-sm mt-6 md:mt-8 max-w-md mx-auto uppercase tracking-[0.2em] md:tracking-widest animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Madrid
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;