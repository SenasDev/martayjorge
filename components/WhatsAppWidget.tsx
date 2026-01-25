import React, { useState } from 'react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with real numbers
  const contacts = [
    { name: "Marta", number: "34123456789", label: "Novia" },
    { name: "Jorge", number: "34987654321", label: "Novio" }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 h-0'}`}>
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={`https://wa.me/${contact.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-green-700 px-4 py-3 rounded-xl shadow-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col items-end">
              <span className="font-bold text-sm">{contact.name}</span>
              <span className="text-xs text-gray-500">{contact.label}</span>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-8 h-8" />
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gray-700 rotate-90' : 'bg-[#25D366] hover:scale-110'
        }`}
      >
        <span className="material-symbols-outlined text-white text-3xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
