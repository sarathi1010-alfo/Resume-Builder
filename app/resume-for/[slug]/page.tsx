import { Metadata } from 'next';
import { getJobBySlug, jobTitles } from '@/lib/data';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobTitles.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: 'Job Title Not Found | Resume Forge',
      description: 'The requested job resume page could not be found.',
    };
  }

  return {
    title: `${job.title} Resume Template - Free & Editable | Resume Forge`,
    description: `Create a professional ${job.title} resume with our free template. Includes ${job.skills.slice(0, 3).join(', ')} skills. Salary range: ${job.salaryRange}. Build now!`,
    openGraph: {
      title: `${job.title} Resume Template - Free & ATS-Friendly`,
      description: `Professional ${job.title} resume template with expert tips. Free to use with instant PDF download and ATS scoring.`,
      type: 'website',
    },
  };
}

export default async function JobResumePage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Title Not Found</h1>
        <p className="text-gray-600 mb-8">The requested resume template could not be found.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${job.title} Resume Template`,
    description: `Free professional resume template for ${job.title} positions. Includes skills, certifications, and sample bullet points.`,
    hasPart: {
      '@type': 'Article',
      headline: `How to Write a ${job.title} Resume`,
      articleBody: `Complete guide to creating an effective ${job.title} resume with proper formatting, key skills, and industry-specific tips.`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/resume-for" className="hover:text-blue-600">Resume Templates</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{job.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Resume Template for {job.title} – Free & Editable
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Create a professional {job.title} resume that stands out to hiring managers and passes ATS systems. 
            Our template includes industry-specific sections, relevant skills, and expert-approved formatting.
            Average salary range: <span className="font-semibold text-blue-600">{job.salaryRange}</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Edit This {job.title} Resume →
            </Link>
            <Link
              href="/blog/best-resume-format-2025"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
            >
              View Resume Guide
            </Link>
          </div>
        </header>

        {/* Key Skills Section */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Essential Skills for {job.title}s
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-700">
            Make sure to highlight these key skills prominently in your resume. 
            Hiring managers and ATS systems specifically look for these competencies when screening {job.title} candidates.
          </p>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Recommended Certifications
          </h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <ul className="space-y-3">
              {job.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-800">{cert}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Include relevant certifications in a dedicated section near the top of your resume, 
              especially if they&apos;re required or highly valued in your industry.
            </p>
          </div>
        </section>

        {/* Sample Bullet Points */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Sample Resume Bullet Points
          </h2>
          <p className="text-gray-700 mb-6">
            Use these proven bullet points as inspiration for your own experience. 
            Customize them with your specific achievements and metrics.
          </p>
          <div className="space-y-4">
            {job.sampleBullets.map((bullet, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 p-4 rounded-r-lg shadow-sm">
                <p className="text-gray-800 italic">&quot;{bullet}&quot;</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            <strong>Pro tip:</strong> Always quantify your achievements with numbers, percentages, or dollar amounts 
            to demonstrate concrete impact.
          </p>
        </section>

        {/* How to Structure Your Resume */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            How to Structure Your {job.title} Resume
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Contact Information</h3>
              <p className="text-gray-700">Name, phone, email, LinkedIn profile, and portfolio/GitHub link if applicable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">2. Professional Summary</h3>
              <p className="text-gray-700">
                2-3 sentences highlighting your years of experience, key expertise, and career objectives tailored to {job.title} roles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">3. Skills Section</h3>
              <p className="text-gray-700">
                List the technical and soft skills mentioned above. Group them by category for easy scanning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">4. Work Experience</h3>
              <p className="text-gray-700">
                Reverse chronological order. Use action verbs and quantify achievements. Focus on results, not just responsibilities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">5. Education & Certifications</h3>
              <p className="text-gray-700">
                Degree, institution, graduation year. Include relevant certifications listed above.
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-resume-format-2025" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Best Resume Format for 2025</h3>
              <p className="text-sm text-gray-600">Learn the formatting rules top recruiters prefer.</p>
            </Link>
            <Link href="/blog/how-long-should-resume-be" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">How Long Should a Resume Be?</h3>
              <p className="text-sm text-gray-600">The definitive answer on resume length.</p>
            </Link>
            <Link href="/vs/zety" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Resume Forge vs Zety</h3>
              <p className="text-sm text-gray-600">Why we&apos;re 100% free while others charge.</p>
            </Link>
            <Link href="/use-cases/career-change-resume" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Career Change Resume Guide</h3>
              <p className="text-sm text-gray-600">Tips for transitioning to a new field.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your {job.title} Resume?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our free builder to create a professional, ATS-friendly resume in minutes.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Start Building Now →
          </Link>
        </section>
      </article>
    </>
  );
}
