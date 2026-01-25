import React, { useState, useEffect, useRef } from 'react';

// Using a romantic instrumental song ID
const YOUTUBE_VIDEO_ID = "gL4YwQnQ0bw"; // Example: "Canon in D" instrumental or similar

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          'playsinline': 1,
          'controls': 0,
          'loop': 1,
          'playlist': YOUTUBE_VIDEO_ID // Required for loop to work
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    return () => {
      // Cleanup if needed
    };
  }, []);

  const onPlayerReady = (event: any) => {
    setIsReady(true);
    // Note: Auto-play is restricted by browsers, user must interact first
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  if (!isReady) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div id="youtube-player" className="hidden"></div>
      <button 
        onClick={togglePlay}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 shadow-lg ${
          isPlaying 
            ? 'bg-brand-gold border-brand-gold text-white animate-pulse' 
            : 'bg-white/90 border-brand-gold/30 text-brand-stone hover:bg-brand-cream'
        }`}
      >
        <span className="material-symbols-outlined">
          {isPlaying ? 'music_note' : 'play_arrow'}
        </span>
        <span className="text-sm font-medium hidden sm:block">
          {isPlaying ? 'Reproduciendo' : 'Música de fondo'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;