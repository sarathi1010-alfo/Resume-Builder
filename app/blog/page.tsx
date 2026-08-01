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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">ResumeForge Blog – Resume Guides, ATS Tips & Career Advice</h1>
          <p className="text-xl text-slate-600 mb-12">
            Welcome to the ResumeForge blog. We provide expert, data-driven advice on how to navigate the modern job market.
            Whether you need help optimizing your resume for Applicant Tracking Systems (ATS), choosing the perfect resume format,
            or finding industry-specific templates, our comprehensive guides have you covered. Discover actionable job search strategies
            and insights to help you land your dream job faster. Our mission is to equip you with the knowledge to stand out to both AI and human recruiters.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">ATS Optimization</span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">Resume Formats</span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">Industry Templates</span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">Use-Case Guides</span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">Comparisons</span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">Job Search Strategy</span>
            </div>
          </div>

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
              <li><Link href="/" className="hover:text-primary-600 hover:underline">Home</Link></li>
              <li><Link href="/builder" className="hover:text-primary-600 hover:underline">Resume Builder</Link></li>
              <li><Link href="/resume-for" className="hover:text-primary-600 hover:underline">Resume Templates by Job Title</Link></li>
              <li><Link href="/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026" className="hover:text-primary-600 hover:underline">The Ultimate Guide to ATS-Friendly Resumes in 2026</Link></li>
              <li><Link href="/blog/best-resume-format-2025" className="hover:text-primary-600 hover:underline">Best Resume Format for 2025</Link></li>
              <li><Link href="/vs/canva" className="hover:text-primary-600 hover:underline">ResumeForge vs Canva</Link></li>
              <li><Link href="/vs/zety" className="hover:text-primary-600 hover:underline">ResumeForge vs Zety (100% Free)</Link></li>
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
