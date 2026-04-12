// ==========================================
// 4. FOCUS CARD (BENTO BOX LAYOUT)
// ==========================================
export const FocusInsightCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,1.3fr] gap-6 bg-slate-900 p-8 md:p-12 rounded-[2.5rem] group hover:bg-slate-900/80 transition-colors">
      <div className="space-y-4 pt-4">
        <p className="font-bold text-xs tracking-widest uppercase text-slate-500">Current Focus</p>
        <h3 className="text-3xl font-black text-white tracking-tight leading-tight">System<br /> Architecture</h3>
        <p className="text-sm text-slate-400 font-medium max-w-sm pt-4 leading-relaxed">
          Designing scalable, type-safe foundations for the next generation of web applications.
        </p>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=2832&auto=format&fit=crop" // Replace with image path
          alt="Desk setup in dark grey"
          className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      1.  </div>
    </div>
  );
};