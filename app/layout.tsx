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
  },
};

import { RecentlyLaunchedStrip } from '@/components/shared/RecentlyLaunchedStrip';
import Script from 'next/script';

import { JsonLd } from '@/components/seo/JsonLd';
import { buildOrganizationSchema } from '@/lib/seo/buildSchema';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Basic Schema.org JSON-LD
  const webAppJsonLd = {
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
        <JsonLd schema={webAppJsonLd} />
        <JsonLd schema={buildOrganizationSchema()} />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        <RecentlyLaunchedStrip />
        {children}
      </body>
    </html>
  );
}
