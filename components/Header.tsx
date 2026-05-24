'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Nadim</span>
            <span className="text-primary">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.label}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              className="hidden md:flex items-center justify-center px-5 py-2 rounded-xl bg-white text-black text-sm font-medium hover:scale-[1.03] transition-transform"
            >
              Resume
            </a>

            {/* Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="md:hidden mt-3 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-5"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="mt-2 w-full flex items-center justify-center bg-white text-black py-3 rounded-xl font-medium"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}