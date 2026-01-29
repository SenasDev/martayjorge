import React, { useState } from "react";

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with real numbers
  const contacts = [
    { name: "Marta", number: "34607445402", label: "La Novia" },
    { name: "Jorge", number: "34659796698", label: "El Novio" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100 mb-2" : "scale-0 opacity-0 h-0 overflow-hidden"}`}
      >
        <div className="bg-brand-stone text-white px-4 py-3 rounded-xl shadow-xl text-center mb-1 max-w-[200px]">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">
            ¿Dudas o pánicos?
          </p>
          <p className="text-sm font-serif italic text-brand-gold">
            "Escríbenos antes de que nos arrepintamos"
          </p>
        </div>

        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={`https://wa.me/${contact.number}?text=${encodeURIComponent("¡Hola! Os escribo por la invitación de vuestra boda...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white text-brand-stone px-5 py-3.5 rounded-2xl shadow-xl hover:bg-brand-beige transition-all group active:scale-95 border border-brand-gold/10"
          >
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide">
                {contact.name}
              </span>
              <span className="text-[10px] uppercase tracking-tight text-gray-400 group-hover:text-brand-gold transition-colors">
                {contact.label}
              </span>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WA"
              className="w-7 h-7"
            />
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-500 relative ${
          isOpen
            ? "bg-brand-stone rotate-90"
            : "bg-brand-gold hover:bg-brand-goldDark scale-105"
        }`}
      >
        <span className="material-symbols-outlined text-white text-3xl">
          {isOpen ? "close" : "forum"}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-stone rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
