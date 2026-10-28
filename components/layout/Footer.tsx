import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-auto no-print">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <Link href="/" className="text-lg font-bold text-slate-900 tracking-tight inline-flex items-center min-h-[44px]">
            Resume<span className="text-primary-600">Forge</span>
          </Link>
          <p className="mt-2 text-sm text-slate-500">
            Create professional, ATS-friendly resumes in minutes. No signup required.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Tools Hub</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="https://asciiforge.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">ASCII Forge</a></li>
            <li><a href="https://qr.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">QR Generator</a></li>
            <li><a href="https://mockbrand.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Mockup Forge</a></li>
            <li><a href="https://packfit.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Pack Fit</a></li>
            <li><a href="https://alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 font-medium inline-flex items-center min-h-[44px]">View All Tools</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Popular Locations</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/city-guides/austin" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Austin</Link></li>
            <li><Link href="/city-guides/resume-chicago" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Chicago</Link></li>
            <li><Link href="/city-guides/resume-new-york" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">New York</Link></li>
            <li><Link href="/city-guides/resume-los-angeles" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Los Angeles</Link></li>
            <li><Link href="/city-guides/resume-san-diego" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">San Diego</Link></li>
            <li><Link href="/city-guides/resume-philadelphia" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Philadelphia</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Popular Templates</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/resume-templates/data-analyst" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Data Analyst</Link></li>
            <li><Link href="/resume-templates/project-manager" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Project Manager</Link></li>
            <li><Link href="/resume-templates/sales-representative" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Sales Representative</Link></li>
            <li><Link href="/resume-templates/customer-service-representative" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Customer Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Legal & Social</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/privacy-policy" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Contact</Link></li>
            <li><Link href="/about" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">About</Link></li>
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">Twitter / X</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 inline-flex items-center min-h-[44px]">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} alfo.online — All rights reserved
        </p>
      </div>
    </footer>
  );
}
