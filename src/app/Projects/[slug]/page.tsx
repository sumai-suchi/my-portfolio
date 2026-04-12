"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Cpu, 
  Layout, 
  Zap, 
  Shield, 
  Layers, 
  BarChart3, 
  ChevronRight 
} from 'lucide-react';
import Link from 'next/link';
import FeatureWalkthrough from '../FeatureWalkingThrough';

// FEATURE DATA
const features = [
  {
    icon: <Zap className="text-[#5252e2]" size={24} />,
    title: "Real-time Processing",
    desc: "Sub-millisecond data synchronization across all distributed nodes using custom socket protocols."
  },
  {
    icon: <Shield className="text-[#5252e2]" size={24} />,
    title: "Quantum Encryption",
    desc: "End-to-end security layers ensuring data integrity even in highly volatile network environments."
  },
  {
    icon: <Layers className="text-[#5252e2]" size={24} />,
    title: "Modular Scaling",
    desc: "A headless architecture that allows for infinite horizontal scaling without service downtime."
  },
  {
    icon: <BarChart3 className="text-[#5252e2]" size={24} />,
    title: "Advanced Analytics",
    desc: "Deep-learning models that predict system bottlenecks before they impact the end user."
  }
];

const ProjectDetails = () => {
  return (
    <main className="bg-[#0a0a0b] min-h-screen text-white pb-32 overflow-hidden">

      

      {/* 2. THEATRICAL HERO */}
      <section className="relative h-screen flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#5252e2] font-mono text-xs tracking-[0.5em] uppercase">Built // 2024</span>
            <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] mb-4">
              Lumina<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Intelligence</span>
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-10 mt-10">
              <Meta label="Service" value="AI Visualization" />
              <Meta label="Stack" value="Next.js / GLSL" />
              <Meta label="Role" value="Lead Developer" />
              <Meta label="Client" value="Experimental" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY BENTO (RESPONSIVE) */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 p-12 rounded-[3rem] flex flex-col justify-between group hover:bg-[#5252e2]/10 transition-colors">
              <Cpu className="text-[#5252e2] mb-12" size={40} />
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">The Core Engine</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Leveraging custom WebGL shaders to render 100k+ data points at 60fps. The goal was total immersion without compromising technical precision.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[3rem] group hover:border-[#5252e2]/50 transition-all">
                <Zap className="text-[#5252e2] mb-6" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Performance</h4>
                <p className="text-slate-500 text-sm italic">99 Score on Lighthouse Core Web Vitals.</p>
              </div>
              <div className="bg-[#5252e2] p-10 rounded-[3rem] text-white">
                <Layout className="mb-6" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Interface</h4>
                <p className="text-white/80 text-sm">Ultra-minimalist HUD inspired by aerospace telemetry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW: FEATURE SPOTLIGHT SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-y border-white/5 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="h-1 bg-[#5252e2]"
            />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Core <span className="text-transparent" style={{ WebkitTextStroke: '1px #5252e2' }}>Capabilities</span>
            </h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Technological Achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0b] p-12 md:p-16 hover:bg-white/[0.02] transition-colors group relative"
              >
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-[#5252e2]" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#5252e2]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#5252e2] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg max-w-sm">
                    {f.desc}
                  </p>
                </div>

                {/* Bottom Decorative Interaction Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#5252e2] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LARGE IMAGE BREAKOUT */}
      <section className="py-20">
        <div className="w-full overflow-hidden">
          <motion.div 
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 2 }}
            className="aspect-[21/9] w-full bg-slate-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000" 
              className="w-full h-full object-cover brightness-75" 
            />
          </motion.div>
        </div>
      </section>

      <section>
        <FeatureWalkthrough></FeatureWalkthrough>
      </section>

      {/* 6. THE PROCESS (VERTICAL STEPS) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-24">The Execution<span className="text-[#5252e2]">.</span></h2>
        
        <div className="space-y-32">
          <ProcessStep 
            number="01" 
            title="Logical Blueprint" 
            desc="Before code, we mapped the entire system on paper. Architecture first, syntax second." 
          />
          <ProcessStep 
            number="02" 
            title="Visual Synthesis" 
            desc="Crafting the dark-mode aesthetic. Every gray value was chosen to reduce eye strain for long-form monitoring sessions." 
          />
          <ProcessStep 
            number="03" 
            title="Stress Testing" 
            desc="Pushing the browser to its limits to ensure the dashboard remained fluid under high network load." 
          />
        </div>
      </section>
    </main>
  );
};

// HELPER COMPONENTS
const Meta = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-2">
    <p className="font-mono text-[10px] tracking-widest uppercase text-slate-500">{label}</p>
    <p className="font-bold text-lg uppercase tracking-tight">{value}</p>
  </div>
);

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-24 group">
    <span className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-[#5252e2] transition-colors duration-500 font-mono italic">
      {number}
    </span>
    <div className="border-l border-white/10 pl-8 md:pl-24 py-2">
      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{title}</h3>
      <p className="text-slate-500 text-xl leading-relaxed max-w-2xl">{desc}</p>
    </div>
  </div>
);

export default ProjectDetails;