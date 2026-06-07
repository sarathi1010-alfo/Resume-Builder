import Link from 'next/link';
import ecosystem from '@/data/ecosystem.json';
import { Sparkles } from 'lucide-react';

export function RecentlyLaunchedStrip() {
  const latestTool = ecosystem.recentlyLaunched.find(t => t.isNew) || ecosystem.recentlyLaunched[0];

  return (
    <div className="bg-slate-900 text-white text-sm py-2 px-4 no-print relative z-50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="flex items-center gap-1 font-medium bg-white/20 px-2 py-0.5 rounded text-xs">
          <Sparkles className="w-3 h-3" /> Just Launched
        </span>
        <span className="text-slate-300">Try our new tool:</span>
        <Link
          href={latestTool.url}
          className="font-semibold text-white hover:text-primary-300 transition-colors underline decoration-primary-500/50 underline-offset-2"
        >
          {latestTool.name} &rarr;
        </Link>
      </div>
    </div>
  );
}
