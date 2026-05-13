import { motion } from 'framer-motion';

export default function BackgroundParticles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {particles.map((p) => (
        <motion.div 
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{ 
            y: [ `${p.y}vh`, `${p.y - 20}vh`, `${p.y}vh` ],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "easeInOut" 
          }}
          style={{ 
            width: p.size, 
            height: p.size, 
            backgroundColor: '#06b6d4',
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
          className="absolute"
        />
      ))}
    </div>
  );
}
