import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoData from '@/data/seo-content.json';
import { PopularToolsSidebar } from '@/components/shared/PopularToolsSidebar';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.useCases.find(uc => uc.slug === resolvedParams.slug);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.useCases.find(uc => uc.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.h1}</h1>
          <p className="text-xl text-slate-600 mb-8">{data.description}</p>

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

          <div className="prose max-w-none text-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Why target your resume?</h2>
            <p>
              Applying generic resumes to specific situations often leads to rejections. By understanding the unique requirements of your situation, you can better highlight what recruiters are actually looking for.
            </p>
            <p>
              Our free tools ensure your formatting won&apos;t get in the way of your actual qualifications.
            </p>
          </div>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <PopularToolsSidebar />
        </div>
      </div>
    </div>
  );
}
