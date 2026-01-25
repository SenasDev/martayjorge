import React from 'react';

const SaveTheDate: React.FC = () => {
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
             
             <p className="text-brand-text/60 text-sm mt-4 max-w-md mx-auto">
               Madrid
             </p>
         </div>
      </div>
    </section>
  );
};

export default SaveTheDate;