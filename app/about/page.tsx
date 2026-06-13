import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';

export const metadata = resolveMetadata(
  buildStaticPageMeta({
    title: 'About | ResumeBuilder',
    description: 'Learn more about ResumeBuilder and the alfo.online ecosystem',
    slug: '/about',
  })
);

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">About ResumeBuilder</h1>

      <div className="prose max-w-none text-slate-700">
        <p className="text-lg mb-6">
          ResumeBuilder is a free, powerful tool designed to help you create professional, ATS-friendly resumes in minutes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-900">Our Mission</h2>
        <p className="mb-4">
          We believe everyone deserves a fair chance at landing their dream job. Traditional resume builders are often clunky, expensive, or trap your data behind paywalls. We built ResumeBuilder to be different: fast, free, and focused on what actually matters—getting you past automated screeners and impressing human recruiters.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-900">Part of the alfo.online Ecosystem</h2>
        <p className="mb-4">
          ResumeBuilder is proudly part of <a href="https://hub.alfo.online" className="text-primary-600 hover:underline">alfo.online</a>, a growing ecosystem of interconnected web tools. Our philosophy is simple: build high-quality, single-purpose tools that solve real problems, and make them accessible to everyone.
        </p>
        <p className="mb-4">
          By sharing underlying infrastructure, we can launch better tools faster, passing the benefits on to our users. Whether you need to compress an image, generate a QR code, or build a resume, you&apos;ll find a reliable tool in our network.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-10">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">Why choose ResumeBuilder?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Live Visual Editing:</strong> See changes instantly as you type.</li>
            <li><strong>ATS Optimization:</strong> Built-in checks to ensure your resume passes Applicant Tracking Systems.</li>
            <li><strong>Privacy First:</strong> Your data stays in your browser. We don&apos;t store your personal information on our servers.</li>
            <li><strong>100% Free:</strong> No hidden fees, no watermarks, no paywalls.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
