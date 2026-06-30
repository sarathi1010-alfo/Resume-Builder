import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string; faq: Array<{question: string, answer: string}> }> = {
  'marketing-manager': {
    title: 'Marketing Manager Resume Template',
    description: 'Build a standout marketing manager resume with our ATS-friendly templates.',
    faq: [{ question: 'What skills should a marketing manager include?', answer: 'Include SEO, content strategy, and data analysis.' }]
  },
  'software-engineer': {
    title: 'Software Engineer Resume Template',
    description: 'Create an ATS-friendly software engineer resume highlighting your tech stack.',
    faq: [{ question: 'Should I include GitHub links?', answer: 'Yes, always include links to your portfolio or GitHub.' }]
  },
  'registered-nurse': {
    title: 'Registered Nurse Resume Template',
    description: 'Highlight your clinical skills and patient care experience with our nursing resume template.',
    faq: [{ question: 'How do I list clinical hours?', answer: 'List them prominently under your education or clinical experience section.' }]
  },
  'teacher': {
    title: 'Teacher Resume Template',
    description: 'Showcase your lesson planning and classroom management skills with our teacher template.',
    faq: [{ question: 'Should I list my certifications?', answer: 'Yes, teaching certifications are crucial and should be highly visible.' }]
  }
};


export async function generateStaticParams() {
  return [
    { slug: 'marketing-manager' },
    { slug: 'software-engineer' },
    { slug: 'registered-nurse' },
    { slug: 'teacher' }
  ];
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
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">Is this template actually free?</h3>
          <p className="mb-4 text-sm text-slate-600">Yes, Resume Forge is 100% free with no paywalls or watermarks. We monetize through minimal, non-intrusive advertising.</p>

          <h3 className="font-semibold text-slate-900 mb-2">Will this pass ATS?</h3>
          <p className="text-sm text-slate-600">Yes. We use standard fonts and simple layouts specifically engineered to be readable by Applicant Tracking Systems.</p>
        </div>
      </div>
    </div>
  );
}
