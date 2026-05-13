export default function SkeletonLoader({ type }) {
  const baseClasses = "animate-pulse bg-white/5 rounded-2xl border border-white/10";
  
  if (type === 'card') {
    return (
      <div className={`${baseClasses} p-6 space-y-4 h-[200px]`}>
        <div className="w-1/3 h-2 bg-white/10 rounded" />
        <div className="w-full h-8 bg-white/10 rounded" />
        <div className="space-y-2">
          <div className="w-full h-2 bg-white/10 rounded" />
          <div className="w-2/3 h-2 bg-white/10 rounded" />
        </div>
      </div>
    );
  }

  if (type === 'stat') {
    return (
      <div className={`${baseClasses} p-4 flex flex-col items-center gap-2`}>
        <div className="w-1/2 h-2 bg-white/10 rounded" />
        <div className="w-2/3 h-6 bg-white/10 rounded" />
      </div>
    );
  }

  return (
    <div className={`${baseClasses} w-full h-12`} />
  );
}
