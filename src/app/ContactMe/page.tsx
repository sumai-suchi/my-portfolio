"use client";

import { motion} from 'framer-motion';
import { Monitor} from 'lucide-react';
import { GiThunderBlade } from 'react-icons/gi';
import { LiaLinkedin } from 'react-icons/lia';
import { SocialsBlock } from './ContactMeComponents/SocilaBlocks';
import { InteractiveContactForm } from './ContactMeComponents/InteractiveContactForm';
import { FocusInsightCard } from './ContactMeComponents/FocusInsightCard';

const socialLinks = [
  { name: "GITHUB", icon: <GiThunderBlade size={16} />, url: "#" },
  { name: "LINKEDIN", icon: <LiaLinkedin size={16} />, url: "#" },
  { name: "READ.CV", icon: <Monitor size={16} />, url: "#" }
];

const ContactPage: React.FC = () => {
  return (
    <section className="relative bg-[#020204] text-white mb-8  py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. DYNAMIC GRADIENT BACKGROUND (IMMERSIVE EFFECT) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-[#5252e2]/40 to-[#a8a8e8]/10 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#5252e2]/30 to-[#4343c9]/0 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-x-24 gap-y-20 relative z-10">
        
        {/* LEFT COLUMN: KINETIC TYPOGRAPHY & SOCIALS */}
        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-slate-500">
              Availability: Open for Q4 2024
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-100 leading-[0.9] uppercase">
              Let's build<br /> <span className="text-[#5252e2]">the future</span><br /> together
            </h1>
            <p className="mt-8 text-xl text-slate-400 font-medium max-w-lg leading-relaxed pt-6">
              Currently seeking opportunities to collaborate on high-precision digital products. Whether you have a specific project in mind or just want to talk shop, I'm all ears.
            </p>
          </motion.div>

          <SocialsBlock />
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM & INSIGHT CARD */}
        <div className="space-y-12">
          <InteractiveContactForm />
          <FocusInsightCard />
        </div>

      </div>
    </section>
  );
};

export default ContactPage;