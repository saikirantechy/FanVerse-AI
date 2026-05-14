export default function SectionHeader({ title, subtitle, icon: Icon }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="w-12 h-12 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl flex items-center justify-center text-accent-primary">
            <Icon size={24} />
          </div>
        )}
        <div>
          <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-1">{subtitle}</h3>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-foreground leading-none">{title}</h2>
        </div>
      </div>
    </div>
  );
}
