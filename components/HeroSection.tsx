import React from 'react';

const HeroSection: React.FC = () => {
  // Calendar Event Details
  const mainEvent = {
    title: "Boda Marta & Jorge",
    location: "Café del Río",
    address: "Avenida de Portugal 1, Madrid",
    startIso: "20260620T200000",
    endIso: "20260621T020000",
    details: "¡Nos casamos! Os esperamos para celebrar en Café del Río."
  };

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(mainEvent.title)}&dates=${mainEvent.startIso}/${mainEvent.endIso}&details=${encodeURIComponent(mainEvent.details + " " + mainEvent.address)}&location=${encodeURIComponent(mainEvent.location)}&ctz=Europe/Madrid`;

  const downloadIcs = (e: React.MouseEvent) => {
    e.preventDefault();
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${document.location.href}
DTSTART;TZID=Europe/Madrid:${mainEvent.startIso}
DTEND;TZID=Europe/Madrid:${mainEvent.endIso}
SUMMARY:${mainEvent.title}
DESCRIPTION:${mainEvent.details}
LOCATION:${mainEvent.location}, ${mainEvent.address}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'boda_marta_y_jorge.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="relative w-full h-[85vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://image.ungrandjour.com/eyJidWNrZXQiOiJwcm9kdWN0aW9uLXVuZ3JhbmRqb3VyIiwia2V5Ijoic2xjczR6Y2Nqa3o0cXlxa3p5cHpzMm93dzZ4eCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwMH0sInRvRm9ybWF0IjoianBnIn19')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Gradient at bottom for smooth transition and button readability */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Centered Title */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto animate-fade-in -mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight drop-shadow-2xl opacity-90">
          Marta <span className="italic text-brand-gold font-light">&</span> Jorge
        </h1>
      </div>

      {/* Buttons Positioned at Bottom (20px from container) */}
      <div className="absolute bottom-[20px] left-0 w-full z-30 px-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
          <a
            href="#rsvp"
            className="w-full sm:w-auto min-w-[200px] group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-brand-gold px-8 py-4 text-white font-bold tracking-widest transition-all hover:bg-brand-goldDark hover:shadow-[0_0_20px_rgba(214,192,150,0.4)] shadow-lg"
          >
            <span className="relative z-10">CONFIRMAR</span>
          </a>

          <div className="relative group w-full sm:w-auto">
            <button
              className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 bg-white/20 backdrop-blur-md px-8 py-4 text-white font-bold tracking-widest transition-all hover:bg-white/30 hover:border-white shadow-lg"
            >
              <span className="material-symbols-outlined text-xl">calendar_today</span>
              <span>CALENDARIO</span>
            </button>

            {/* Dropdown for Calendar Options (opens upwards) */}
            <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-2 w-full bg-white rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom">
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-brand-stone hover:bg-brand-beige hover:text-brand-gold transition-colors text-left font-medium"
              >
                Google Calendar
              </a>
              <button
                onClick={downloadIcs}
                className="block w-full px-4 py-3 text-sm text-brand-stone hover:bg-brand-beige hover:text-brand-gold transition-colors text-left font-medium border-t border-gray-100"
              >
                Outlook / Apple (iCal)
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;