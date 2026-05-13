import { motion, AnimatePresence } from 'framer-motion';

export default function MatchStatsModal({ isOpen, onClose, matchData }) {
  if (!isOpen) return null;

  const batters = [
    { name: 'Virat Kohli', runs: 72, balls: 34, fours: 6, sixes: 4, sr: 211.7 },
    { name: 'Faf du Plessis', runs: 45, balls: 28, fours: 4, sixes: 2, sr: 160.7 },
    { name: 'Glenn Maxwell', runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.0 },
  ];

  const bowlers = [
    { name: 'Ravindra Jadeja', overs: 4, wickets: 2, runs: 28, economy: 7.0 },
    { name: 'Deepak Chahar', overs: 3, wickets: 1, runs: 32, economy: 10.6 },
    { name: 'Matheesha Pathirana', overs: 2, wickets: 0, runs: 18, economy: 9.0 },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)]"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-cyan-500/5 to-transparent">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-1">Match Scorecard</h2>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Detailed Player Performance</p>
            </div>
            <button onClick={onClose} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">✕</button>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {/* Batting Stats */}
            <div>
              <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                Batting: RCB
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-[8px] font-black text-gray-600 uppercase tracking-widest px-4">
                  <span className="col-span-2">Batter</span>
                  <span className="text-center">R</span>
                  <span className="text-center">B</span>
                  <span className="text-center">4s/6s</span>
                  <span className="text-right">SR</span>
                </div>
                {batters.map(player => (
                  <div key={player.name} className="grid grid-cols-6 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="col-span-2 text-xs font-black uppercase text-white italic">{player.name}</span>
                    <span className="text-center text-xs font-black text-white">{player.runs}</span>
                    <span className="text-center text-[10px] font-bold text-gray-500">{player.balls}</span>
                    <span className="text-center text-[10px] font-bold text-gray-400">{player.fours}/{player.sixes}</span>
                    <span className="text-right text-xs font-black text-cyan-500">{player.sr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bowling Stats */}
            <div>
              <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Bowling: CSK
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-[8px] font-black text-gray-600 uppercase tracking-widest px-4">
                  <span className="col-span-2">Bowler</span>
                  <span className="text-center">O</span>
                  <span className="text-center">W</span>
                  <span className="text-center">R</span>
                  <span className="text-right">ECON</span>
                </div>
                {bowlers.map(player => (
                  <div key={player.name} className="grid grid-cols-6 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="col-span-2 text-xs font-black uppercase text-white italic">{player.name}</span>
                    <span className="text-center text-xs font-black text-white">{player.overs}</span>
                    <span className="text-center text-xs font-black text-purple-400">{player.wickets}</span>
                    <span className="text-center text-[10px] font-bold text-gray-500">{player.runs}</span>
                    <span className="text-right text-xs font-black text-gray-300">{player.economy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-white/5 border-t border-white/5 flex justify-between items-center">
            <div className="flex gap-8">
              <div>
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Extras</p>
                <p className="text-xs font-black text-white">12 (W 4, NB 1, LB 7)</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Total</p>
                <p className="text-xs font-black text-cyan-400">184/4 (17.2 Ov)</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-cyan-400 transition-colors text-xs">
              Full Match Commentary
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
