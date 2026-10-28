import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Free ATS Resume Builder | Real-Time ATS Score - ResumeForge',
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: 'https://resumeforge.alfo.online/',
  },
  openGraph: {
    title: 'Free ATS Resume Builder | Real-Time ATS Score - ResumeForge',
    description: siteConfig.description,
    url: 'https://resumeforge.alfo.online/',
    siteName: 'ResumeForge',
    images: [
      {
        url: 'https://resumeforge.alfo.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ResumeForge Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ATS Resume Builder | Real-Time ATS Score - ResumeForge',
    description: siteConfig.description,
    images: ['https://resumeforge.alfo.online/og-image.jpg'],
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
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <RecentlyLaunchedStrip />
        {children}
      </body>
    </html>
  );
}
