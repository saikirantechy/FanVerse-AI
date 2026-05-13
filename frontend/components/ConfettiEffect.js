import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ConfettiEffect({ trigger }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: ['#06b6d4', '#8b5cf6', '#eab308', '#f97316'][Math.floor(Math.random() * 4)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);
      
      const timer = setTimeout(() => setParticles([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[500] overflow-hidden">
      {particles.map((p) => (
        <motion.div 
          key={p.id}
          initial={{ x: `${p.x}vw`, y: '-10vh', opacity: 1, rotate: 0 }}
          animate={{ 
            y: '110vh', 
            x: `${p.x + (Math.random() * 20 - 10)}vw`, 
            opacity: 0,
            rotate: p.rotation + 360 
          }}
          transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
          style={{ 
            width: p.size, 
            height: p.size, 
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px'
          }}
          className="absolute"
        />
      ))}
    </div>
  );
}
