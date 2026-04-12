"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PathStep {
  period: string;
  title: string;
  organization: string;
  description: string;
}

const path: PathStep[] = [
  {
    period: "2024 — Present",
    title: "Full-Stack Specialization",
    organization: "Independent Research",
    description: "Deep-diving into system design, scalable database architectures, and advanced React patterns through intensive project building."
  },
  {
    period: "2023 — 2024",
    title: "Computer Science & Engineering",
    organization: "University/Institute Name",
    description: "Focusing on data structures, algorithms, and the fundamentals of software engineering with a 4.0/4.0 focus."
  },
  {
    period: "2022 — 2023",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    description: "Collaborating on UI libraries and documentation, learning the rigor of peer-reviewed code and collaborative version control."
  }
];

const TechnicalPath = () => {
  return (
    <section className="bg-[#08080a] text-white py-32 my-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Technical<br /><span className="text-[#5252e2]">Path.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-lg md:text-right max-w-xs">
            My journey through academic rigor and self-taught engineering.
          </p>
        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-0">
          {path.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-t border-slate-800 py-12 grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] items-start gap-8 hover:bg-white/[0.02] transition-colors px-4"
            >
              {/* PERIOD */}
              <span className="text-slate-500 font-mono text-sm pt-2">
                {item.period}
              </span>

              {/* TITLE & DESC */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#5252e2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* ORGANIZATION */}
              <div className="md:text-right">
                <span className="text-xl font-black text-slate-200 italic opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.organization}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-slate-800 w-full" />
        </div>

      </div>
    </section>
  );
};

export default TechnicalPath;