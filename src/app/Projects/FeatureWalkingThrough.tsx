"use client";

import React from 'react';
import { motion } from 'framer-motion';

const featureSnapshots = [
  {
    id: "01",
    title: "Neural Network Mapper",
    description: "A high-performance visual engine that maps complex microservices into a human-readable neural graph. It allows engineers to trace request flows across 50+ clusters in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200", // Replace with your project screenshot
    tags: ["WebGL", "Real-time", "D3.js"]
  },
  {
    id: "02",
    title: "Automated Bottleneck Detection",
    description: "Our proprietary AI agent scans the entire infrastructure to identify latency spikes before they reach the client. The dashboard highlights troubled nodes with high-contrast visual cues.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200", // Replace with your project screenshot
    tags: ["TensorFlow", "Node.js", "Redis"]
  }
];

const FeatureWalkthrough = () => {
  return (
    <section className="py-32 bg-[#0a0a0b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Title */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Inside the <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Engine</span>
          </h2>
          <div className="w-24 h-1 bg-[#5252e2]" />
        </div>

        {/* Feature Rows */}
        <div className="space-y-40 md:space-y-64">
          {featureSnapshots.map((feature, index) => (
            <div 
              key={feature.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Snapshot Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-3/5 group"
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                  {/* Browser-style Top Bar */}
                  <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Glassmorphic Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#5252e2]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-2/5 space-y-8"
              >
                <span className="font-mono text-[#5252e2] text-sm tracking-[0.4em] font-bold">
                  FUNCTIONAL MODULE {feature.id}
                </span>
                
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {feature.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureWalkthrough;