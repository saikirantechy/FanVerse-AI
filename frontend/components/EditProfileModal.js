import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function EditProfileModal({ isOpen, onClose, user, onSave }) {
  const [formData, setFormData] = useState(user);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
        >
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">Edit Profile</h2>
              <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-1">Customize your fan identity</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-white/70">✕</button>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Username</label>
              <input 
                type="text" 
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Bio</label>
              <textarea 
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Favorite Team</label>
              <select 
                value={formData.team}
                onChange={(e) => setFormData({...formData, team: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none font-bold appearance-none"
              >
                <option value="RCB">RCB</option>
                <option value="CSK">CSK</option>
                <option value="MI">MI</option>
                <option value="GT">GT</option>
              </select>
            </div>
          </div>

          <div className="p-8 bg-white/5 border-t border-white/5">
            <button 
              onClick={handleSave}
              className="w-full py-4 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-cyan-400 transition-all"
            >
              Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
