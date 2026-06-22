import Link from 'next/link';
import seoData from '@/data/seo-content.json';
import { PopularToolsSidebar } from '@/components/shared/PopularToolsSidebar';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildBlogIndexMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/seo/buildSchema';

export const metadata = resolveMetadata(buildBlogIndexMeta());

export default async function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <JsonLd schema={buildBreadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }])} />
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Resume Tips & Career Advice</h1>
          <p className="text-xl text-slate-600 mb-12">Expert resume tips, ATS advice, and career guidance from Resume Forge.</p>

          <div className="space-y-8">
            {seoData.blogs.map((blog) => (
              <article key={blog.slug} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-primary-600 transition-colors">
                    {blog.h1 || blog.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4">{blog.description}</p>
                <Link href={`/blog/${blog.slug}`} className="text-primary-600 font-medium hover:underline inline-flex items-center">
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">More resources</h3>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/vs/canva" className="hover:text-primary-600 hover:underline">Resume Forge vs Canva</Link></li>
              <li><Link href="/vs/zety" className="hover:text-primary-600 hover:underline">Resume Forge vs Zety (100% Free)</Link></li>
              <li><Link href="/use-cases/student-resume" className="hover:text-primary-600 hover:underline">Student Resume Templates</Link></li>
              <li><Link href="/use-cases/career-change-resume" className="hover:text-primary-600 hover:underline">Career Change Resume Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-80 flex-shrink-0">
          <PopularToolsSidebar />
        </div>
      </div>
    </div>
  );
}
