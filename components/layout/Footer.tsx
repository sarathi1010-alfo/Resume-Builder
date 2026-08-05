import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-auto no-print">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
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
          <h3 className="font-semibold text-slate-900 mb-4">Popular Locations</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/city-guides/austin" className="hover:text-primary-600">Austin</Link></li>
            <li><Link href="/city-guides/resume-chicago" className="hover:text-primary-600">Chicago</Link></li>
            <li><Link href="/city-guides/resume-new-york" className="hover:text-primary-600">New York</Link></li>
            <li><Link href="/city-guides/resume-los-angeles" className="hover:text-primary-600">Los Angeles</Link></li>
            <li><Link href="/city-guides/resume-san-diego" className="hover:text-primary-600">San Diego</Link></li>
            <li><Link href="/city-guides/resume-philadelphia" className="hover:text-primary-600">Philadelphia</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Popular Templates</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/resume-templates/data-analyst" className="hover:text-primary-600">Data Analyst</Link></li>
            <li><Link href="/resume-templates/project-manager" className="hover:text-primary-600">Project Manager</Link></li>
            <li><Link href="/resume-templates/sales-representative" className="hover:text-primary-600">Sales Representative</Link></li>
            <li><Link href="/resume-templates/customer-service-representative" className="hover:text-primary-600">Customer Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Legal & Social</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/privacy-policy" className="hover:text-primary-600">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-primary-600">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-primary-600">Contact</Link></li>
            <li><Link href="/about" className="hover:text-primary-600">About</Link></li>
            <li><Link href="https://twitter.com/alfo_online" className="hover:text-primary-600 mt-2 block">Twitter</Link></li>
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
