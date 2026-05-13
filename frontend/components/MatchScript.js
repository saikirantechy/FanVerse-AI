import { motion } from 'framer-motion';

export default function MatchScript({ storyline }) {
  const scripts = [
    { id: 1, label: 'High-Scoring Thriller', probability: 85, color: 'text-cyan-500' },
    { id: 2, label: 'Middle-Order Collapse', probability: 42, color: 'text-orange-500' },
    { id: 3, label: 'Strategic Chase', probability: 68, color: 'text-purple-500' },
  ];

  return (
    <div className="glass-card p-6 border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">AI Narrative Scripting</h3>
          <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest mt-1">Predicting Match Trajectory</p>
        </div>
        <div className="bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 text-[8px] font-black text-purple-400 animate-pulse">DIRECTOR'S CUT</div>
      </div>

      <div className="space-y-4">
        {scripts.map((script) => (
          <div key={script.id}>
            <div className="flex justify-between text-[8px] font-black uppercase text-gray-500 mb-2">
              <span className={script.color}>{script.label}</span>
              <span>{script.probability}%</span>
            </div>
            <div className="flex h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${script.probability}%` }}
                className={`h-full ${script.color.replace('text', 'bg')} opacity-40`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-black/40 rounded-xl border border-white/5">
        <p className="text-[9px] text-purple-100/70 italic leading-relaxed">
          "NarrativeAgent has identified a 92% structural similarity to the 2019 final. Expect an emotional peak in the final 2 overs."
        </p>
      </div>
    </div>
  );
}
