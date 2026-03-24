import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function PortfolioPage() {
  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}