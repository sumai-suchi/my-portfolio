"use client";
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const steps = [
  { no: "01", title: "Discovery", desc: "Deep diving into the problem space and defining technical constraints." },
  { no: "02", title: "Architecture", desc: "Mapping out scalable systems, data flow, and state management." },
  { no: "03", title: "Development", desc: "Writing clean, type-safe code with 100% test coverage." },
  { no: "04", title: "Optimization", desc: "Fine-tuning performance, edge cases, and accessibility." }
];

const ProcessSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-12 w-full">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900">
            The <span className="text-[#5252e2]">Workflow.</span>
          </h2>
          
          <motion.div style={{ x }} className="flex gap-12">
            {steps.map((step) => (
              <div key={step.no} className="group min-w-[300px] md:min-w-[450px] bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 transition-colors hover:border-[#5252e2]/30">
                <span className="text-6xl font-black text-slate-200 group-hover:text-[#5252e2]/20 transition-colors">{step.no}</span>
                <h3 className="text-3xl font-bold mt-8 mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;