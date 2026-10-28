import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedTools } from '@/components/shared/RelatedTools';
import { AdSlot } from '@/components/shared/AdSlot';
import { FileText, LayoutTemplate, Printer, CheckCircle2, CheckCircle, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ResumeForge Free ATS Resume Builder",
    "url": "https://resumeforge.alfo.online/",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Build ATS-friendly resumes with real-time scoring and instant PDF export. 100% free ats resume builder with professional formatting and no fees."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://resumeforge.alfo.online/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build an ATS-Friendly Resume with ResumeForge",
    "description": "Step-by-step instructions to build, optimize, and export an ATS-compliant resume.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose ATS Template",
        "text": "Select from recruiter-approved single-column and hybrid layouts built specifically to pass enterprise ATS parsers."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Experience & Skills",
        "text": "Fill in your work history, education, and bullet points using action-verb prompts and quantifiable achievement formats."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Check Real-Time ATS Score",
        "text": "Review instant feedback on keyword density, formatting hygiene, and section completeness to maximize parser match."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Export Clean PDF",
        "text": "Download a clean, machine-readable PDF ready for direct job portal submission with zero watermarks or subscription paywalls."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a resume ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ATS-friendly resume uses clean single-column hierarchy, standard headings (Experience, Education, Skills), machine-readable fonts, and avoids tables, text boxes, and complex graphics that confuse parsers."
        }
      },
      {
        "@type": "Question",
        "name": "Does ResumeForge charge for PDF export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. ResumeForge offers 100% free PDF downloads with no credit card requirement, no hidden trial paywalls, and no watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "How does the real-time ATS scoring algorithm work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ATS scoring engine parses your resume content for essential structural sections, quantifiable achievements, action verbs, and keyword relevance against modern ATS parser requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is my personal career data stored on your servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. ResumeForge saves your data locally in your browser storage (IndexedDB/LocalStorage), ensuring complete privacy and confidentiality."
        }
      },
      {
        "@type": "Question",
        "name": "Can I import my existing LinkedIn profile or resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can paste text or upload an existing resume to auto-populate sections and reformat into an ATS-compliant layout in seconds."
        }
      }
    ]
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                100% Free ATS Resume Builder & Analyzer
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Build an ATS-Friendly Resume That Gets Interviews
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Create hiring-manager and ATS-compliant resumes with real-time keyword scoring and clean typography. ResumeForge formats your experience into clean single-column layouts proven to pass applicant tracking systems like Workday, Taleo, and Greenhouse. Export pixel-perfect PDFs for free with zero sign-up gates, watermarks, or subscription traps.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/builder"
                  role="button"
                  className="btn w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 min-h-[44px] min-w-[44px] text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition-colors"
                >
                  Build your resume now
                </Link>
                <Link
                  href="/builder"
                  role="button"
                  className="btn w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 min-h-[44px] min-w-[44px] text-base font-semibold text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  View templates
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500">Free forever • No credit card needed</p>
            </div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute top-0 left-0 right-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        </section>

        {/* Top AdSlot */}
        <div className="container mx-auto px-4 py-4">
          <AdSlot type="leaderboard" />
        </div>

        {/* Value Proposition */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to land the interview</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our tools are designed to help you bypass automated screeners and impress human recruiters.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <LayoutTemplate className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Live Visual Editing</h3>
                <p className="text-slate-600">See changes instantly as you type. Our editor gives you immediate feedback without needing to click preview.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 id="ats-score-feedback" className="text-xl font-bold text-slate-900 mb-3">ATS Score Feedback</h3>
                <p className="text-slate-600">Built-in rules verify your content against common Applicant Tracking System requirements to ensure you pass the screeners.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <Printer className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Instant PDF Export</h3>
                <p className="text-slate-600">Generate a print-ready, perfectly formatted PDF output in one click, exactly as it appears on your screen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step How it works */}
        <section id="how-it-works" className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
              <p className="text-lg text-slate-600">Four easy steps to generate and download an ATS-optimized professional resume</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-bold rounded-full mb-4">Step 1</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Choose ATS Template</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Select from recruiter-approved single-column and hybrid layouts built specifically to pass enterprise ATS parsers like Workday and Taleo.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-bold rounded-full mb-4">Step 2</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Enter Experience & Skills</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fill in your work history, education, and bullet points using action-verb prompts and quantifiable achievement formats that impress hiring managers.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-bold rounded-full mb-4">Step 3</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Check Real-Time ATS Score</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Review instant feedback on keyword density, formatting hygiene, and section completeness to maximize parser match before you submit.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-bold rounded-full mb-4">Step 4</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Export Clean PDF</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Download a clean, machine-readable PDF ready for direct job portal submission with zero watermarks or subscription paywalls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOM FAQ Accordion Section */}
        <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Common questions about ATS optimization, formatting, and PDF downloads</p>
            </div>

            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-xl bg-white p-6 open:shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 text-lg">
                  <span>What makes a resume ATS-friendly?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  An ATS-friendly resume uses clean single-column hierarchy, standard headings (Experience, Education, Skills), machine-readable fonts, and avoids tables, text boxes, and complex graphics that confuse parsers.
                </p>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-6 open:shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 text-lg">
                  <span>Does ResumeForge charge for PDF export?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  No. ResumeForge offers 100% free PDF downloads with no credit card requirement, no hidden trial paywalls, and no watermarks.
                </p>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-6 open:shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 text-lg">
                  <span>How does the real-time ATS scoring algorithm work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  The ATS scoring engine parses your resume content for essential structural sections, quantifiable achievements, action verbs, and keyword relevance against modern ATS parser requirements.
                </p>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-6 open:shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 text-lg">
                  <span>Is my personal career data stored on your servers?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  No. ResumeForge saves your data locally in your browser storage (IndexedDB/LocalStorage), ensuring complete privacy and confidentiality.
                </p>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-6 open:shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 text-lg">
                  <span>Can I import my existing LinkedIn profile or resume?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Yes, you can paste text or upload an existing resume to auto-populate sections and reformat into an ATS-compliant layout in seconds.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to stand out?</h2>
            <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">Stop fighting with Word formatting. Build a professional resume that gets results.</p>
            <Link
              href="/builder"
              role="button"
              className="btn inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 min-h-[44px] min-w-[44px] text-base font-bold text-primary-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              Start Building for Free
            </Link>
          </div>
        </section>

        {/* Popular Resources Section - Internal Linking */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Resources</h2>
              <p className="text-lg text-slate-600">Expert guides and comparisons to help you create the perfect resume</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Resume Forge vs Canva</h3>
                <p className="text-sm text-slate-600 mb-4">Why ATS screeners prefer standard formats over design tools</p>
                <Link href="/vs/canva" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Learn more &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Resume Forge vs Zety</h3>
                <p className="text-sm text-slate-600 mb-4">The 100% free alternative with no hidden fees</p>
                <Link href="/vs/zety" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Learn more &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Student Resume Templates</h3>
                <p className="text-sm text-slate-600 mb-4">Create a professional resume for your first job or internship</p>
                <Link href="/use-cases/student-resume" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Get started &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Career Change Resume</h3>
                <p className="text-sm text-slate-600 mb-4">Highlight transferable skills when switching industries</p>
                <Link href="/use-cases/career-change-resume" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Get started &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Best Resume Format 2025</h3>
                <p className="text-sm text-slate-600 mb-4">Discover the formatting rules top recruiters prefer</p>
                <Link href="/blog/best-resume-format-2026" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Read guide &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">How Long Should a Resume Be?</h3>
                <p className="text-sm text-slate-600 mb-4">The definitive answer on resume length for your experience level</p>
                <Link href="/blog/how-long-should-resume-be" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Read guide &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Resume Templates by Job</h3>
                <p className="text-sm text-slate-600 mb-4">Industry-specific templates for 20+ professions</p>
                <Link href="/resume-for" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Browse templates &rarr;
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Resume Builder by Location</h3>
                <p className="text-sm text-slate-600 mb-4">City-specific guides for 50+ US locations</p>
                <Link href="/location" className="text-primary-600 font-medium hover:underline text-sm inline-flex items-center min-h-[44px]">
                  Find your city &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom AdSlot */}
        <div className="container mx-auto px-4 pt-12 pb-4">
          <AdSlot type="leaderboard" />
        </div>

        {/* Ecosystem Cross-linking */}
        <RelatedTools />
      </main>
      <Footer />
    </>
  );
}
