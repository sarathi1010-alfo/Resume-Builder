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
          <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/builder" className="hover:text-primary-600">Resume Builder</Link></li>
            <li><Link href="/builder" className="hover:text-primary-600">ATS Checker</Link></li>
            <li><Link href="/builder" className="hover:text-primary-600">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="#" className="hover:text-primary-600">Resume Examples</Link></li>
            <li><Link href="#" className="hover:text-primary-600">Career Guides</Link></li>
            <li><Link href="#" className="hover:text-primary-600">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="#" className="hover:text-primary-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary-600">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary-600">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Resume-Builder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
