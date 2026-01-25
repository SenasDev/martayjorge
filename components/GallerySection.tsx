import React from 'react';

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Recuerdos</span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-stone mb-6">Capturando Nuestro Día</h2>
                <p className="text-brand-text max-w-2xl mx-auto">
                    Vuestras sonrisas y recuerdos hacen que este día sea eterno.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* Large Featured Image */}
                 <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden group shadow-lg shadow-brand-gold/5">
                     <img 
                        src="https://images.unsplash.com/photo-1519225448526-0a09daa3124c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80" 
                        alt="Couple" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                         <div className="text-white">
                             <h3 className="text-2xl font-serif mb-2">Sesión Pre-boda</h3>
                             <p className="text-gray-200 text-sm">El Retiro, Madrid</p>
                         </div>
                     </div>
                 </div>

                 {/* Secondary Image */}
                 <div className="relative aspect-square md:aspect-auto lg:aspect-auto rounded-xl overflow-hidden group shadow-lg shadow-brand-gold/5">
                     <img 
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                        alt="Rings" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                 </div>

                 {/* CTA Box (Google Photos Integration) */}
                 <div className="bg-white rounded-xl p-8 border border-brand-gold/20 flex flex-col justify-center items-center text-center group hover:border-brand-gold transition-all shadow-lg shadow-brand-gold/5">
                     <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                         <span className="material-symbols-outlined text-3xl">photo_camera</span>
                     </div>
                     <h3 className="text-xl font-bold text-brand-stone mb-2">Álbum Colaborativo</h3>
                     <p className="text-brand-text text-sm mb-6">Sube tus fotos del evento aquí para que no perdamos ningún detalle.</p>
                     <a 
                       href="https://photos.google.com" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-brand-gold font-bold uppercase text-xs tracking-widest border-b border-brand-gold/30 hover:border-brand-gold pb-1 transition-colors"
                     >
                         Abrir Google Photos
                     </a>
                 </div>
                 
                 <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden group shadow-lg shadow-brand-gold/5">
                     <img 
                        src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                        alt="Celebration" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                 </div>
             </div>
        </div>
    </section>
  );
};

export default GallerySection;