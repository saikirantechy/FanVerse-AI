'use client';
'use client';

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Inter, Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import { useTheme } from "../hooks/useTheme";

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={`${theme} scroll-smooth`}>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground transition-colors duration-500 selection:bg-accent-primary/30`}>
        {/* Global Scanning Line Effect */}
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-20">
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-accent-primary/50 shadow-[0_0_15px_var(--accent)]"
          />
        </div>

        <Navbar />
        
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key="global-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <ThemeToggle />
      </body>
    </html>
  );
}
