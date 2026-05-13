'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-black italic text-black">FV</div>
        <h1 className="text-xl font-black italic tracking-tighter uppercase">
          Fan<span className="text-cyan-400">Verse</span> AI
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <a href="#" className="hover:text-white transition-colors text-white">Live Dashboard</a>
        <a href="#" className="hover:text-white transition-colors">Squads</a>
        <a href="#" className="hover:text-white transition-colors">Analysis</a>
        <a href="#" className="hover:text-white transition-colors">Rewards</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-300 tracking-wider">AGENT ORCHESTRATOR ACTIVE</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-0.5">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold border border-white/20">SK</div>
        </div>
      </div>
    </nav>
  );
}
