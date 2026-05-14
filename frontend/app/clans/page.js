'use client';
import DashboardLayout from '../../components/DashboardLayout';
import ClanSystem from '../../components/ClanSystem';
import SectionHeader from '../../components/ui/SectionHeader';
import { Users } from 'lucide-react';

export default function ClansPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Clan System" 
          subtitle="Join the brotherhood" 
          icon={Users} 
        />
        <ClanSystem />
      </div>
    </DashboardLayout>
  );
}
