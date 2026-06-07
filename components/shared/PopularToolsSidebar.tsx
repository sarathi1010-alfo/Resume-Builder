import Link from 'next/link';
import ecosystem from '@/data/ecosystem.json';
import { TrendingUp } from 'lucide-react';

export function PopularToolsSidebar() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sticky top-24 no-print">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200">
        <TrendingUp className="w-5 h-5 text-orange-500" />
        <h3 className="font-bold text-slate-900">🔥 Popular Tools</h3>
      </div>
      <ul className="space-y-4">
        {ecosystem.popularTools.map((tool) => (
          <li key={tool.name}>
            <Link
              href={tool.url}
              className="group flex flex-col"
            >
              <span className="text-sm font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
                {tool.name}
              </span>
              <span className="text-xs text-slate-500">
                {tool.sessions}+ users this month
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-slate-200">
        <Link
          href="https://hub.alfo.online"
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Explore all 16+ tools &rarr;
        </Link>
      </div>
    </div>
  );
}
