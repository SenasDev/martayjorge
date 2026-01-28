import React, { useEffect, useRef, useState } from 'react';

const GallerySection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-brand-cream border-t border-brand-gold/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Recuerdos</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-stone mb-6">Capturando Nuestro Día</h2>
                    <p className="text-brand-text max-w-2xl mx-auto text-lg">
                        Vuestras sonrisas y recuerdos hacen que este día sea eterno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]">
                    {/* Large Featured Image - Span 8 columns */}
                    <div className={`md:col-span-12 lg:col-span-8 relative rounded-2xl overflow-hidden group shadow-lg shadow-brand-gold/5 transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1519225448526-0a09daa3124c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                            alt="Couple"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                            <div className="text-white transform translate-y-4 md:translate-y-0 transition-transform">
                                <h3 className="text-2xl font-serif mb-1">Sesión Pre-boda</h3>
                                <p className="text-white/80 text-sm uppercase tracking-wider">El Retiro, Madrid</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box - Span 4 columns */}
                    <div className={`md:col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 border border-brand-gold/20 flex flex-col justify-center items-center text-center group hover:border-brand-gold transition-all duration-1000 delay-300 shadow-xl shadow-brand-gold/5 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-3xl">photo_camera</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-stone mb-3 font-serif">Álbum Colaborativo</h3>
                        <p className="text-brand-text text-sm mb-6 leading-relaxed">Sube tus fotos del evento aquí.</p>
                        <a
                            href="https://photos.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-gold font-bold uppercase text-xs tracking-widest border-b border-brand-gold/30 hover:border-brand-gold pb-1 transition-colors hover:text-brand-goldDark"
                        >
                            Abrir Google Photos
                        </a>
                    </div>

                    {/* Secondary Image - Span 4 columns (formerly Wide Image reused differently to fill grid) */}
                    <div className={`md:col-span-6 lg:col-span-4 relative rounded-2xl overflow-hidden group shadow-lg shadow-brand-gold/5 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                            alt="Rings"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Wide Image - Span 8 columns */}
                    <div className={`md:col-span-12 lg:col-span-8 relative rounded-2xl overflow-hidden group shadow-lg shadow-brand-gold/5 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                            alt="Celebration"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;