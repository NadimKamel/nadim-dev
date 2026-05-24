'use client';

import { Header } from '@/components/Header';
import { GlowBackground } from '@/components/GlowBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GlowBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
