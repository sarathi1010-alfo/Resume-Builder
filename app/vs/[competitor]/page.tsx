import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoData from '@/data/seo-content.json';
import { PopularToolsSidebar } from '@/components/shared/PopularToolsSidebar';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildComparisonMeta } from '@/lib/seo/metaFactories';

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const data = seoData.comparisons.find(comp => comp.slug === resolvedParams.competitor);
  if (!data) return { title: 'Not Found' };

  return resolveMetadata(buildComparisonMeta(data));
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const data = seoData.comparisons.find(comp => comp.slug === resolvedParams.competitor);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <div className="mb-4 inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
            Resume Forge vs {data.competitorName}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.h1}</h1>
          <p className="text-xl text-slate-600 mb-12">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border-2 border-primary-500 rounded-xl relative">
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">WINNER</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Resume Forge</h3>
              <ul className="space-y-3 text-slate-700">
                <li>✅ 100% Free forever</li>
                <li>✅ ATS-Optimized formatting</li>
                <li>✅ No account required</li>
                <li>✅ Instant PDF download</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
              <h3 className="text-xl font-bold mb-4 text-slate-900">{data.competitorName}</h3>
              <ul className="space-y-3 text-slate-600">
                <li>❌ Often requires payment to download</li>
                <li>❌ Complex designs fail ATS</li>
                <li>❌ Account creation mandatory</li>
                <li>❌ Upselling and subscriptions</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-700 transition-colors"
            >
              Try the free alternative today
            </Link>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h3>
            <ul className="space-y-2 text-slate-700">
              {data.slug === 'canva' && (
                <>
                  <li><Link href="/vs/zety" className="text-primary-600 hover:underline">Resume Forge vs Zety</Link></li>
                  <li><Link href="/blog/best-resume-format-2025" className="text-primary-600 hover:underline">Best Resume Format for 2025</Link></li>
                </>
              )}
              {data.slug === 'zety' && (
                <>
                  <li><Link href="/vs/canva" className="text-primary-600 hover:underline">Resume Forge vs Canva</Link></li>
                  <li><Link href="/blog/how-long-should-resume-be" className="text-primary-600 hover:underline">How Long Should a Resume Be?</Link></li>
                </>
              )}
              <li><Link href="/use-cases/student-resume" className="text-primary-600 hover:underline">Student Resume Templates</Link></li>
              <li><Link href="/use-cases/career-change-resume" className="text-primary-600 hover:underline">Career Change Resume Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <PopularToolsSidebar />
        </div>
      </div>
    </div>
  );
}
