import { motion } from 'framer-motion';

export default function NeonButton({ children, onClick, className = "", variant = "primary", ...props }) {
  const variants = {
    primary: "from-accent-primary to-accent-secondary shadow-[0_0_20px_rgba(0,242,255,0.2)]",
    secondary: "from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.2)]",
    cyan: "from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] text-white transition-all duration-500 bg-gradient-to-br ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}
