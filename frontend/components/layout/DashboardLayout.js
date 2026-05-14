'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Trophy, 
  Brain, 
  History, 
  User, 
  Settings, 
  Shield, 
  Gift, 
  BarChart3, 
  Radio,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const MENU_ITEMS = [
  { icon: Home, label: 'Portal', href: '/' },
  { icon: Radio, label: 'Live Arena', href: '/live' },
  { icon: Brain, label: 'Quiz Arena', href: '/quiz' },
  { icon: History, label: 'Match Archive', href: '/archive' },
  { icon: BarChart3, label: 'AI Insights', href: '/insights' },
  { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
  { icon: Gift, label: 'Rewards', href: '/rewards' },
  { icon: Shield, label: 'Clan System', href: '/clans' },
  { icon: User, label: 'Fan Identity', href: '/profile' },
];

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 bottom-0 bg-card/40 backdrop-blur-2xl border-r border-border z-[120] flex flex-col transition-all duration-500 ease-in-out"
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-accent-primary rounded-xl flex items-center justify-center font-black italic text-black">FV</div>
                <span className="font-black italic uppercase tracking-tighter text-lg">FanVerse <span className="text-accent-primary">AI</span></span>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${
                    isActive 
                      ? 'bg-accent-primary/10 text-accent-primary' 
                      : 'text-muted hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} className={isActive ? 'text-accent-primary' : 'group-hover:text-foreground'} />
                  <AnimatePresence mode="wait">
                    {isSidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebarTab"
                      className="absolute left-0 w-1 h-6 bg-accent-primary rounded-full"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-secondary p-0.5">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center text-[10px] font-black">SK</div>
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Sai Kiran</span>
                <span className="text-[8px] font-black text-accent-primary uppercase tracking-[0.2em] mt-1">Level 15 Legend</span>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main 
        className="flex-1 transition-all duration-500"
        style={{ marginLeft: isSidebarOpen ? 280 : 80 }}
      >
        <div className="min-h-screen relative">
          {children}
        </div>
      </main>
    </div>
  );
}
