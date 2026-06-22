import { Metadata } from 'next';
import { jobTitles } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume Templates by Job Title | Resume Forge',
  description: 'Professional resume templates for 20+ job titles including Software Engineer, Marketing Manager, Nurse, and more. Free ATS-friendly templates with expert tips.',
  openGraph: {
    title: 'Resume Templates by Job Title',
    description: 'Industry-specific resume templates with skills, certifications, and sample bullet points for your profession.',
    type: 'website',
  },
};

export default function JobTemplatesIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resume Templates by Job Title',
    description: 'Professional resume templates tailored to specific job titles and industries.',
    numberOfItems: jobTitles.length,
  };

  // Group jobs by category for better organization
  const techJobs = jobTitles.filter(j => ['Software Engineer', 'Data Analyst', 'DevOps Engineer', 'UX/UI Designer'].includes(j.title));
  const businessJobs = jobTitles.filter(j => ['Marketing Manager', 'Project Manager', 'Business Analyst', 'Operations Manager', 'Financial Analyst', 'Accountant'].includes(j.title));
  const healthcareJobs = jobTitles.filter(j => ['Registered Nurse'].includes(j.title));
  const otherJobs = jobTitles.filter(j => !techJobs.includes(j) && !businessJobs.includes(j) && !healthcareJobs.includes(j));

  const renderJobGrid = (jobs: typeof jobTitles, title: string) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <Link
            key={job.slug}
            href={`/resume-for/${job.slug}`}
            className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{job.salaryRange}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.skills.slice(0, 3).map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Resume Templates</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Resume Templates by Job Title
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose a profession-specific resume template with industry-relevant skills, 
            recommended certifications, and expert-approved sample bullet points. 
            All templates are ATS-friendly and 100% free to use.
          </p>
        </header>

        {/* Why Job-Specific Matters */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Why Use a Job-Specific Template?
            </h2>
            <p className="text-blue-800">
              Different industries value different skills, formats, and sections. 
              Our job-specific templates include the exact keywords hiring managers and ATS systems 
              look for in your field, increasing your chances of landing an interview.
            </p>
          </div>
        </section>

        {/* Job Categories */}
        {techJobs.length > 0 && renderJobGrid(techJobs, 'Technology & IT')}
        {businessJobs.length > 0 && renderJobGrid(businessJobs, 'Business & Finance')}
        {healthcareJobs.length > 0 && renderJobGrid(healthcareJobs, 'Healthcare')}
        {otherJobs.length > 0 && renderJobGrid(otherJobs, 'Other Professions')}

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-xl p-8">
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
            <Link href="/vs/canva" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Resume Forge vs Canva</h3>
              <p className="text-sm text-gray-600">Why Canva resumes often fail ATS parsing.</p>
            </Link>
            <Link href="/location" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Resume Builder by Location</h3>
              <p className="text-sm text-gray-600">City-specific guides for 50+ locations.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Use our free builder to create an ATS-friendly resume tailored to your profession.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Start Building Now →
          </Link>
        </section>
      </article>
    </>
  );
}
