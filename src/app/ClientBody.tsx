"use client";

import dynamicImport from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components
const DynamicProjectsSection = dynamicImport(() => import('@/components/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading projects...</div>,
  ssr: false
});

const DynamicVolunteeringSection = dynamicImport(() => import('@/components/VolunteeringSection').then(mod => ({ default: mod.VolunteeringSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading volunteering section...</div>,
  ssr: false
});

const DynamicContactSection = dynamicImport(() => import('@/components/ContactSection').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading contact section...</div>,
  ssr: false
});

export default function ClientBody() {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading content...</div>}>
      <DynamicProjectsSection />
      <DynamicVolunteeringSection />
      <DynamicContactSection />
    </Suspense>
  );
}
