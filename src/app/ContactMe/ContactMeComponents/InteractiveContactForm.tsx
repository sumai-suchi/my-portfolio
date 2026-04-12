"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export const InteractiveContactForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth rotation spring
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  // FIX: Change 'MouseEvent' to 'React.MouseEvent'
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // In React events, clientX and clientY are directly available
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inputClass = "w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl text-slate-200 placeholder:text-slate-600 focus:border-[#5252e2] focus:ring-1 focus:ring-[#5252e2]/50 transition-colors";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d" 
      }}
      className="p-12 md:p-16 bg-black border border-slate-900 rounded-[3rem] shadow-[0_0_100px_-20px_rgba(82,82,226,0.15)] group transition-shadow duration-500 hover:shadow-[0_0_120px_-20px_rgba(82,82,226,0.3)]"
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="space-y-10 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input type="text" placeholder="Your Name" className={inputClass} />
          <input type="email" placeholder="Email Address" className={inputClass} />
        </div>
        
        <textarea 
          placeholder="Project Details" 
          rows={5} 
          className={`${inputClass} resize-none`}
        ></textarea>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
          <p className="font-mono text-[11px] tracking-widest text-slate-500 uppercase max-w-xs leading-relaxed">
            Your data is processed and handled with absolute privacy.
          </p>
          
          <button className="flex items-center gap-3 bg-[#5252e2] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#4343c9] transition-all group active:scale-95 shadow-lg">
            Send Message 
            <SendHorizonal size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};