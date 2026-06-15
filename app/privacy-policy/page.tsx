import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';

export const metadata = resolveMetadata(
  buildStaticPageMeta({
    title: 'Privacy Policy | ResumeBuilder',
    description: 'Privacy Policy for ResumeBuilder',
    slug: '/privacy-policy',
  })
);

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          At ResumeBuilder, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information.</li>
          <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-4">Use of Your Information</h2>
        <p className="mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Create and manage your account.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@alfo.online" className="text-primary-600 hover:underline">privacy@alfo.online</a>
        </p>
      </div>
    </div>
  );
}
