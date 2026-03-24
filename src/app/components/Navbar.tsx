import { useState, useEffect } from 'react';
import { Menu, X, Cloud } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-gray-800/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Cloud className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Vinicius Lemos
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-colors shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors block"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}