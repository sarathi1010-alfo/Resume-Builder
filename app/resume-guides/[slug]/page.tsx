import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string; faq: Array<{question: string, answer: string}> }> = {
  'entry-level': {
    title: 'Entry Level Resume Guide',
    description: 'Learn how to write a resume with no experience using our comprehensive entry level guide.',
    faq: [
      { question: 'How do I write an entry level resume?', answer: 'Focus on your education, internships, academic projects, and relevant coursework to demonstrate potential.' },
      { question: 'Should I include my GPA?', answer: 'Include your GPA if it is 3.5 or higher, or if specifically requested by the employer.' },
      { question: 'How long should an entry level resume be?', answer: 'A single page is the absolute standard for entry level candidates.' }
    ]
  },
  'executive': {
    title: 'Executive Resume Guide',
    description: 'Format your extensive leadership experience correctly with our expert executive resume guide.',
    faq: [
      { question: 'How long should an executive resume be?', answer: 'Two pages is the standard for executive resumes to allow space for significant leadership achievements.' },
      { question: 'Should I include a board member section?', answer: 'Yes, any board or advisory roles should be listed to demonstrate professional authority.' },
      { question: 'How do I highlight executive impact?', answer: 'Focus on high-level metrics: revenue growth, EBITDA improvement, and organizational restructuring results.' }
    ]
  },
  'freelancer': {
    title: 'Freelancer Resume Guide',
    description: 'Showcase your client projects and diverse skill set effectively with our freelancer resume guide.',
    faq: [
      { question: 'How do I list freelance work?', answer: 'Group projects by client or by skill set to show the breadth and depth of your professional experience.' },
      { question: 'Do I need a separate portfolio?', answer: 'For freelancers, a link to a digital portfolio is essential to provide verifiable proof of your work.' },
      { question: 'How do I handle gaps between contracts?', answer: 'List your freelance business as a single continuous entry to avoid looking like you have gaps in employment.' }
    ]
  }
};


export async function generateStaticParams() {
  return [
    { slug: 'entry-level' },
    { slug: 'executive' },
    { slug: 'freelancer' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/resume-guides/${resolvedParams.slug}`
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
