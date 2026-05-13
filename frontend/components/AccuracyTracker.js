import { motion } from 'framer-motion';

export default function AccuracyTracker({ predictions }) {
  const stats = [
    { label: 'Correct', value: 18, color: 'bg-green-500' },
    { label: 'Wrong', value: 4, color: 'bg-red-500' },
    { label: 'Pending', value: 3, color: 'bg-gray-500' },
  ];

  const total = stats.reduce((acc, s) => acc + s.value, 0);

  return (
    <div className="glass-card p-6 border-cyan-500/10 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Prediction AI Accuracy</h3>
        <div className="text-[10px] font-black text-cyan-400 italic">81.8%</div>
      </div>

      <div className="flex h-3 w-full rounded-full overflow-hidden mb-6">
        {stats.map((stat) => (
          <motion.div 
            key={stat.label}
            initial={{ width: 0 }}
            animate={{ width: `${(stat.value / total) * 100}%` }}
            className={`h-full ${stat.color} border-r border-black/20 last:border-0`}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-sm font-black text-white italic">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
        <p className="text-[9px] text-cyan-200/70 italic leading-relaxed">
          "The PredictionAgent is currently performing in the 98th percentile for Death Over accuracy."
        </p>
      </div>
    </div>
  );
}
