"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Zap, 
  Terminal, 
  Cloud, 
  ShieldCheck,
  Binary
} from 'lucide-react';

const stackData = [
  {
    category: "Interface & Experience",
    description: "Crafting fluid, responsive UIs with modern utility-first frameworks.",
    tools: [
      { name: "Next.js", level: "Advanced", icon: <Layers size={20} /> },
      { name: "React", level: "Expert", icon: <Code2 size={20} /> },
      { name: "Tailwind CSS", level: "Expert", icon: <Zap size={20} /> },
      { name: "DaisyUI", level: "Advanced", icon: <Layers size={20} /> },
    ]
  },
  {
    category: "Infrastructure & Data",
    description: "Scalable backend architecture and secure data modeling.",
    tools: [
      { name: "Node.js", level: "Advanced", icon: <Terminal size={20} /> },
      { name: "Express.js", level: "Advanced", icon: <Cpu size={20} /> },
      { name: "MongoDB", level: "Advanced", icon: <Database size={20} /> },
      { name: "Mongoose", level: "Advanced", icon: <Database size={20} /> },
    ]
  },
  {
    category: "Ecosystem & Logic",
    description: "Cloud deployment, authentication, and algorithmic foundations.",
    tools: [
      { name: "Firebase", level: "Advanced", icon: <Cloud size={20} /> },
      { name: "Better Auth", level: "Expert", icon: <ShieldCheck size={20} /> },
      { name: "DSA", level: "Core", icon: <Binary size={20} /> },
      { name: "Vercel / Netlify", level: "Expert", icon: <Zap size={20} /> },
      { name: "Cloudinary", level: "Advanced", icon: <Cloud size={20} /> },
    ]
  }
];

const StackPage = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION - REMAINS DARK & DRAMATIC */}
      <section className="relative h-[70vh] flex items-center bg-[#0a0a0b] text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[#5252e2] font-mono text-xs tracking-[0.5em] uppercase">Technical Index // 2026</span>
            <h1 className="text-6xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8]">
              The <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Arsenal</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              A breakdown of the tools and logic I use to build scalable, high-performance digital products.
            </p>
          </motion.div>
        </div>
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#5252e2]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      </section>

      {/* 2. THE STACK SECTIONS - TRANSITION TO WHITE */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {stackData.map((group, idx) => (
            <div key={idx} className="mb-32 last:mb-0">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-12 gap-6">
                <div className="space-y-4">
                  <span className="text-[#5252e2] font-mono text-[10px] font-bold tracking-widest uppercase italic">Module_0{idx + 1}</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">{group.category}</h2>
                </div>
                <p className="text-slate-500 max-w-sm font-medium leading-tight">
                  {group.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.tools.map((tool, tIdx) => (
                  <motion.div
                    key={tIdx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-16">
                      <div className="p-3 bg-white rounded-xl text-slate-400 group-hover:text-[#5252e2] group-hover:shadow-inner transition-colors">
                        {tool.icon}
                      </div>
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors italic">
                        {tool.level}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold tracking-tighter uppercase text-slate-900">{tool.name}</h3>
                      <div className="mt-4 flex gap-1">
                        <div className="h-1 w-8 bg-[#5252e2]" />
                        <div className="h-1 w-2 bg-slate-200 group-hover:bg-[#5252e2]/30 transition-colors" />
                        <div className="h-1 w-2 bg-slate-200" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LOGIC & FOUNDATION FOOTER */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                <Binary size={20} className="text-[#5252e2]" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-tight text-slate-900">Algorithm Proficiency</h4>
                <p className="text-xs text-slate-500 font-mono uppercase">Strong Foundation in Data Structures</p>
              </div>
           </div>
           
           <div className="flex gap-12 text-center md:text-right">
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Architecture</p>
                <p className="font-bold uppercase text-sm">MVC / Microservices</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">DevOps</p>
                <p className="font-bold uppercase text-sm">CI/CD Pipelines</p>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default StackPage;