"use client";

import React, { useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Cpu, Globe, Zap } from 'lucide-react';

// 1. Types for our Expertise items
interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  size: "small" | "large";
}

const expertise: ExpertiseItem[] = [
  {
    title: "Scalable Architecture",
    description: "Designing systems that handle 10k+ concurrent users with zero latency spikes.",
    icon: <Cpu className="text-[#5252e2]" size={32} />,
    tags: ["Microservices", "Docker", "AWS"],
    size: "large",
  },
  {
    title: "Performance First",
    description: "Achieving 100/100 Lighthouse scores through aggressive optimization.",
    icon: <Zap className="text-[#5252e2]" size={32} />,
    tags: ["Next.js", "Vercel"],
    size: "small",
  },
  {
    title: "Global Distribution",
    description: "Deploying edge-ready applications that serve content globally in <50ms.",
    icon: <Globe className="text-[#5252e2]" size={32} />,
    tags: ["Edge Config", "Redis"],
    size: "small",
  },
  {
    title: "Clean Codebase",
    description: "Strict TypeScript enforcement and automated CI/CD pipelines for error-free delivery.",
    icon: <Code2 className="text-[#5252e2]" size={32} />,
    tags: ["TS", "Jest", "GitHub Actions"],
    size: "large",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
            Technical<br /><span className="text-[#5252e2]">Capabilities.</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-lg">
            A deep dive into the standards and methodologies I apply to every digital product.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. Individual Card Component with Mouse Tracking Glow
const ExpertiseCard = ({ item }: { item: ExpertiseItem }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-10 overflow-hidden transition-all duration-500 hover:border-[#5252e2]/30 ${
        item.size === "large" ? "md:col-span-4" : "md:col-span-2"
      }`}
    >
      {/* THE GLOW EFFECT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useSpring(
            `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(82, 82, 226, 0.08), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
        <div className="space-y-6">
          <div className="bg-white w-fit p-4 rounded-2xl shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            {item.icon}
          </div>
          <h3 className="text-3xl font-black tracking-tight text-slate-900">
            {item.title}
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-[#5252e2] group-hover:text-white group-hover:border-[#5252e2] transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;