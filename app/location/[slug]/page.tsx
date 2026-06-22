import { Metadata } from 'next';
import { getCityBySlug, cities } from '@/lib/data';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: 'City Not Found | Resume Forge',
      description: 'The requested city page could not be found.',
    };
  }

  return {
    title: `Resume Builder in ${city.city}, ${city.state} | Free & ATS-Friendly`,
    description: `Build your professional resume in ${city.city}, ${city.state}. Trusted by professionals at ${city.companies.slice(0, 2).join(', ')}. Average salary: ${city.avgSalary}. Start free today!`,
    openGraph: {
      title: `Resume Builder in ${city.city}, ${city.state}`,
      description: `Create an ATS-friendly resume tailored for ${city.city} employers. Free to use with instant PDF download.`,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
        <p className="text-gray-600 mb-8">The requested location page could not be found.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Resume Builder in ${city.city}, ${city.state}`,
    description: `Professional resume builder for ${city.city} job seekers. Create ATS-friendly resumes trusted by local employers.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.city,
      addressRegion: city.state,
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
            <li><Link href="/location" className="hover:text-blue-600">Locations</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{city.city}, {city.state}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The #1 Free Resume Builder for {city.city} Professionals
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {city.city}&apos;s booming job market needs clean, ATS-friendly resumes. 
            Whether you&apos;re applying to {city.companies[0]}, {city.companies[1]}, or other top employers in the area, 
            Resume Forge helps you create a professional resume that passes applicant tracking systems and lands interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Build Your {city.city} Resume Now →
            </Link>
            <Link
              href="/vs/canva"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
            >
              Why Choose Resume Forge?
            </Link>
          </div>
        </header>

        {/* Local Market Stats */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {city.city} Job Market Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-2">Average Salary</p>
              <p className="text-3xl font-bold text-blue-600">{city.avgSalary}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-2">Top Employers</p>
              <ul className="space-y-1">
                {city.companies.slice(0, 3).map((company, i) => (
                  <li key={i} className="font-medium text-gray-900">{company}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-2">Local Job Board</p>
              <p className="text-xl font-semibold text-gray-900">{city.jobBoard}</p>
            </div>
          </div>
        </section>

        {/* Why ATS Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Why {city.city} Job Seekers Need ATS-Friendly Resumes
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Major {city.city} employers like {city.companies[0]} and {city.companies[1]} use Applicant Tracking Systems (ATS) 
              to screen resumes before they reach human recruiters. In fact, over 75% of resumes are rejected by ATS before 
              a hiring manager ever sees them.
            </p>
            <p className="text-gray-700 mb-4">
              Resume Forge is specifically designed to beat ATS software. Our templates use clean formatting, 
              standard section headings, and optimized layouts that ensure your resume gets parsed correctly.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>✓ Clean, ATS-friendly formatting</li>
              <li>✓ Standard section headings that ATS recognizes</li>
              <li>✓ No columns, graphics, or tables that confuse parsers</li>
              <li>✓ Instant ATS score to verify compatibility</li>
              <li>✓ Professional PDF export ready for {city.jobBoard} applications</li>
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            How to Build Your Resume in 3 Easy Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="font-semibold text-lg mb-2">Choose a Template</h3>
              <p className="text-gray-700">Select from our ATS-approved resume templates designed for {city.city} industries.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="font-semibold text-lg mb-2">Fill in Your Details</h3>
              <p className="text-gray-700">Our real-time editor guides you through each section with smart suggestions.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="font-semibold text-lg mb-2">Download & Apply</h3>
              <p className="text-gray-700">Get your ATS-scored PDF instantly and start applying on {city.jobBoard}.</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Related Resources for {city.city} Job Seekers
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-resume-format-2025" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Best Resume Format for 2025</h3>
              <p className="text-sm text-gray-600">Learn the formatting rules top {city.city} recruiters prefer.</p>
            </Link>
            <Link href="/blog/how-long-should-resume-be" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">How Long Should a Resume Be?</h3>
              <p className="text-sm text-gray-600">The definitive answer on resume length for your experience level.</p>
            </Link>
            <Link href="/vs/canva" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Resume Forge vs Canva</h3>
              <p className="text-sm text-gray-600">Why Canva resumes often fail ATS parsing.</p>
            </Link>
            <Link href="/use-cases/student-resume" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Student Resume Templates</h3>
              <p className="text-sm text-gray-600">Perfect for new graduates entering the {city.city} job market.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Land Your Dream Job in {city.city}?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of {city.city} professionals who have created winning resumes with Resume Forge.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Start Building Your Free Resume →
          </Link>
        </section>
      </article>
    </>
  );
}
