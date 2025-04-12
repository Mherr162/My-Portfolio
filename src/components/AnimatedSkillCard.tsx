'use client';

import { useState, useEffect } from 'react';

interface AnimatedSkillCardProps {
  name: string;
  type: string;
  logoPath: string;
  index: number;
}

export function AnimatedSkillCard({ name, type, logoPath, index }: AnimatedSkillCardProps) {
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Only enable client-side effects after mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Determine animation class on client-side only
  const animClass = isClient ? `skill-card-${index % 3}` : '';

  return (
    <div
      className={`relative bg-card hover:bg-neutral-800 rounded-lg px-3 py-4 transition-all duration-300 hover:scale-105 flex flex-col items-center ${animClass}`}
      style={{
        minWidth: '80px',
        maxWidth: '80px',
      }}
      onMouseEnter={() => isClient && setIsHovered(true)}
      onMouseLeave={() => isClient && setIsHovered(false)}
    >
      <div className="h-10 w-10 relative mb-2 flex items-center justify-center">
        <img
          src={logoPath}
          alt={`${name} logo`}
          className={`w-8 h-8 transition-all duration-300 ${isClient && isHovered ? 'scale-110' : ''}`}
        />
      </div>
      <h4 className="text-xs font-medium text-center truncate w-full">{name}</h4>
    </div>
  );
}
