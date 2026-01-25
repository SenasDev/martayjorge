import React, { useState, useEffect } from 'react';

const SaveTheDate: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <section className="bg-brand-stone pt-32 pb-12 px-4 text-center relative overflow-hidden border-b border-brand-gold/20">
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
            backgroundImage: 'radial-gradient(#BFA15F 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
        }}
      ></div>
      
      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
         <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-3 text-brand-gold/80 uppercase tracking-[0.3em] text-xs font-bold mb-2">
                <span className="w-8 h-px bg-brand-gold/50"></span>
                <span>Nos vamos a casar</span>
                <span className="w-8 h-px bg-brand-gold/50"></span>
             </div>

             <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Marta <span className="text-brand-gold italic font-light">&</span> Jorge
             </h1>
             
             <h2 className="text-2xl md:text-4xl font-serif text-brand-beige/90 mt-2 tracking-widest">
                20 • 06 • 2026
             </h2>

             {/* Countdown Timer */}
             <div className="flex gap-4 md:gap-8 mt-8 justify-center items-start text-brand-gold">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-text/60">Días</span>
                </div>
                <span className="text-2xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-text/60">Horas</span>
                </div>
                <span className="text-2xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-text/60">Min</span>
                </div>
                <span className="text-2xl md:text-4xl font-serif text-brand-text/30 pt-1">:</span>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl md:text-4xl font-serif font-bold tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-text/60">Seg</span>
                </div>
             </div>
             
             <p className="text-brand-text/60 text-sm mt-8 max-w-md mx-auto uppercase tracking-widest">
               Madrid
             </p>
         </div>
      </div>
    </section>
  );
};

export default SaveTheDate;