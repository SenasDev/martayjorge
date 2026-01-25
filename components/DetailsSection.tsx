import React from 'react';
import { TimelineEvent } from '../types';

const DetailsSection: React.FC = () => {
  // Timeline events without individual calendar data
  const events: TimelineEvent[] = [
    {
      title: "Hora de encuentro",
      time: "20:00 - 20:30",
      location: "Café del Río",
      address: "Avenida de Portugal 1, Madrid",
      icon: "diversity_3"
    },
    {
      title: "Copa de bienvenida",
      time: "20:30 - 21:30",
      location: "Café del Río",
      address: "Terraza con vistas",
      icon: "celebration"
    },
    {
      title: "Cena tipo cocktail",
      time: "21:30 - 23:00",
      location: "Café del Río",
      address: "Salón Principal",
      icon: "restaurant"
    },
    {
      title: "Barra libre y baile",
      time: "23:00 - 02:00",
      location: "Pista de baile",
      address: "Hasta que nos duelan los pies",
      icon: "nightlife"
    }
  ];

  const mapLink = "https://www.google.com/maps/search/?api=1&query=Café+del+Río,+Avenida+de+Portugal+1,+Madrid";

  // Main Event Data for Calendar
  const mainEvent = {
    title: "Boda Marta & Jorge",
    location: "Café del Río",
    address: "Avenida de Portugal 1, Madrid",
    startIso: "20260620T200000",
    endIso: "20260621T020000",
    details: "¡Nos casamos! Os esperamos para celebrar en Café del Río."
  };

  const getGoogleCalendarUrl = () => {
    const details = `${mainEvent.details} ${mainEvent.address}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(mainEvent.title)}&dates=${mainEvent.startIso}/${mainEvent.endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(mainEvent.location)}&ctz=Europe/Madrid`;
  };

  const downloadIcs = () => {
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
    <section id="details" className="py-24 px-4 md:px-8 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-10 lg:sticky lg:top-24">
            <div className="space-y-6">
              <div>
                <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">El Programa</h3>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-stone leading-tight">
                  Una Fiesta <br/>Sin Protocolos
                </h2>
              </div>
              
              <p className="text-brand-text text-lg leading-relaxed max-w-lg">
                Queremos que sea una fiesta con 0 formalidades y protocolos, solo disfrutar y pasarlo bien. 
                Desde el atardecer hasta la madrugada, celebraremos juntos en Madrid Río.
              </p>

              {/* Date & Calendar Integration */}
              <div className="inline-flex items-center gap-4 bg-white border border-brand-gold/20 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-beige p-3 rounded-full text-brand-gold">
                   <span className="material-symbols-outlined text-2xl">event</span>
                </div>
                <div>
                   <p className="font-serif text-brand-stone font-bold text-lg">Sábado, 20 Junio 2026</p>
                   <div className="flex gap-3 text-xs font-bold uppercase tracking-wider text-brand-gold mt-1">
                      <a href={getGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-goldDark underline decoration-brand-gold/30 underline-offset-2">Google Calendar</a>
                      <span className="text-brand-gold/30">|</span>
                      <button onClick={downloadIcs} className="hover:text-brand-goldDark underline decoration-brand-gold/30 underline-offset-2">Outlook / iCal</button>
                   </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {events.map((evt, idx) => (
                <div key={idx} className="bg-white border border-brand-gold/10 p-6 rounded-xl hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 group shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-full bg-brand-beige border border-brand-gold/20 group-hover:border-brand-gold transition-colors text-brand-gold shrink-0">
                      <span className="material-symbols-outlined text-xl">{evt.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-brand-stone mb-1">{evt.title}</h4>
                      <p className="text-brand-gold font-medium mb-1 tracking-wide text-sm">{evt.time}</p>
                      <p className="text-brand-text text-sm leading-relaxed">{evt.location} • {evt.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-brand-gold/10">
               <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-3">Cómo llegar</h4>
               <ul className="space-y-2 text-brand-text text-sm">
                 <li className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-brand-gold">directions_subway</span>
                   Metro Príncipe Pío (Línea 10)
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-brand-gold">local_parking</span>
                   Parking de la EMT (Autovía del Suroeste, 66)
                 </li>
               </ul>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 w-full flex flex-col gap-8">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/10">
              <img 
                src="https://images.unsplash.com/photo-1545656188-4a5eb23b7625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Madrid Río Celebration"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Map Preview */}
            <div className="w-full bg-white rounded-2xl p-4 border border-brand-gold/10 shadow-lg">
              <div className="w-full h-80 rounded-xl bg-gray-100 relative overflow-hidden group cursor-pointer">
                 {/* Decorative Map Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569616850239-0f46cb76e225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')" }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={mapLink}
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/90 backdrop-blur text-brand-stone px-6 py-3 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white transition-colors border border-brand-gold/20 shadow-xl"
                  >
                    <span className="material-symbols-outlined text-brand-gold">map</span>
                    Abrir Café del Río
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;