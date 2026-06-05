import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume-Builder | Create an ATS-friendly resume',
  description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
  other: {
    'google-adsense-account': 'ca-pub-6393936268623951',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        {children}
      </body>
    </html>
  );
}
