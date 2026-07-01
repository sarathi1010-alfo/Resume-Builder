import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string; content?: string; faq: Array<{question: string, answer: string}> }> = {
  'resume-new-york': {
    title: 'New York Resume Guide',
    description: 'Optimize your resume for the competitive New York job market with our specialized guide.',
    content: `
      <h2>Conquering the New York Job Market: A Resume Strategy</h2>
      <p>New York City is home to some of the world's most prestigious organizations across finance, media, technology, and healthcare. In such a high-velocity environment, your resume must be more than just a list of jobs—it must be a high-performance marketing tool. Our New York resume guide is designed to help you navigate the unique expectations of NYC recruiters and pass the advanced ATS systems used by Fortune 500 companies headquartered in the Big Apple.</p>

      <h3>Emphasize Pedigree and Reputation</h3>
      <p>In New York, reputation matters. If you have worked for well-known firms or attended top-tier institutions, ensure these names are prominent. However, don't rely on brand names alone. Connect your pedigree to tangible results. For example: "Led cross-functional teams at a Tier 1 investment bank to automate regulatory reporting, saving $10M in annual compliance costs." This combines local prestige with universal business value.</p>

      <h3>Quantify Your "New York Minute" Impact</h3>
      <p>NYC employers value efficiency and the ability to thrive under pressure. Use your work experience section to demonstrate your capacity for high-volume, high-stakes output. Quantify your achievements with metrics that show scale. Did you manage a $500M portfolio? Did you produce 10+ high-profile events per quarter? Highlighting your ability to deliver at "New York speed" is a significant differentiator.</p>

      <h3>The Importance of Local Networking</h3>
      <p>While your resume needs to pass the ATS, many New York roles are influenced by internal referrals. Include a clean, professional link to your LinkedIn profile and ensure it is fully optimized with the same keywords used on your resume. Mentioning participation in NYC-based professional associations or industry groups can also signal that you are an active part of the local professional ecosystem.</p>

      <h3>Formatting for NYC Executive Presence</h3>
      <p>Whether you are applying for a role on Wall Street or a creative agency in Brooklyn, your resume should project executive presence. Use a sophisticated, minimalist layout with a single-column format. This ensures that your information is parsed with 100% accuracy by ATS software like Workday or Greenhouse, while providing a frictionless reading experience for busy NYC hiring managers.</p>
    `,
    faq: [
      { question: 'What do NY employers look for?', answer: 'New York employers often look for quantifiable achievements, high-stakes experience, and the ability to thrive in fast-paced environments.' },
      { question: 'Should I list my NYC address?', answer: 'If you are already local, listing a New York address can be helpful as it eliminates relocation concerns for the employer.' },
      { question: 'What is the average response time for NYC applications?', answer: 'Due to high volume, it can take 2-4 weeks to hear back from major NYC firms, though smaller startups may move faster.' }
    ]
  }
};


export async function generateStaticParams() {
  return [
    { slug: 'resume-new-york' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/city-guides/${resolvedParams.slug}`
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
        {data.content && <div dangerouslySetInnerHTML={{ __html: data.content }} />}

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Is this guide actually free?</h3>
            <p className="m-0 text-slate-700">Yes, all Resume Forge resources, including our detailed city guides and builder tool, are 100% free for job seekers. Our goal is to democratize career success tools.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Will these tips work for other cities?</h3>
            <p className="m-0 text-slate-700">While this guide focuses on New York, the underlying principles of ATS optimization and quantifiable achievements are universal across all competitive job markets.</p>
          </div>

          {data.faq.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">{item.question}</h3>
              <p className="m-0 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
