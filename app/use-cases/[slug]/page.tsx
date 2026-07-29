import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoData from '@/data/seo-content.json';
import { PopularToolsSidebar } from '@/components/shared/PopularToolsSidebar';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildUseCaseMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

export async function generateStaticParams() {
  return seoData.useCases.map((uc) => ({
    slug: uc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.useCases.find(uc => uc.slug === resolvedParams.slug);
  if (!data) return { title: 'Not Found' };

  return resolveMetadata(buildUseCaseMeta(data));
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.useCases.find(uc => uc.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {data.faq && <JsonLd schema={buildFaqSchema(data.faq)} />}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.h1}</h1>
          <p className="text-xl text-slate-600 mb-8 font-medium">{data.description}</p>

          {data.quickAnswer && (
            <div className="my-8 p-6 bg-primary-50 rounded-xl border-l-4 border-primary-600 text-primary-900">
              <h2 className="text-xl font-bold mt-0 mb-2">Quick Answer</h2>
              <p className="m-0 font-medium">{data.quickAnswer}</p>
            </div>
          )}

          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Start building your resume now</h2>
            <p className="mb-6 text-slate-700">Jump straight into the editor. No signup required.</p>
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-700 transition-colors"
            >
              Open the Builder
            </Link>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h3>
            <ul className="space-y-2 text-slate-700">
              {data.slug === 'student-resume' && (
                <>
                  <li><Link href="/blog/how-long-should-resume-be" className="text-primary-600 hover:underline">How Long Should a Resume Be?</Link></li>
                  <li><Link href="/vs/canva" className="text-primary-600 hover:underline">Resume Forge vs Canva</Link></li>
                </>
              )}
              {data.slug === 'career-change-resume' && (
                <>
                  <li><Link href="/blog/best-resume-format-2026" className="text-primary-600 hover:underline">Best Resume Format for 2026</Link></li>
                  <li><Link href="/vs/zety" className="text-primary-600 hover:underline">Resume Forge vs Zety</Link></li>
                </>
              )}
              <li><Link href="/use-cases/student-resume" className="text-primary-600 hover:underline">Student Resume Templates</Link></li>
              <li><Link href="/use-cases/career-change-resume" className="text-primary-600 hover:underline">Career Change Resume Guide</Link></li>
            </ul>
          </div>

          <div className="prose max-w-none text-slate-700">
            {data.content ? (
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-slate-900">Why target your resume?</h2>
                <p>
                  Applying generic resumes to specific situations often leads to rejections. By understanding the unique requirements of your situation, you can better highlight what recruiters are actually looking for.
                </p>
                <p>
                  Our free tools ensure your formatting won&apos;t get in the way of your actual qualifications.
                </p>
              </>
            )}

            {data.faq && data.faq.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {data.faq.map((item: { question: string, answer: string }, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">{item.question}</h3>
                      <p className="m-0 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <PopularToolsSidebar />
        </div>
      </div>
    </div>
  );
}
