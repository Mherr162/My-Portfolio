'use client';

import { useMemo, useEffect, useState } from 'react';
import { AnimatedSkillCard } from './AnimatedSkillCard';

interface Skill {
  name: string;
  type: string;
  logoPath: string;
}

interface InfiniteSkillLoopProps {
  skills: Skill[];
  speed?: number;
  direction?: 'left' | 'right';
}

export function InfiniteSkillLoop({
  skills,
  speed = 40,
  direction = 'left'
}: InfiniteSkillLoopProps) {
  // Create a duplicate set of skills to ensure smooth looping
  const duplicatedSkills = useMemo(() => [...skills, ...skills, ...skills], [skills]);

  // Use client-side only rendering to avoid hydration mismatches
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Convert speed value to CSS animation duration (higher speed = lower duration)
  const duration = 30 / (speed / 20);

  if (!isMounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <div className="w-full overflow-hidden relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg py-4 min-h-[100px]">
        <div className="flex gap-1">
          {/* Static placeholders during server rendering */}
          {skills.map((skill, index) => (
            <div
              key={`static-${skill.name}-${index}`}
              className="mx-1"
              style={{ minWidth: '80px', maxWidth: '80px' }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg py-4">
      <div
        className="flex gap-1"
        style={{
          animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${duration}s linear infinite`,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="mx-1"
          >
            <AnimatedSkillCard
              name={skill.name}
              type={skill.type}
              logoPath={skill.logoPath}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
