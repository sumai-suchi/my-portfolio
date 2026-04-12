"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Your exact navLink data
  const navLinks = ['Projects', 'Stack', 'Experience', 'ContactMe'];

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-10 transition-all duration-500">
        <div 
          className={`max-w-8xl mx-auto h-16 md:h-20 flex items-center justify-between px-6 md:px-10 rounded-full transition-all duration-500 ${
            scrolled 
            ? "bg-white/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
            : "bg-transparent"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="relative z-[110] flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#5252e2] rounded-full flex items-center justify-center rotate-0 group-hover:rotate-45 transition-transform duration-500">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">
              CURATOR<span className="text-[#5252e2]">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item}`} 
                    className="relative px-5 py-2 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 hover:text-[#5252e2] transition-colors group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#5252e2] transition-all duration-300 group-hover:w-1/2 -translate-x-1/2" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTION AREA */}
          <div className="flex items-center gap-4 relative z-[110]">
            <Link 
              href="/resume.pdf" 
              className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest hover:bg-[#5252e2] hover:scale-105 transition-all uppercase"
            >
              Resume <ArrowRight size={14} />
            </Link>
            
            {/* Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE CINEMATIC MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-slate-900 z-[95] flex flex-col justify-center px-8 md:hidden"
          >
            <div className="space-y-12">
              <p className="font-mono text-[10px] text-[#5252e2] uppercase tracking-[0.5em] mb-4">Navigation</p>
              
              <ul className="space-y-6">
                {navLinks.map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <Link 
                      href={`/${item}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-end gap-4"
                    >
                      <span className="text-slate-700 font-mono text-xl mb-2">0{i+1}</span>
                      <span className="text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#5252e2] transition-colors">
                        {item}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-10 border-t border-white/10"
              >
                <div className="flex gap-8">
                  <a href="#" className="text-[10px] font-bold text-white uppercase tracking-widest hover:text-[#5252e2]">LinkedIn</a>
                  <a href="#" className="text-[10px] font-bold text-white uppercase tracking-widest hover:text-[#5252e2]">GitHub</a>
                  <a href="#" className="text-[10px] font-bold text-white uppercase tracking-widest hover:text-[#5252e2]">Twitter</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;