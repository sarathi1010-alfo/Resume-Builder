import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Create an ATS-friendly resume`,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Create an ATS-friendly resume`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} | alfo.online`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Create an ATS-friendly resume`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  other: {
    'google-adsense-account': 'ca-pub-6393936268623951',
    'monetag': '86950f5308b2a836fd804730ef0e5e7d',
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
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
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
