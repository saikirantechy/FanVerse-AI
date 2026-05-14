import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { EconomyService } from '../services/EconomyService';
import { Coins, TrendingUp, AlertCircle } from 'lucide-react';

export default function PredictionPoll() {
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [coins, setCoins] = useState(0);
  const [wager, setWager] = useState(50);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCoins(EconomyService.getCoins());
  }, []);

  const options = [
    { id: 'a', text: 'Boundary (4/6)', multiplier: 2.5, votes: 45 },
    { id: 'b', text: 'Wicket', multiplier: 4.0, votes: 12 },
    { id: 'c', text: 'Dot Ball', multiplier: 1.8, votes: 28 },
    { id: 'd', text: '1-3 Runs', multiplier: 1.5, votes: 15 },
  ];

  const handleVote = (opt) => {
    if (coins < wager) {
      setError("Insufficient Fan Coins!");
      setTimeout(() => setError(null), 3000);
      return;
    }

    EconomyService.placeWager(wager);
    EconomyService.recordWager(opt.text, wager, Math.floor(wager * opt.multiplier));
    setCoins(EconomyService.getCoins());
    setSelected(opt.id);
    setVoted(true);
  };

  return (
    <div className="glass-card p-6 border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden group">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <TrendingUp size={80} className="text-cyan-400" />
      </div>

      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-cyan-500 text-black rounded text-[9px] font-black uppercase tracking-widest">LIVE WAGER</div>
          <h3 className="font-black uppercase tracking-tighter text-sm italic text-white">Next Event Prediction</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-white/10 rounded-xl">
          <Coins size={14} className="text-yellow-500" />
          <span className="text-xs font-black text-white">{coins.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6 italic leading-relaxed">
        "Our Prediction Agent detects a surge in bowling intensity. Place your wager for the next delivery."
      </p>

      {!voted && (
        <div className="flex items-center justify-center gap-4 mb-6 p-3 bg-white/5 rounded-2xl border border-white/5">
          <button 
            onClick={() => setWager(Math.max(10, wager - 10))}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10"
          >
            -
          </button>
          <div className="text-center min-w-[80px]">
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Wager Amount</p>
            <p className="text-sm font-black text-white">{wager} <span className="text-[10px] text-yellow-500 font-medium italic">FC</span></p>
          </div>
          <button 
            onClick={() => setWager(Math.min(500, wager + 10))}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10"
          >
            +
          </button>
        </div>
      )}

      <div className="space-y-3 relative z-10">
        {options.map((opt) => (
          <button
            key={opt.id}
            disabled={voted}
            onClick={() => handleVote(opt)}
            className={`w-full relative group overflow-hidden rounded-2xl border transition-all duration-500 ${
              voted && selected === opt.id 
                ? 'border-cyan-500/50 bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                : voted 
                  ? 'border-white/5 bg-white/5 opacity-50'
                  : 'border-white/10 bg-black/40 hover:border-cyan-500/30 hover:bg-black/60'
            }`}
          >
            {voted && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${opt.votes}%` }}
                className="absolute inset-y-0 left-0 bg-cyan-500/10"
              />
            )}
            <div className="relative p-4 flex justify-between items-center z-10">
              <div className="flex flex-col items-start">
                <span className="text-xs font-black uppercase italic text-white tracking-tight">{opt.text}</span>
                <span className="text-[9px] font-medium text-cyan-400/70 uppercase tracking-widest">{opt.multiplier}x Payout</span>
              </div>
              {voted ? (
                <span className="text-xs font-black text-cyan-400 italic">{opt.votes}% Fans</span>
              ) : (
                <div className="text-[9px] font-black text-gray-600 uppercase border border-white/5 px-2 py-1 rounded-md">
                  +{Math.floor(wager * opt.multiplier)} Potential
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-xs font-bold uppercase italic"
          >
            <AlertCircle size={14} /> {error}
          </motion.div>
        )}
      </AnimatePresence>

      {voted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em] italic">
            Predicting Agent: Confirming Wager on Chain...
          </p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

