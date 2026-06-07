import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm no-print">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
          Resume<span className="text-primary-600">Builder</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <div className="relative group">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
              Related Tools ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link href="https://pdfutility.app" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">PDF Utility</Link>
              <Link href="https://qrgenerator.alfo.online" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">QR Generator</Link>
              <Link href="https://paletteflow.alfo.online" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Palette Flow</Link>
              <Link href="https://packfit.alfo.online" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Pack Fit</Link>
              <Link href="https://hub.alfo.online" className="block px-4 py-2 text-sm font-medium text-primary-600 border-t border-slate-100 hover:bg-slate-50">View All Tools</Link>
            </div>
          </div>
          <Link href="/builder" className="text-sm font-medium text-slate-600 hover:text-slate-900">Templates</Link>
          <Link href="/builder" className="text-sm font-medium text-slate-600 hover:text-slate-900">ATS Checker</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-block text-xs text-slate-400 font-medium tracking-wide">Powered by alfo.online</span>
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
