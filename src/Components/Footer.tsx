"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useTransform, useScroll, Variants } from 'framer-motion';
import { CalendarDays, Copy, Check, MoveUpRight } from 'lucide-react';

// 1. Data and Types
interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  calendar: string;
}

const contactData: ContactData = {
  email: "hello@curator.dev",
  github: "https://github.com/curatordev",
  linkedin: "https://www.linkedin.com/in/curatordev/",
  calendar: "#"
};

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const ImmersiveFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer ref={footerRef} className="relative bg-[#08080a] py-32 md:py-48 overflow-hidden text-white rounded-t-[4rem]">
      
      {/* Background Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-110 opacity-70"
      >
        <div className="absolute top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-[#5252e2]/30 to-[#a8a8e8]/10 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#5252e2]/20 to-[#4343c9]/0 blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 space-y-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-200 uppercase">
            Let's build<br /> something epic.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
            I'm currently looking for freelance work and full-time opportunities. Let’s connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="bg-white text-slate-950 p-10 rounded-[2.5rem] space-y-6 flex flex-col justify-between hover:scale-105 transition-transform duration-500 shadow-2xl">
            <h3 className="text-2xl font-black tracking-tight">Book a Call</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Skip the email. Schedule a 15-minute intro chat directly on my calendar.
            </p>
            <a 
              href={contactData.calendar}
              className="mt-6 flex items-center justify-center gap-2 bg-[#5252e2] text-white px-6 py-3 rounded-full font-bold text-xs uppercase hover:bg-[#4343c9] transition-colors shadow-lg"
            >
              Check Availability <CalendarDays size={18} />
            </a>
          </div>

          <div className="group bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] space-y-6 flex flex-col justify-between cursor-pointer transition-colors hover:border-[#5252e2]/50" onClick={copyEmail}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black tracking-tight text-white transition-colors">Direct Email</h3>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                    <Check className="text-emerald-400" size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="copy" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="opacity-40 group-hover:opacity-100 transition-opacity">
                    <Copy className="text-slate-400" size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              If a call is too much, feel free to send a standard brief or proposal.
            </p>
            <span className="text-slate-500 font-bold group-hover:text-white transition-colors block mt-6 truncate">{contactData.email}</span>
          </div>

          <div className="flex flex-col justify-between pt-12 md:pt-0">
            <div className="flex gap-4 justify-center md:justify-start lg:justify-end">
              <a href={contactData.github} className="text-slate-500 hover:text-[#5252e2] transition-colors">GitHub<MoveUpRight size={24} /></a>
              <a href={contactData.linkedin} className="text-slate-500 hover:text-[#5252e2] transition-colors">LinkedIn<MoveUpRight size={24} /></a>
            </div>
            <p className="text-slate-700 text-xs font-medium lg:text-right mt-16 md:mt-0">
              Handcrafted in Shibganj<br /> © 2024 Curator Dev.
            </p>
          </div>
        </div>
      </div>

      {/* FIXED MARQUEE SECTION */}
      <div className="absolute -bottom-10 md:-bottom-20 left-0 right-0 z-0 pointer-events-none opacity-10 md:opacity-5">
        <motion.div variants={marqueeVariants} animate="animate" className="flex whitespace-nowrap">
          {[...Array(2)].map((_, outerIndex) => (
            <div key={`container-${outerIndex}`} className="flex gap-6 pr-6">
              {["Curator", "Developer", "Designer", "Architect", "Curator", "Developer"].map((text, innerIndex) => (
                 <span 
                   key={`${outerIndex}-${innerIndex}`} 
                   className="text-[15vw] md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase tabular-nums"
                 >
                   {text}
                 </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

    </footer>
  );
};

export default ImmersiveFooter;