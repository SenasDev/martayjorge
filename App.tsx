import React from 'react';
import Navbar from './components/Navbar';
import SaveTheDate from './components/SaveTheDate';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import InvitationSection from './components/InvitationSection';
import GallerySection from './components/GallerySection';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />

      <main className="flex-grow">
        <SaveTheDate />
        <HeroSection />
        <DetailsSection />
        <InvitationSection />
        <GallerySection />
        <RsvpSection />
      </main>

      <Footer />

      {/* Floating Widgets */}
      <MusicPlayer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;