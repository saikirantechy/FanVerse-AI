import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-32 right-8 z-[500] w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(6,182,212,0.15)] group transition-colors"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90,
            scale: theme === 'dark' ? 1 : 0
          }}
          className="absolute inset-0 text-cyan-400"
        >
          <Moon size={24} fill="currentColor" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90,
            scale: theme === 'light' ? 1 : 0
          }}
          className="absolute inset-0 text-yellow-500"
        >
          <Sun size={24} fill="currentColor" />
        </motion.div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors blur-xl" />
    </motion.button>
  );
}
