'use client';
import DashboardLayout from '../../components/DashboardLayout';
import SectionHeader from '../../components/ui/SectionHeader';
import { Settings, Bell, Shield, User } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function SettingsPage() {
  const sections = [
    { id: 'profile', icon: User, label: 'Profile Settings', desc: 'Manage your public identity and bio.' },
    { id: 'notifications', icon: Bell, label: 'Notifications', desc: 'Configure match alerts and agent updates.' },
    { id: 'privacy', icon: Shield, label: 'Privacy & Security', desc: 'Manage your data and visibility.' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <SectionHeader 
          title="Settings" 
          subtitle="Configure your experience" 
          icon={Settings} 
        />
        <div className="grid grid-cols-1 gap-6">
          {sections.map(section => (
            <GlassCard key={section.id} className="flex items-center gap-6 p-8 group cursor-pointer hover:bg-accent-primary/5">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-muted group-hover:text-accent-primary transition-colors">
                <section.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black italic uppercase text-foreground">{section.label}</h3>
                <p className="text-sm text-muted">{section.desc}</p>
              </div>
              <div className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
