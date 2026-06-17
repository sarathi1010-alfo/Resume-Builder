import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoData from '@/data/seo-content.json';
import { PopularToolsSidebar } from '@/components/shared/PopularToolsSidebar';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildBlogPostMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/buildSchema';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.blogs.find(b => b.slug === resolvedParams.slug);
  if (!data) return { title: 'Not Found' };

  return resolveMetadata(buildBlogPostMeta(data));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = seoData.blogs.find(b => b.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  const meta = buildBlogPostMeta(data);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildBreadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: data.h1 || data.title, href: `/blog/${data.slug}` }])} />
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <Link href="/blog" className="text-sm text-primary-600 hover:underline mb-6 inline-block">&larr; Back to all posts</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{data.h1}</h1>

          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-200">
            <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <p className="font-medium text-slate-900">alfo.online team</p>
              <p className="text-sm text-slate-500">Updated recently</p>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600">{data.description}</p>

            <h2>The core of the problem</h2>
            <p>
              Most applicants don&apos;t realize that their beautiful resume design is actually hurting their chances. When an Applicant Tracking System (ATS) parses a document, it strips away columns, graphics, and special fonts. If the underlying text isn&apos;t structured correctly, the system drops the information entirely.
            </p>

            <h2>How to fix it</h2>
            <p>
              Stick to standard fonts (Arial, Times New Roman, Calibri), avoid multi-column layouts, and use standard section headers (Experience, Education, Skills).
            </p>

            <div className="my-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="mt-0">Need help formatting?</h3>
              <p>We built Resume Forge exactly for this reason. It enforces constraints so you can&apos;t accidentally build a resume that an ATS won&apos;t read.</p>
              <Link href="/builder" className="text-primary-600 font-bold hover:underline">Build your ATS-friendly resume for free &rarr;</Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <PopularToolsSidebar />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return seoData.blogs.map((b) => ({
    slug: b.slug,
  }));
}
