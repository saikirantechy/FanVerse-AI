import { motion } from 'framer-motion';

export default function AudioPulse({ isActive }) {
  return (
    <div className="flex items-center gap-[2px] h-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div 
          key={i}
          animate={{ 
            height: isActive ? [4, 12, 6, 16, 4] : 4 
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-1 bg-cyan-500 rounded-full"
        />
      ))}
    </div>
  );
}
