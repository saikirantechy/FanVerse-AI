import { motion } from 'framer-motion';
import { Zap, Heart, MessageSquare, Share2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function ViralTimeline() {
  const peaks = [
    { over: '4.2', event: 'Aggressive Switch Hit', viralScore: 92, icon: <Zap size={12} /> },
    { over: '12.5', event: 'Stunning Dive Catch', viralScore: 98, icon: <Heart size={12} /> },
    { over: '17.4', event: 'No-Ball Drama', viralScore: 85, icon: <MessageSquare size={12} /> },
    { over: '19.6', event: 'Last Ball 6', viralScore: 99, icon: <Share2 size={12} /> },
  ];

  return (
    <GlassCard className="p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-1">Viral Momentum Timeline</h3>
          <p className="text-sm font-black text-foreground italic uppercase tracking-tighter">AI Engagement Peaks</p>
        </div>
        <div className="p-2 bg-accent-primary/10 rounded-xl">
          <Zap size={20} className="text-accent-primary animate-pulse" />
        </div>
      </div>

      <div className="relative pt-12 pb-10">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border translate-y-4" />
        
        <div className="flex justify-between items-center relative z-10 px-4">
          {peaks.map((peak, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-center min-w-[120px] bg-card border border-border p-2 rounded-xl shadow-xl">
                <p className="text-[9px] font-black text-accent-primary uppercase tracking-widest">{peak.event}</p>
                <p className="text-[7px] font-black text-muted uppercase tracking-[0.2em]">Intensity {peak.viralScore}%</p>
              </div>
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all transform group-hover:scale-110 group-hover:-translate-y-2 ${
                peak.viralScore > 95 
                  ? 'bg-accent-primary text-black border-accent-primary shadow-[0_0_20px_rgba(0,242,255,0.4)]' 
                  : 'bg-card text-muted border-border'
              }`}>
                {peak.icon}
              </div>
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <p className="text-[10px] font-black text-muted uppercase tracking-tighter italic">OV {peak.over}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
