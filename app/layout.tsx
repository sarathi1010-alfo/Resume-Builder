import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume-Builder | Create an ATS-friendly resume',
  description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
  keywords: 'free resume builder, ATS resume, resume maker, create resume online',
  metadataBase: new URL('https://resumeforge.alfo.online'),
  openGraph: {
    title: 'Resume-Builder | Create an ATS-friendly resume',
    description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
    url: 'https://resumeforge.alfo.online',
    siteName: 'Resume-Builder | alfo.online',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to public/
        width: 1200,
        height: 630,
        alt: 'Resume-Builder Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume-Builder | Create an ATS-friendly resume',
    description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
    images: ['/og-image.jpg'], // Make sure to add this image to public/
  },
  other: {
    'google-adsense-account': 'ca-pub-6393936268623951',
  },
};

import { RecentlyLaunchedStrip } from '@/components/shared/RecentlyLaunchedStrip';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Basic Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Resume-Builder',
    url: 'https://resumeforge.alfo.online',
    description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HZQ3QT11QC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        <RecentlyLaunchedStrip />
        {children}
      </body>
    </html>
  );
}
