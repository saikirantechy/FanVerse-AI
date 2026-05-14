import Navbar from './Navbar';
import BroadcastTicker from './BroadcastTicker';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
import TickerRibbon from './TickerRibbon';
import ChatFAB from './ChatFAB';
import ThemeToggle from './ThemeToggle';

export default function DashboardLayout({ children }) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-10 relative bg-background overflow-hidden transition-colors duration-500">
      <BackgroundParticles />
      <TickerRibbon />
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key="page-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      <BroadcastTicker />
      <ChatFAB />
    </main>
  );
}
