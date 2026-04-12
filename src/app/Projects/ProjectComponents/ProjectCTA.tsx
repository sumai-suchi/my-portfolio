const ProjectCTA = () => {
  return (
    <section className="relative py-48 bg-white overflow-hidden text-center">
      {/* BACKGROUND MARQUEE */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-[0.03] select-none pointer-events-none">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-[15vw] font-black uppercase">
          <span>Let's collaborate let's collaborate let's collaborate</span>
        </div>
      </div>

      <div className="relative z-10 px-6">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12">
          Ready to <br /> <span className="text-[#5252e2]">Commence?</span>
        </h2>
        <button className="group relative px-12 py-6 bg-slate-900 text-white rounded-full overflow-hidden font-bold tracking-widest uppercase text-sm transition-all hover:scale-105 shadow-2xl">
          <span className="relative z-10">Start a Project</span>
          <div className="absolute inset-0 bg-[#5252e2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default ProjectCTA;