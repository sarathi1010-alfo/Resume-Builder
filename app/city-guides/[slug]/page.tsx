import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import programmaticData from '@/data/programmatic-pages.json';

const PAGE_TYPE = 'city-guides';

interface ProgrammaticPage {
  title: string;
  description: string;
  content?: string;
  faq: Array<{ question: string; answer: string }>;
}

const guides = programmaticData[PAGE_TYPE] as Record<string, ProgrammaticPage>;

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = guides[resolvedParams.slug];
  if (!data) return { title: 'City Guide Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/${PAGE_TYPE}/${resolvedParams.slug}`
  }));
}

export default async function CityGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = guides[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  // Improved city name parsing logic
  // e.g. "resume-new-york" -> "New York"
  const cityName = resolvedParams.slug
    .replace('resume-', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {data.faq && <JsonLd schema={buildFaqSchema(data.faq)} />}

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.title}</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{data.description}</p>
        <Link
          href="/builder"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-700 transition-colors"
        >
          Build my resume for free
        </Link>
      </div>

      <div className="prose prose-lg prose-slate max-w-none text-slate-700 mt-16">
        {data.content ? (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Landing a Job in {cityName}</h2>
            <p className="mb-4">
              Every city has its own unique job market dynamics. Our city-specific guides are tailored to help you navigate local hiring trends and connect with top employers in your area.
            </p>
            <p className="mb-4">
              Using an ATS-optimized resume is especially critical in major metropolitan hubs where competition is fierce.
            </p>
          </>
        )}

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {data.faq.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-sm text-slate-600">{item.answer}</p>
            </div>
          ))}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Is there a cost for this city guide?</h3>
            <p className="text-sm text-slate-600">No, all Resume Forge city guides are 100% free as part of our mission to support job seekers everywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
