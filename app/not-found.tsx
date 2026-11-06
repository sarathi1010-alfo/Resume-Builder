import Link from 'next/link';
import { FileText, ArrowLeft, PlusCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Resume Forge',
  description: 'The requested page or resume template could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-2">
          <FileText className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary-600">Error 404</p>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-base">
            We couldn't find the page or resume guide you're looking for. It may have been relocated or updated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/builder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            Build Resume Now
          </Link>
        </div>
      </div>
    </div>
  );
}
