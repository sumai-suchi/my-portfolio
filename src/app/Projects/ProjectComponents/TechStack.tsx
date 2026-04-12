const TechStack = () => {
  const stack = ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL", "Docker"];

  return (
    <section className="bg-[#fcfcfd] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card */}
          <div className="lg:col-span-7 bg-white p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-between min-h-[400px]">
            <h3 className="text-4xl font-black tracking-tighter uppercase">The Modern <br /><span className="text-[#5252e2]">Weaponry.</span></h3>
            <p className="text-slate-500 max-w-sm font-medium">I don't just use tools; I master them to ensure your product is built on a foundation that lasts decades, not months.</p>
          </div>

          {/* Tags Cloud */}
          <div className="lg:col-span-5 bg-slate-900 p-12 rounded-[3rem] flex flex-wrap gap-3 items-center content-center">
            {stack.map((item) => (
              <span key={item} className="px-5 py-2 bg-white/10 border border-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;