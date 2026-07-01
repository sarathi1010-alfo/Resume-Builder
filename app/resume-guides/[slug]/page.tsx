import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string; content?: string; faq: Array<{question: string, answer: string}> }> = {
  'entry-level': {
    title: 'Entry Level Resume Guide',
    description: 'Learn how to write a resume with no experience using our entry level guide.',
    content: `
      <h2>Launching Your Career: The Entry-Level Resume Strategy</h2>
      <p>Starting your professional journey can be daunting, especially when you feel like you have "no experience." However, in 2025, the definition of experience has evolved. Recruiters for entry-level roles are looking for potential, foundational skills, and a proactive mindset. Our entry-level resume guide is designed to help you translate your academic and life experiences into a narrative that impresses both ATS systems and hiring managers.</p>

      <h3>Leverage Your Education and Projects</h3>
      <p>When you lack a long work history, your education becomes your primary asset. Beyond listing your degree, highlight specific coursework, academic honors, and significant projects. Treat these projects like jobs: describe the problem you solved, the tools you used (e.g., Python, Excel, CAD), and the final outcome. This provides tangible proof of your technical abilities and your capacity to execute complex tasks.</p>

      <h3>Highlight Transferable Skills</h3>
      <p>Think about your involvement in student organizations, volunteer work, or part-time jobs (even those unrelated to your target career). These experiences demonstrate critical soft skills like leadership, teamwork, communication, and reliability. If you were the treasurer of a club, you managed a budget. If you worked as a barista, you handled high-pressure customer service. Framing these roles through the lens of professional competency is the key to a strong entry-level profile.</p>

      <h3>The Power of Internships</h3>
      <p>Internships are the bridge between academia and the corporate world. Detail your internships with the same rigor as a full-time role. Focus on your contributions and what you learned. Did you automate a spreadsheet? Did you assist in a marketing campaign? Quantify your impact wherever possible to show that you are ready to hit the ground running in a professional environment.</p>

      <h3>Formatting for Discovery</h3>
      <p>Keep your resume to a single, dense page. Use a clean, chronological format that leads with your education or internships. Avoid flashy designs that might interfere with ATS parsing. By using standard headings and fonts, you ensure that your skills and potential are easily discoverable by recruiters searching for the next generation of talent.</p>
    `,
    faq: [
      { question: 'How do I write an entry level resume?', answer: 'Focus on your education, internships, academic projects, and relevant coursework. Highlight transferable skills from volunteer work or part-time jobs.' },
      { question: 'Should I include my GPA?', answer: 'Yes, if your GPA is 3.5 or higher, it is generally recommended to include it for entry-level positions.' },
      { question: 'How long should an entry-level resume be?', answer: 'A strict one-page limit is standard for entry-level candidates.' }
    ]
  },
  'executive': {
    title: 'Executive Resume Guide',
    description: 'Format your extensive experience correctly with our executive resume guide.',
    content: `
      <h2>The Executive Resume: Documenting Vision and Authority</h2>
      <p>As a senior leader, your resume is a testament to your strategic vision and your history of driving organizational success. In 2025, executive recruitment is increasingly high-stakes and data-heavy. Our executive resume guide helps you craft a document that conveys authority, highlights complex achievements, and passes the sophisticated screening processes used by top-tier executive search firms.</p>

      <h3>Lead with Strategic Impact</h3>
      <p>Your professional summary should not just list your roles; it should define your leadership brand. In 4-5 high-impact sentences, articulate your core value proposition: Are you a turnaround specialist? A growth-focused visionary? A champion of operational excellence? Use this section to set the strategic context for your entire career.</p>

      <h3>Quantify High-Level Achievements</h3>
      <p>At the executive level, metrics are everything. Focus on P&L responsibility, revenue growth, cost reduction, and market share expansion. Use the STAR method to describe how you led large-scale initiatives. For example: "Spearheaded a digital transformation strategy that increased annual recurring revenue (ARR) by 35% ($50M) within 18 months." This level of detail proves your ability to drive tangible business value at scale.</p>

      <h3>Showcase Governance and Board Experience</h3>
      <p>If you have experience reporting to or serving on a Board of Directors, ensure this is prominently featured. Detail your involvement in corporate governance, strategic planning, and stakeholder management. This demonstrates that you possess the executive presence and the specialized communication skills required for C-suite roles.</p>

      <h3>Mastering Information Density</h3>
      <p>An executive resume can comfortably extend to two pages to accommodate 15+ years of robust experience. However, the most critical information must remain on page one. Use a clean, sophisticated layout that leverages white space and clear headings to manage high information density without overwhelming the reader. Ensure your contact information and a brief version of your summary appear on the second page as well.</p>
    `,
    faq: [
      { question: 'How long should an executive resume be?', answer: 'Two pages is standard and expected for executive-level resumes to capture the full scope of their strategic impact.' },
      { question: 'Should I include older roles from early in my career?', answer: 'Focus on the last 10-15 years in detail. Older roles can be condensed into a "Prior Professional Experience" section without detailed bullet points.' },
      { question: 'Do executives need a LinkedIn profile?', answer: 'Yes, an optimized LinkedIn profile is essential for modern executive branding and networking.' }
    ]
  },
  'freelancer': {
    title: 'Freelancer Resume Guide',
    description: 'Showcase your client projects effectively with our freelancer resume guide.',
    content: `
      <h2>The Freelancer Resume: Selling Your Skills as a Service</h2>
      <p>As a freelancer, your career is a portfolio of diverse projects and satisfied clients. Your resume needs to function as a capabilities statement, proving that you can solve specific problems quickly and efficiently. Our freelancer resume guide helps you organize your varied experience into a cohesive narrative that appeals to both direct clients and corporate hiring managers looking for specialized talent.</p>

      <h3>Choose the Right Format: Hybrid vs. Project-Based</h3>
      <p>If you work with many small clients, a "Project-Based" format might be most effective, grouping your work under thematic skill headings (e.g., "Web Development Projects," "Brand Strategy Initiatives"). If you have long-term contracts, a traditional reverse-chronological format listing your own business as the employer may work better. The key is to emphasize the depth and breadth of your expertise.</p>

      <h3>Focus on Results and Deliverables</h3>
      <p>For every project, clearly state what you delivered and the impact it had on the client's business. Use metrics like "Reduced page load time by 40% for an e-commerce client" or "Wrote 25+ high-converting email sequences for a SaaS startup." This demonstrates that you are results-oriented and understand the commercial realities of your work.</p>

      <h3>Highlight Client Logos and Testimonials</h3>
      <p>If you have worked with well-known brands, mention them (with permission). "Social proof" is incredibly powerful in the freelance world. You can also include a brief, high-impact quote from a client testimonial within your project descriptions to build immediate trust with potential employers.</p>

      <h3>Technical Proficiency and Tools</h3>
      <p>Freelancers are often hired for their specific toolsets. Ensure your "Technical Stack" or "Tools" section is comprehensive and up-to-date. Whether it's Adobe Creative Suite, AWS, or specialized project management software, these keywords are vital for passing through ATS filters and showing that you can integrate seamlessly into a client's workflow.</p>
    `,
    faq: [
      { question: 'How do I list freelance work?', answer: 'You can list yourself as a "Freelancer" or "Consultant" and group projects by client, or use a functional format that lead with your core services and highlights key projects.' },
      { question: 'Should I include my personal website?', answer: 'Absolutely. For freelancers, a digital portfolio or personal website is often the most important part of the application.' },
      { question: 'How do I handle employment gaps between projects?', answer: 'Frame your time between projects as "Professional Development" or "Independent Research" if you were actively learning new skills during that time.' }
    ]
  }
};


export async function generateStaticParams() {
  return [
    { slug: 'entry-level' },
    { slug: 'executive' },
    { slug: 'freelancer' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/resume-guides/${resolvedParams.slug}`
  }));
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {data.faq && <JsonLd schema={buildFaqSchema(data.faq)} />}

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.title}</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{data.description}</p>
        <Link
          href="/builder"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-700 transition-colors"
        >
          Use this template for free
        </Link>
      </div>

      <div className="prose max-w-none text-slate-700 mt-16">
        {data.content && <div dangerouslySetInnerHTML={{ __html: data.content }} />}

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Is this guide actually free?</h3>
            <p className="m-0 text-slate-700">Yes, all Resume Forge resources, including our detailed guides and builder tool, are 100% free for job seekers. Our goal is to democratize career success tools.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Will these tips work for any industry?</h3>
            <p className="m-0 text-slate-700">While these tips focus on specific career stages, the underlying principles of ATS optimization and quantifiable achievements are universal across all modern industries.</p>
          </div>

          {data.faq.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">{item.question}</h3>
              <p className="m-0 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
