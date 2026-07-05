import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import programmaticData from '@/data/programmatic-pages.json';

const TEMPLATE_DATA = programmaticData['resume-templates'] as Record<string, { title: string; description: string; content?: string; faq: Array<{question: string, answer: string}> }>;

export async function generateStaticParams() {
  return Object.keys(TEMPLATE_DATA).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/resume-templates/${resolvedParams.slug}`
  }));
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];

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
          Use this template for free
        </Link>
      </div>

      <div className="prose max-w-none text-slate-700 mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">Why use this {resolvedParams.slug.replace(/-/g, ' ')}?</h2>
        <p className="mb-4">
          Our programmatic SEO engine creates tailored pages like this one. This template is designed specifically to help you pass ATS screeners and impress recruiters searching for your specific skill set.
        </p>
        <p className="mb-4">
          By utilizing standard formatting, clear headings, and focusing on measurable achievements, you dramatically increase your chances of landing an interview.
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
            <h3 className="font-semibold text-slate-900 mb-2">Is this template actually free?</h3>
            <p className="text-sm text-slate-600">Yes, Resume Forge is 100% free with no paywalls or watermarks. We monetize through minimal, non-intrusive advertising.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
