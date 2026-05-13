import { motion } from 'framer-motion';

export default function SquadComparison() {
  const p1 = { name: 'V. Kohli', team: 'RCB', rating: 92, form: '↑', icon: '🏏' };
  const p2 = { name: 'MS Dhoni', team: 'CSK', rating: 89, form: '↓', icon: '🧤' };

  const stats = [
    { label: 'Impact', v1: 94, v2: 88 },
    { label: 'Tactical', v1: 82, v2: 96 },
    { label: 'Momentum', v1: 88, v2: 84 },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">AI Squad Comparison</h3>
        <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Live Battle</span>
      </div>

      <div className="flex justify-between items-center mb-10">
        <div className="text-center">
          <div className="text-3xl mb-2">{p1.icon}</div>
          <h4 className="text-sm font-black uppercase italic text-white">{p1.name}</h4>
          <p className="text-[8px] font-bold text-red-500 uppercase">{p1.team} • {p1.form}</p>
        </div>
        <div className="text-xl font-black italic text-gray-700">VS</div>
        <div className="text-center">
          <div className="text-3xl mb-2">{p2.icon}</div>
          <h4 className="text-sm font-black uppercase italic text-white">{p2.name}</h4>
          <p className="text-[8px] font-bold text-yellow-500 uppercase">{p2.team} • {p2.form}</p>
        </div>
      </div>

      <div className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between text-[8px] font-black uppercase text-gray-500 mb-2">
              <span>{stat.v1}</span>
              <span className="text-white tracking-widest">{stat.label}</span>
              <span>{stat.v2}</span>
            </div>
            <div className="flex h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stat.v1}%` }}
                className="h-full bg-red-500"
              />
              <div className="flex-1" />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stat.v2}%` }}
                className="h-full bg-yellow-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5">
        <p className="text-[9px] text-gray-400 italic leading-relaxed text-center">
          "The InsightAgent projects Kohli to have a higher impact in the next 3 overs due to favorable matchup against spin."
        </p>
      </div>
    </div>
  );
}
