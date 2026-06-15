import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';

export const metadata = resolveMetadata(
  buildStaticPageMeta({
    title: 'Terms of Service | ResumeBuilder',
    description: 'Terms of Service for ResumeBuilder',
    slug: '/terms-of-service',
  })
);

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Welcome to ResumeBuilder, a part of the alfo.online ecosystem. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Use of the Service</h2>
        <p className="mb-4">
          You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter&quot;, &quot;spam&quot;, or any other similar solicitation.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are and will remain the exclusive property of ResumeBuilder and its licensors.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at: <a href="mailto:terms@alfo.online" className="text-primary-600 hover:underline">terms@alfo.online</a>
        </p>
      </div>
    </div>
  );
}
