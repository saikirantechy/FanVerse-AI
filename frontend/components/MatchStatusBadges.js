import { motion, AnimatePresence } from 'framer-motion';

export default function MatchStatusBadges({ overs, status }) {
  const getBadges = () => {
    const badges = [];
    if (overs <= 6) badges.push({ id: 'pp', label: 'POWERPLAY', color: 'bg-orange-500' });
    if (overs > 15) badges.push({ id: 'do', label: 'DEATH OVERS', color: 'bg-red-600' });
    if (status === 'timeout') badges.push({ id: 'st', label: 'STRATEGIC TIMEOUT', color: 'bg-blue-500' });
    if (status === 'live') badges.push({ id: 'live', label: 'LIVE BROADCAST', color: 'bg-green-500' });
    return badges;
  };

  const activeBadges = getBadges();

  return (
    <div className="flex gap-2">
      <AnimatePresence>
        {activeBadges.map((badge) => (
          <motion.div 
            key={badge.id}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`${badge.color} px-3 py-1 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
          >
            <span className="text-[8px] font-black text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              {badge.label}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
