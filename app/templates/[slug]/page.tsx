import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string }> = {
  'marketing-resume': {
    title: 'Marketing Resume Template & Builder',
    description: 'Build a standout marketing resume. Free ATS-friendly templates optimized for marketing professionals, SEO specialists, and copywriters.',
  },
  'software-engineer-resume': {
    title: 'Software Engineer Resume Template & Builder',
    description: 'Create an ATS-friendly software engineer resume. Highlight your tech stack and projects with our free templates.',
  },
  'fresher-resume-format': {
    title: 'Best Fresher Resume Format 2025',
    description: 'No experience? No problem. Use our specialized fresher resume format to highlight your education, projects, and potential.',
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/templates/${resolvedParams.slug}`
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

        <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900">FAQ</h3>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Is this template actually free?</h4>
          <p className="mb-4 text-sm text-slate-600">Yes, Resume Forge is 100% free with no paywalls or watermarks. We monetize through minimal, non-intrusive advertising.</p>

          <h4 className="font-semibold text-slate-900 mb-2">Will this pass ATS?</h4>
          <p className="text-sm text-slate-600">Yes. We use standard fonts and simple layouts specifically engineered to be readable by Applicant Tracking Systems.</p>
        </div>
      </div>
    </div>
  );
}
