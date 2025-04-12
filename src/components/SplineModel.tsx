'use client';

import { useEffect, useState } from 'react';
import { InteractiveBackground } from './InteractiveBackground';

export function SplineModel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load Spline in browser environment
    if (typeof window === 'undefined') return;

    import('@splinetool/runtime').then(({ Application }) => {
      const canvas = document.getElementById('spline-canvas') as HTMLCanvasElement;
      if (canvas) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode')
          .then(() => {
            setIsLoaded(true);
            console.log('Spline scene loaded');
          })
          .catch((error) => {
            console.error('Error loading Spline scene:', error);
          });
      }
    }).catch((error) => {
      console.error('Error importing Spline runtime:', error);
    });
  }, []);

  return (
    <div className="spline-container absolute inset-0">
      <InteractiveBackground />
      <div className="relative z-10 w-full h-full">
        <canvas
          id="spline-canvas"
          className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
        />
        {!isLoaded && (
          <div className="loading absolute inset-0 flex items-center justify-center">
            <div className="loading-spinner h-12 w-12 border-4 border-t-white border-neutral-800 rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
