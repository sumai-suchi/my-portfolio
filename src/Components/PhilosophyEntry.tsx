import React from 'react';

// Definitions for the philosophy entries, ensuring type safety.
type PhilosophyEntry = {
  id: string; // The number, e.g., '01'
  title: string; // The bold header
  description: string; // The full text block
};

const philosophyEntries: PhilosophyEntry[] = [
  {
    id: '01',
    title: 'Functional Aesthetics',
    description: 'Design is not a veneer. It’s the highest form of documentation. Every pixel must justify its existence through utility or clear communication of hierarchy.',
  },
  {
    id: '02',
    title: 'Resilient Systems',
    description: 'Building for the long-tail. I prioritize architecture that survives shifting requirements and remains maintainable by teams of any size.',
  },
  {
    id: '03',
    title: 'Performance as UX',
    description: 'Latency is the ultimate friction. A 100ms delay is a design flaw. I build high-performance pipelines from server-side to the rendering engine.',
  },
  {
    id: '04',
    title: 'Human-Centric Data',
    description: 'Bridging the gap between raw datasets and intuitive insight. Turning complex backend logic into actionable human experiences.',
  },
];

const TechnicalPhilosophy = () => {
  return (
    <section className="bg-white/95 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-x-16 gap-y-16">
        
        {/* SECTION HEADER */}
        <div className="lg:sticky lg:top-24 h-fit">
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 leading-[1.1]">
            Technical <br /> Philosophy
          </h2>
        </div>

        {/* PHILOSOPHY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {philosophyEntries.map((entry) => (
            <div key={entry.id} className="space-y-4">
              
              {/* THE PURPLE NUMBER */}
              <p className="text-[#5252e2] font-black text-sm tracking-[0.2em] tabular-nums">
                {entry.id}
              </p>
              
              {/* THE TITLE */}
              <h3 className="text-2xl font-black tracking-tight text-slate-800">
                {entry.title}
              </h3>
              
              {/* THE DESCRIPTION (MAX WIDTH KEEPS LINES FROM GETTING TOO LONG) */}
              <p className="max-w-md text-base text-slate-600 leading-relaxed font-normal">
                {entry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalPhilosophy;