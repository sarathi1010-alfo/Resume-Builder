import Link from 'next/link';
import ecosystem from '@/data/ecosystem.json';

export function RelatedTools() {
  return (
    <section className="py-12 bg-white border-t border-slate-200 mt-16 no-print">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">You might also need:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystem.relatedTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.url}
              className="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 mb-2 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-600">
                {tool.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-primary-600">
                Try it out &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
