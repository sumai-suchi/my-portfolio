"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// 1. Define strict types for your data
interface StackItem {
  category: string;
  tools: string[];
  description: string;
}

const stack: StackItem[] = [
  { 
    category: "Frontend", 
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    description: "Building interactive, performant, and accessible interfaces." 
  },
  { 
    category: "Backend", 
    tools: ["Node.js", "Express.js", "NestJS", "PostgreSQL"],
    description: "Architecting scalable server-side logic and robust APIs." 
  },
  { 
    category: "Database", 
    tools: ["MongoDB", "Redis", "Prisma", "Mongoose"],
    description: "Managing data integrity and optimized query performance." 
  },
  { 
    category: "DevOps", 
    tools: ["Docker", "AWS", "CI/CD", "Vercel"],
    description: "Automating deployment pipelines and cloud infrastructure." 
  }
];

// 2. Define Animation Variants for cleaner JSX
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const TechStack: React.FC = () => {
  return (
    <section className="bg-[#fcfcfd] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none uppercase">
              Toolkit<span className="text-[#5252e2]">.</span>
            </h2>
            <p className="mt-8 text-xl text-slate-500 leading-relaxed font-medium">
              A curated selection of technologies I use to transform 
              <span className="text-slate-900 px-2 underline decoration-[#5252e2]/30">complex ideas</span> 
              into high-performance digital products.
            </p>
          </motion.div>
        </div>

        {/* MASONRY-STYLE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {stack.map((item, index) => (
            <motion.div
              key={item.category}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative p-8 md:p-12 bg-white border border-slate-100 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(82,82,226,0.15)] transition-shadow duration-500"
            >
              {/* ACCENT NUMBER */}
              <span className="absolute top-8 right-12 text-7xl font-black text-slate-100/50 group-hover:text-[#5252e2]/10 transition-colors duration-500 tabular-nums select-none">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <h3 className="text-[#5252e2] font-black text-xs tracking-[0.3em] uppercase mb-3">
                  {item.category}
                </h3>
                
                <p className="text-slate-500 text-sm mb-10 max-w-[280px] font-medium leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-5">
                  {item.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight hover:text-[#5252e2] transition-colors duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* BOTTOM DECORATIVE PROGRESS BAR */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-[#5252e2] to-[#7c7cf0] group-hover:w-full transition-all duration-700 ease-in-out rounded-b-[2rem]" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;