import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import ClientBody from './ClientBody';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ClientBody />
      <Footer />
    </main>
  );
}
