'use client';
import DashboardLayout from '../../components/DashboardLayout';
import MatchArchive from '../../components/MatchArchive';
import SectionHeader from '../../components/ui/SectionHeader';
import { History } from 'lucide-react';

export default function ArchivePage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Match Archive" 
          subtitle="Relive the moments" 
          icon={History} 
        />
        <MatchArchive />
      </div>
    </DashboardLayout>
  );
}
