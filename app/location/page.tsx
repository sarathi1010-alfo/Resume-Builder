import { Metadata } from 'next';
import { cities } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume Builder by Location | Resume Forge',
  description: 'Find resume building resources tailored to your city. Local job market insights, average salaries, and top employers for 50+ US cities.',
  openGraph: {
    title: 'Resume Builder by Location',
    description: 'Create location-specific resumes optimized for local job markets across the United States.',
    type: 'website',
  },
};

export default function LocationsIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resume Builder by Location',
    description: 'Location-specific resume building resources for job seekers across the United States.',
    numberOfItems: cities.length,
  };

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
            <li className="text-gray-900 font-medium">Locations</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Resume Builder by Location
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find resume building resources tailored to your local job market. 
            Each city page includes local salary data, top employers, and job board recommendations 
            to help you land interviews in your area.
          </p>
        </header>

        {/* Search/Filter Info */}
        <section className="mb-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Why Location Matters for Your Resume
            </h2>
            <p className="text-blue-800">
              Different cities have different hiring standards, preferred formats, and key industries. 
              Our location-specific guides help you tailor your resume to stand out in your local job market.
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Browse by City ({cities.length} locations)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/location/${city.slug}`}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900">{city.city}, {city.state}</h3>
                <p className="text-sm text-gray-600 mt-1">{city.avgSalary}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-resume-format-2026" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Best Resume Format for 2026</h3>
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
            <Link href="/resume-for" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Resume Templates by Job Title</h3>
              <p className="text-sm text-gray-600">Industry-specific templates for 20+ professions.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Build Your Resume?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Create a professional, ATS-friendly resume in minutes - completely free.
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
