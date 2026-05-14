import { motion, AnimatePresence } from 'framer-motion';
import MatchRecapStory from './MatchRecapStory';

export default function MatchReportModal({ isOpen, onClose, report, fanRecap, storyline }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-4xl bg-black border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.2)]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 p-8 flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">Final Match Report</h2>
              <p className="text-xs font-bold text-white/70 uppercase tracking-widest">AI-Generated Journalism & Recap</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-white/70 transition-colors">
              ✕
            </button>
          </div>

          <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {/* Cinematic Recap Story */}
            <MatchRecapStory storyline={storyline} />

            {/* Tactical Review */}
            <section className="px-2">
              <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-4">AI Tactical Deep-Dive</h3>
              <div className="text-sm font-medium text-gray-300 leading-relaxed italic">
                {report || "The game shifted when the spinners were introduced in the 12th over. CSK's defensive lines proved too much for RCB's middle order..."}
              </div>
            </section>


            {/* Fan Journey Recap */}
            <section className="p-6 bg-white/5 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full blur-xl" />
              </div>
              <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-4">Your Fan Journey Recap</h3>
              <div className="text-sm font-bold text-white leading-relaxed">
                {fanRecap || "You were a 'Tactical Strategist' today! You correctly predicted 4 wickets and maintained a 100% streak through the death overs. Your crowd energy contribution was in the top 1%!"}
              </div>
            </section>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-black border border-white/5 rounded-xl">
                <div className="text-[8px] font-black text-gray-600 uppercase mb-1">XP Earned</div>
                <div className="text-xl font-black text-white italic">+1,420</div>
              </div>
              <div className="text-center p-4 bg-black border border-white/5 rounded-xl">
                <div className="text-[8px] font-black text-gray-600 uppercase mb-1">Badges</div>
                <div className="text-xl font-black text-white italic">2</div>
              </div>
              <div className="text-center p-4 bg-black border border-white/5 rounded-xl">
                <div className="text-[8px] font-black text-gray-600 uppercase mb-1">Rank Up</div>
                <div className="text-xl font-black text-green-400 italic">Level 13</div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-8 bg-white/5 border-t border-white/5 flex gap-4">
            <button className="flex-1 py-4 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Share Full Report
            </button>
            <button onClick={onClose} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase italic tracking-widest rounded-xl hover:bg-white/10 transition-colors">
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
