import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import programmaticData from '@/data/programmatic-pages.json';

const PAGE_TYPE = 'resume-guides';

interface ProgrammaticPage {
  title: string;
  description: string;
  faq: Array<{ question: string; answer: string }>;
}

const guides = programmaticData[PAGE_TYPE] as Record<string, ProgrammaticPage>;

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = guides[resolvedParams.slug];
  if (!data) return { title: 'Guide Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/${PAGE_TYPE}/${resolvedParams.slug}`
  }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = guides[resolvedParams.slug];

  if (!data) {
    notFound();
  }

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
          Start building for free
        </Link>
      </div>

      <div className="prose max-w-none text-slate-700 mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">Expert Tips for {resolvedParams.slug.replace(/-/g, ' ')}s</h2>
        <p className="mb-4">
          Navigating the competitive job market requires a strategic approach. This guide is designed to provide you with actionable advice to optimize your resume for both Applicant Tracking Systems and human recruiters.
        </p>
        <p className="mb-4">
          By focusing on your unique value proposition and utilizing industry-standard formatting, you can ensure your application stands out from the crowd.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">FAQ</h2>
        <div className="space-y-4">
          {data.faq.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-sm text-slate-600">{item.answer}</p>
            </div>
          ))}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Is this guide really free?</h3>
            <p className="text-sm text-slate-600">Yes, Resume Forge provides all its resources, templates, and guides completely free of charge to help you succeed in your career.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
