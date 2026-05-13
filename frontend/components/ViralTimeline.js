import { motion } from 'framer-motion';
import { Zap, Heart, MessageSquare, Share2 } from 'lucide-react';

export default function ViralTimeline() {
  const peaks = [
    { over: '4.2', event: 'Aggressive Switch Hit', viralScore: 92, icon: <Zap size={12} /> },
    { over: '12.5', event: 'Stunning Dive Catch', viralScore: 98, icon: <Heart size={12} /> },
    { over: '17.4', event: 'No-Ball Drama', viralScore: 85, icon: <MessageSquare size={12} /> },
    { over: '19.6', event: 'Last Ball 6', viralScore: 99, icon: <Share2 size={12} /> },
  ];

  return (
    <div className="glass-card p-8 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Viral Momentum Timeline</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Engagement Peaks</p>
        </div>
        <Zap size={20} className="text-yellow-500 animate-pulse" />
      </div>

      <div className="relative pt-12 pb-8">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        
        <div className="flex justify-between items-center relative z-10 px-4">
          {peaks.map((peak, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-center min-w-[100px]">
                <p className="text-[8px] font-black text-yellow-500 uppercase tracking-widest">{peak.event}</p>
                <p className="text-[6px] font-bold text-gray-600 uppercase tracking-[0.2em]">Peak {peak.viralScore}%</p>
              </div>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                peak.viralScore > 95 ? 'bg-yellow-500 text-black border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'bg-white/5 text-gray-500 border-white/10'
              }`}>
                {peak.icon}
              </div>
              
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <p className="text-[8px] font-black text-gray-600">OV {peak.over}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
