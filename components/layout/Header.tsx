import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm no-print">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
          Resume<span className="text-primary-600">Builder</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/builder" className="text-sm font-medium text-slate-600 hover:text-slate-900">Templates</Link>
          <Link href="/builder" className="text-sm font-medium text-slate-600 hover:text-slate-900">ATS Checker</Link>
          <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Guides</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/builder"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Build Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
