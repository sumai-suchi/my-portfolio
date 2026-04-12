"use client";
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  src: string;
  color: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Dynamics",
    category: "Full-Stack Development",
    description: "A high-frequency trading dashboard featuring real-time WebSockets and complex data visualization.",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    color: "#5252e2",
    link: "#"
  },
  {
    id: 2,
    title: "Aetherial UI",
    category: "Design System",
    description: "An open-source design system focused on glassmorphism and motion-first components for React.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
    color: "#000000",
    link: "#"
  }
];

const ProjectShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This transforms the vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* BACKGROUND FLOATING TEXT */}
        <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
          <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter">
            WORKS
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-10 md:px-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[450px] w-[350px] md:h-[650px] md:w-[850px] overflow-hidden rounded-[2rem] bg-slate-900"
            >
              {/* IMAGE WITH OVERLAY */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="space-y-4"
                >
                  <span className="text-[#5252e2] font-mono text-sm tracking-[0.3em] uppercase block">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-slate-300 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-6 pt-6">
                    <a href={project.link} className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-[#5252e2] hover:text-white transition-colors">
                      Live Preview <ArrowUpRight size={18} />
                    </a>
                    <a href="#" className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-white/10 transition-colors">
                      Github <ArrowUpRight size={18} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* PROJECT NUMBER INDICATOR */}
              <div className="absolute top-10 right-10 z-20">
                <span className="text-8xl font-black text-white/5 tabular-nums">
                  0{project.id}
                </span>
              </div>
            </div>
          ))}

          {/* FINAL "VIEW ALL" CARD */}
          <div className="flex h-[450px] w-[300px] md:h-[650px] md:w-[400px] items-center justify-center border-2 border-dashed border-slate-700 rounded-[2rem]">
             <button className="group text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#5252e2] mx-auto group-hover:scale-110 transition-transform">
                   <ArrowUpRight size={40} className="text-white" />
                </div>
                <span className="text-white font-black text-2xl tracking-tighter uppercase">View All<br/>Archive</span>
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;