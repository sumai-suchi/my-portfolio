"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
// 1. Import the Link component
import Link from 'next/link';

const projectList = [
  { id: "01", slug: "lumina-intelligence", title: "Lumina Intelligence", category: "AI Analytics", year: "2024", image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" },
  { id: "02", slug: "aetherial-os", title: "Aetherial OS", category: "Kernel Design", year: "2024", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
  { id: "03", slug: "nova-dashboard", title: "Nova Dashboard", category: "Fintech", year: "2023", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" },
  { id: "04", slug: "echo-protocol", title: "Echo Protocol", category: "Web3/Node", year: "2023", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
];

const ProjectGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-[#0a0a0b] py-24 md:py-44 px-4 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5252e2]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <span className="text-[#5252e2] font-mono text-xs tracking-[0.3em] uppercase">Selection 001—004</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Selected Work</h2>
          </div>
          <p className="hidden md:block text-slate-500 font-medium text-right max-w-[200px] leading-tight">
            Digital craftsmanship at the intersection of design and code.
          </p>
        </div>

        <div className="flex flex-col">
          {projectList.map((project, index) => (
            // 2. Wrap the motion.div in a Link component
            <Link key={project.id} href={`/Projects/${project.slug}`}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/5 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between cursor-none"
              >
                <div className="flex items-center gap-6 md:gap-12 relative z-20">
                  <span className="font-mono text-xs md:text-sm text-slate-600 tabular-nums">
                    [{project.id}]
                  </span>
                  <h3 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white/30 group-hover:text-white transition-colors duration-700 uppercase leading-none">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-12 mt-6 md:mt-0 relative z-20">
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-[#5252e2] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                      {project.category}
                    </span>
                    <span className="text-slate-600 font-mono text-[10px]">{project.year}</span>
                  </div>
                  
                  <div className="relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#5252e2] group-hover:border-[#5252e2] transition-all duration-500">
                    <ArrowUpRight 
                      className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" 
                      size={28} 
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
           <button className="group relative flex items-center gap-4 text-white/50 hover:text-white transition-colors py-4">
              <span className="text-xs font-bold tracking-[0.4em] uppercase">Explore Full Archive</span>
              <div className="p-2 rounded-full border border-white/10 group-hover:rotate-90 transition-transform duration-500">
                <Plus size={16} />
              </div>
           </button>
        </div>
      </div>

      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 10 }}
            className="fixed pointer-events-none z-50 w-[280px] h-[380px] md:w-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 hidden lg:block"
          >
            <motion.img
              key={hoveredIndex}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={projectList[hoveredIndex].image}
              alt="Project Preview"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGrid;