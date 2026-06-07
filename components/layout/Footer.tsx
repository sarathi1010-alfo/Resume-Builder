import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-auto no-print">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-lg font-bold text-slate-900 tracking-tight">
            Resume<span className="text-primary-600">Builder</span>
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            Create professional, ATS-friendly resumes in minutes. No signup required.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Tools Hub</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="https://pdfutility.app" className="hover:text-primary-600">PDF Utility</Link></li>
            <li><Link href="https://qrgenerator.alfo.online" className="hover:text-primary-600">QR Generator</Link></li>
            <li><Link href="https://paletteflow.alfo.online" className="hover:text-primary-600">Palette Flow</Link></li>
            <li><Link href="https://packfit.alfo.online" className="hover:text-primary-600">Pack Fit</Link></li>
            <li><Link href="https://hub.alfo.online" className="hover:text-primary-600 font-medium">View All Tools</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/privacy-policy" className="hover:text-primary-600">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-primary-600">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-primary-600">Contact</Link></li>
            <li><Link href="/about" className="hover:text-primary-600">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="https://twitter.com/alfo_online" className="hover:text-primary-600">Twitter</Link></li>
            <li><Link href="https://github.com/alfo-online" className="hover:text-primary-600">GitHub</Link></li>
            <li><Link href="https://linkedin.com/company/alfo-online" className="hover:text-primary-600">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 text-center">
          &copy; 2025 alfo.online — All rights reserved
        </p>
      </div>
    </footer>
  );
}
