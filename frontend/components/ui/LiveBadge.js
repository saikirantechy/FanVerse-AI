import { motion } from 'framer-motion';

export default function LiveBadge({ text = "LIVE", variant = "accent" }) {
  const colors = {
    accent: "bg-accent-primary shadow-[0_0_10px_var(--accent)]",
    red: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]",
    green: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-xl">
      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`w-1.5 h-1.5 rounded-full ${colors[variant] || colors.accent}`}
      />
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground italic">
        {text}
      </span>
    </div>
  );
}
