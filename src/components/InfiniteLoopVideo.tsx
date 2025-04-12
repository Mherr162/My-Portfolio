'use client';

import { useEffect, useRef, useState } from 'react';

interface InfiniteLoopVideoProps {
  src: string;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

export function InfiniteLoopVideo({ src, className = '', onPlay, onPause }: InfiniteLoopVideoProps) {
  // Use client-side only state to avoid hydration mismatches
  const [isClient, setIsClient] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mark that we're on the client to enable client-only features
    setIsClient(true);

    // Attempt to play the video only on the client side
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error('Video autoplay failed:', error);
        // Don't set error state for autoplay issues, as browsers may block autoplay
      });
    }
  }, []);

  const handleError = () => {
    setVideoError(true);
  };

  // Placeholder UI that's shown on server and when video errors
  const placeholderUI = (
    <div className={`video-placeholder relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-4">
          <path d="m10 9 5 3-5 3z" />
          <rect width="20" height="14" x="2" y="5" rx="2" />
        </svg>
        <h3 className="text-xl font-medium mb-2">Video Coming Soon</h3>
        <p className="text-muted-foreground text-sm">
          A video showcasing my journey from electrician to software developer will be displayed here. Stay tuned!
        </p>
      </div>
    </div>
  );

  // Only show the actual video player on the client side and when there's no error
  if (!isClient || videoError) {
    return placeholderUI;
  }

  return (
    <div className={`video-container relative w-full overflow-hidden rounded-lg ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onError={handleError}
        onPlay={onPlay}
        onPause={onPause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
