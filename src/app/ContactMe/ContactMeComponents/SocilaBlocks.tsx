// ==========================================
// 2. SOCIALS BLOCK (CLEAN & MINIMAL)

import { CheckCircle, Mail, Monitor } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
const socialLinks = [
  { name: "GITHUB", icon: <GiThunderBlade size={16} />, url: "https://github.com/sumai-suchi" },
  { name: "LINKEDIN", icon: <LiaLinkedin size={16} />, url: "https://www.linkedin.com/in/sumaiya-akter-dev/" },
  { name: "READ.CV", icon: <Monitor size={16} />, url: "#" }
];

// ==========================================
export const SocialsBlock = () => {
  return (
    <div className="border-t border-slate-800 pt-16 space-y-12">
      <div className="space-y-4">
        <p className="font-bold text-xs tracking-widest uppercase text-slate-500">Direct Communication</p>
        <a href="mailto:sumaiyamoina@gmail.com" className="flex items-center gap-3 text-lg md:text-xl font-bold text-white group hover:text-[#5252e2] transition-colors">
          <Mail className="group-hover:scale-110 transition-transform" />
          sumaiyamoina@gmail.com
        </a>
      </div>
       <div className="space-y-4">
      
        <a href="https://wa.me/+8801790747374" target="_blank" rel="noopener noreferrer"  className="flex items-center gap-3 text-lg md:text-xl font-bold text-white group hover:text-[#5252e2] transition-colors">
          <BsWhatsapp className="group-hover:scale-110 transition-transform" />
            +880 1790-747374
        </a>
      </div>

      <div className="space-y-4">
        <p className="font-bold text-xs tracking-widest uppercase text-slate-500">Digital Presence</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-widest text-slate-400">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} className="flex items-center gap-2.5 group hover:text-white transition-colors">
              {link.icon}
              {link.name}
              <CheckCircle size={10} className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-1px] transition-all" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};