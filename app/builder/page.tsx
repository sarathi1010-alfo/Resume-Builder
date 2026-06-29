import { Header } from '@/components/layout/Header';
import { EditorShell } from '@/components/builder/EditorShell';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = resolveMetadata(
  buildStaticPageMeta({
    title: 'Resume Builder | Editor',
    description: 'Build your resume with our real-time editor.',
    slug: '/builder',
  })
);

export default function BuilderPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Resume Forge Builder',
    description: 'Free, ATS-friendly resume builder that helps you create professional resumes in minutes without signup.',
    brand: {
      '@type': 'Brand',
      name: 'Resume Forge'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      <Header />
      <JsonLd schema={productSchema} />
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Build Your Resume - Free & ATS-Friendly</h1>
          <p className="text-slate-600 mb-6">Create a professional resume in minutes with our real-time editor</p>
        </div>
        <EditorShell />
      </main>
    </div>
  );
}
