"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, MousePointer2 } from 'lucide-react';
import { LiaGithub, LiaLinkedin } from 'react-icons/lia';

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#fcfcfd] overflow-hidden pt-28 pb-16 px-6 md:px-12 lg:px-24">
      
      {/* 1. FLOATING AMBIENT ORBS (Animated Background) */}
      <motion.div 
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#e0f2fe] blur-[120px] rounded-full opacity-60 z-0" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#5252e2]/10 blur-[100px] rounded-full z-0" 
      />

      {/* 2. KINETIC DRIFTING TEXT */}
      <motion.div 
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] z-0"
      >
        <h2 className="text-[25vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-slate-950">
          DEVELOPER • DESIGNER •
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#5252e2]" />
              <p className="text-[#5252e2] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">
                Digital Architect // 2026
              </p>
            </div>
            
            <h1 className="text-7xl md:text-[8.5vw] font-black tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Sumaiya <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0f172a' }}>
                Akter
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Engineering <span className="text-slate-950 font-bold italic">bold experiences</span> through clean code and intentional design. Focused on high-performance web systems.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap items-center gap-8"
          >
            <button className="group relative bg-[#0f172a] text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[#5252e2]/20">
              <div className="absolute inset-0 bg-[#5252e2] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3 text-xs font-bold tracking-widest uppercase">
                Explore Work <ArrowUpRight size={18} />
              </span>
            </button>

            <div className="flex gap-4">
               <SocialLink icon={<LiaLinkedin size={18}/>} href="#" />
               <SocialLink icon={<LiaGithub size={18}/>} href="#" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT: FLOATING IMAGE BOX */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] w-full max-w-[420px] mx-auto group"
          >
            {/* Main Image Frame */}
            <div className="relative w-full h-full overflow-hidden rounded-[3rem] bg-slate-200 shadow-2xl border-[12px] border-white">
              <img 
                src="/MyImage.jpeg" 
                alt="Sumaiya Akter"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5252e2]/20 to-transparent" />
            </div>

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ rotate: [0, 5, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#5252e2]">
                   <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Status</p>
                  <p className="text-xs font-black text-slate-900 uppercase">Designing Logic</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Grid Behind */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#5252e2] rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href} 
    className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#5252e2] hover:shadow-lg hover:border-transparent transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;