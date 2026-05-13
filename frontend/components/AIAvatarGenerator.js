import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Download, Save, RefreshCw } from 'lucide-react';

export default function AIAvatarGenerator() {
  const [style, setStyle] = useState('Tactical Analyst');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Base");

  const styles = [
    'Tactical Analyst', 'Hardcore Fan', 'Captain Mode', 'Stadium Warrior', 'Prediction Master'
  ];

  const generate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const seed = Math.random().toString(36).substring(7);
      setCurrentAvatar(`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-cyan-500/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">AI Avatar Engine</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Forge Your Identity</p>
        </div>
        <Sparkles size={20} className="text-cyan-400 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Preview */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <motion.div 
              animate={isGenerating ? { rotate: 360 } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 rounded-full border-4 border-cyan-500/30 p-2"
            >
              <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-cyan-500">
                <img src={currentAvatar} alt="AI Avatar" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <AnimatePresence>
              {isGenerating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full"
                >
                  <RefreshCw className="text-cyan-500 animate-spin" size={40} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-4 text-[8px] font-black text-gray-500 uppercase tracking-widest">Style: {style}</p>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="text-[8px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 block">Select Persona</label>
            <div className="grid grid-cols-1 gap-2">
              {styles.map(s => (
                <button 
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase italic tracking-widest border transition-all text-left ${
                    style === s ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={generate}
              disabled={isGenerating}
              className="flex items-center justify-center gap-2 py-4 bg-cyan-600 text-white rounded-xl text-[10px] font-black uppercase italic tracking-widest hover:bg-cyan-500 transition-all disabled:opacity-50"
            >
              <RefreshCw size={14} /> Re-Roll
            </button>
            <button className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-black uppercase italic tracking-widest hover:bg-white/10 transition-all">
              <Save size={14} /> Apply
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 flex justify-center">
        <button className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors">
          <Download size={14} /> Download HD Card (.PNG)
        </button>
      </div>
    </div>
  );
}
