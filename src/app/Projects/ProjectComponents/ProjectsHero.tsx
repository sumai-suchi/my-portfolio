"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#fcfcfd] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden">
      
      {/* FIXED FLOATING BACKGROUND TEXT */}
      <motion.div 
        initial={{ x: "-5%", y: "-50%" }}
        animate={{ 
          x: ["-5%", "5%", "-5%"], // Drifts left and right
          y: ["-52%", "-48%", "-52%"] // Gentle bobbing up and down
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-0 pointer-events-none opacity-[0.04] overflow-hidden whitespace-nowrap select-none z-0"
      >
        <h1 className="text-[30vw] font-black leading-none tracking-tighter">
          ARCHIVE ARCHIVE ARCHIVE
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-end gap-12 relative z-10">
        <div className="space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#5252e2] font-mono text-sm tracking-[0.3em] uppercase block"
          >
            Volume 01 // 2022—2024
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.8] uppercase"
          >
            Selected <br /> 
            <span className="inline-block" style={{ WebkitTextStroke: '1px #cbd5e1', color: 'transparent' }}>
                Artifacts.
            </span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:text-right flex flex-col items-start lg:items-end gap-6"
        >
          <p className="text-xl text-slate-500 font-medium max-w-md leading-relaxed">
            A curation of digital systems, high-precision interfaces, and scalable architectures designed to endure.
          </p>
          <div className="flex gap-4 items-center group cursor-pointer">
            <span className="font-bold text-sm tracking-widest uppercase text-slate-900">Scroll to Explore</span>
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="mt-24 border-t border-slate-200 pt-8 flex justify-between font-mono text-[10px] text-slate-400 tracking-widest uppercase relative z-10">
        <span>Curated Works</span>
        <span>(01 — 12)</span>
        <span>Filter: All Projects</span>
      </div>
    </section>
  );
};

export default ProjectsHero;

/** * Note: If you prefer using a global CSS class for the outline instead of the inline style:
 * * .text-outline-slate {
 * -webkit-text-stroke: 1px #cbd5e1;
 * color: transparent;
 * }
 */