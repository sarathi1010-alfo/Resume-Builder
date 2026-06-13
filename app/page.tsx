import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedTools } from '@/components/shared/RelatedTools';
import { AdSlot } from '@/components/shared/AdSlot';
import { FileText, LayoutTemplate, Printer, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildWebsiteSchema } from '@/lib/seo/buildSchema';

export default function Home() {
  return (
    <>
      <Header />
      <JsonLd schema={buildWebsiteSchema()} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Create an ATS-friendly resume that <span className="text-primary-600">stands out</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly. No signup required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/builder"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-primary-700 transition-colors"
                >
                  Build your resume now
                </Link>
                <Link
                  href="/builder"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">ATS Score Feedback</h3>
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

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="bg-slate-100 aspect-video rounded-xl border border-slate-200 flex items-center justify-center p-8">
                    <FileText className="w-24 h-24 text-slate-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full mb-4">Step 1</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Choose a template & fill details</h3>
                  <p className="text-slate-600 text-lg">Start with our production-ready classic template. We guide you through adding your experience, education, and skills logically.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full mb-4">Step 2</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Optimize your score</h3>
                  <p className="text-slate-600 text-lg">Use our built-in ATS checker. It highlights missing contact info, short bullet points, and checks keyword density.</p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 aspect-video rounded-xl border border-slate-200 flex items-center justify-center p-8">
                    <CheckCircle2 className="w-24 h-24 text-primary-400" />
                  </div>
                </div>
              </div>
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
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              Start Building for Free
            </Link>
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
