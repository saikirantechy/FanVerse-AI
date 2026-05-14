import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Live Match' },
    { href: '/leaderboard', label: 'Arena' },
    { href: '/quiz', label: 'Quiz' },
    { href: '/archive', label: 'Archive' },
    { href: '/profile', label: 'Identity' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] px-6 md:px-8 py-4 flex justify-between items-center bg-background/60 dark:bg-black/40 backdrop-blur-2xl border-b border-border shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent opacity-50" />

      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-accent-primary rounded-2xl flex items-center justify-center font-black italic text-black shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform">
            FV
          </div>
          <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-foreground">
            Fan<span className="text-accent-primary">Verse</span> <span className="text-accent-secondary">AI</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8 ml-10">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-accent-primary transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <ThemeToggle />
        
        <div className="hidden xl:flex items-center gap-4 px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-accent-primary rounded-full"
          />
          <span className="text-[10px] font-black text-accent-primary tracking-[0.2em] uppercase flex items-center gap-2">
            <Cpu size={12} /> AI Orchestrator
          </span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-white/5 rounded-xl transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block w-11 h-11 rounded-2xl bg-gradient-to-tr from-accent-primary via-accent-secondary to-pink-500 p-0.5 shadow-lg group cursor-pointer hover:rotate-3 transition-transform">
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-xs font-black border border-border group-hover:border-white/30 transition-colors text-foreground">
            SK
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border lg:hidden overflow-hidden z-[100]"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black uppercase italic text-foreground hover:text-accent-primary transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 px-4 py-3 bg-accent-secondary/10 border border-accent-secondary/20 rounded-2xl">
                <Zap size={14} className="text-accent-secondary animate-pulse" />
                <span className="text-[10px] font-black text-accent-secondary uppercase tracking-widest">JUDGE MODE ACTIVE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

