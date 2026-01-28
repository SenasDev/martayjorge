import React, { useState } from 'react';
import { useInView } from '../hooks/useParallax';

const InvitationSection: React.FC = () => {
    const { ref: sectionRef, isInView: isVisible } = useInView({ threshold: 0.1 });
    const [isPlaying, setIsPlaying] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
        // Hide overlay after 5 seconds of playing
        setTimeout(() => {
            setShowOverlay(false);
        }, 5000);
    };

    const handlePause = () => {
        setIsPlaying(false);
        setShowOverlay(true);
    };

    return (
        <section id="invitacion" ref={sectionRef} className="py-20 bg-brand-beige border-t border-brand-gold/10 overflow-hidden relative">
            <div className="max-w-5xl mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">La Invitación</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-stone mb-6">Nuestra Historia en Video</h2>
                    <p className="text-brand-text max-w-2xl mx-auto text-lg">
                        Queríamos hacer algo especial y único. Aquí tenéis el resultado de horas "peleando" con la Inteligencia Artificial.
                    </p>
                </div>

                <div className={`relative rounded-2xl overflow-hidden group shadow-2xl shadow-brand-gold/10 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="w-full bg-black rounded-2xl overflow-hidden relative aspect-video md:aspect-auto">
                        <video
                            src="/videoboda.mp4"
                            controls
                            className="w-full h-auto max-h-[80vh] mx-auto block"
                            poster="https://images.unsplash.com/photo-1519225448526-0a09daa3124c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                            onPlay={handlePlay}
                            onPause={handlePause}
                        >
                            Tu navegador no soporta el tag de video.
                        </video>

                        {/* Always visible badge */}
                        <div className={`absolute top-4 right-4 z-10 pointer-events-none transition-opacity duration-500 ${!showOverlay && isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-brand-gold/20">
                                <span className="flex items-center gap-2 text-brand-stone font-bold text-[10px] md:text-xs uppercase tracking-widest leading-none">
                                    <span className="material-symbols-outlined text-brand-gold text-sm md:text-base">smart_toy</span>
                                    Bloopers IA
                                </span>
                            </div>
                        </div>

                        {/* Bottom Overlay that fades out */}
                        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8 pointer-events-none transition-opacity duration-1000 ${!showOverlay && isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="text-white">
                                <h3 className="text-xl md:text-2xl font-serif mb-1">Cuando la IA intenta ayudar...</h3>
                                <p className="text-white/90 text-xs md:text-sm">Nuestros intentos fallidos (y graciosos) de crear la invitación perfecta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvitationSection;
