import React, { useState, useEffect } from "react";

const SaveTheDate: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Target date: June 20, 2026 at 20:00:00 (Event Start)
    const targetDate = new Date("2026-06-20T20:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
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
    <section className="bg-brand-stone pt-12 md:pt-16 pb-5 md:pb-7 px-4 text-center relative overflow-hidden border-b border-brand-gold/20">
      {/* Decorative pattern with parallax */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-75"
        style={{
          backgroundImage: "radial-gradient(#BFA15F 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          transform: `translateY(${patternOffset}px)`,
        }}
      ></div>

      {/* Floating decorative circles */}
      <div className="absolute top-10 left-[5%] w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-[5%] w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-brand-gold/80 uppercase tracking-[0.25em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-bold mb-0.5 animate-slide-up">
            <span className="w-5 md:w-6 h-px bg-brand-gold/50"></span>
            <span>Nos vamos a casar</span>
            <span className="w-5 md:w-6 h-px bg-brand-gold/50"></span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Marta <span className="text-brand-gold italic font-light">&</span>{" "}
            Jorge
          </h2>

          <h3
            className="text-sm sm:text-base md:text-xl font-serif text-brand-beige/90 mt-0.5 tracking-[0.2em] md:tracking-widest animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            20 • 06 • 2026
          </h3>

          {/* Countdown Timer */}
          <div
            className="flex gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-4 justify-center items-start text-brand-gold animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col items-center gap-0 min-w-[40px] sm:min-w-[50px]">
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tabular-nums">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-brand-text/60">
                Días
              </span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-serif text-brand-text/30 pt-0.5">
              :
            </span>
            <div className="flex flex-col items-center gap-0 min-w-[40px] sm:min-w-[50px]">
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-brand-text/60">
                Horas
              </span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-serif text-brand-text/30 pt-0.5">
              :
            </span>
            <div className="flex flex-col items-center gap-0 min-w-[40px] sm:min-w-[50px]">
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-brand-text/60">
                Min
              </span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-serif text-brand-text/30 pt-0.5">
              :
            </span>
            <div className="flex flex-col items-center gap-0 min-w-[40px] sm:min-w-[50px]">
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-brand-text/60">
                Seg
              </span>
            </div>
          </div>

          <p
            className="text-brand-text/60 text-[9px] md:text-xs mt-3 md:mt-4 max-w-md mx-auto uppercase tracking-[0.2em] md:tracking-widest animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Madrid
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
