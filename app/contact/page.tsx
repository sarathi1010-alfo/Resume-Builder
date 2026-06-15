import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';

export const metadata = resolveMetadata(
  buildStaticPageMeta({
    title: 'Contact Us | ResumeBuilder',
    description: 'Get in touch with the ResumeBuilder team',
    slug: '/contact',
  })
);

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-600 mb-8 text-center">
          Have a question or feedback about ResumeBuilder? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        <form className="space-y-6" action="https://formspree.io/f/your_form_id_here" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white font-medium py-3 px-4 rounded-md hover:bg-primary-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Or email us directly at <a href="mailto:support@alfo.online" className="text-primary-600 hover:underline">support@alfo.online</a>
          </p>
        </div>
      </div>
    </div>
  );
}
