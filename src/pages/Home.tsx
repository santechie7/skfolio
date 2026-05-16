import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import BackendSkills from '../components/sections/BackendSkills';
import Architecture from '../components/sections/Architecture';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import APIShowcase from '../components/sections/APIShowcase';
import DevOps from '../components/sections/DevOps';
import GithubStats from '../components/sections/GithubStats';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BackendSkills />
      <Architecture />
      <Experience />
      <Projects />
      <APIShowcase />
      <DevOps />
      <GithubStats />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}
