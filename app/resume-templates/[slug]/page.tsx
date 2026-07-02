import Link from 'next/link';
import { notFound } from 'next/navigation';

import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildStaticPageMeta } from '@/lib/seo/metaFactories';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';

// For programmatic SEO demonstration
const TEMPLATE_DATA: Record<string, { title: string; description: string; content?: string; faq: Array<{question: string, answer: string}> }> = {
  'marketing-manager': {
    title: 'Marketing Manager Resume Template',
    description: 'Build a standout marketing manager resume with our ATS-friendly templates.',
    content: `
      <h2>How to Create a Marketing Manager Resume That Gets Results</h2>
      <p>As a Marketing Manager, your resume is your first campaign. It needs to sell one specific product: your ability to drive growth and manage complex projects. In 2025, recruiters are looking for data-driven professionals who can bridge the gap between creative strategy and technical execution. Our marketing manager resume template is designed to highlight these exact qualities while ensuring 100% compatibility with Applicant Tracking Systems (ATS).</p>

      <h3>Focus on Quantifiable Metrics</h3>
      <p>The biggest mistake marketing managers make is listing duties instead of results. Don't just say you "managed a social media account." Instead, say you "increased organic engagement by 45% over 6 months through a revised content strategy and community management." Use numbers, percentages, and dollar amounts whenever possible. This provides concrete evidence of your impact and makes your resume significantly more compelling to hiring managers who are focused on ROI.</p>

      <h3>Highlight Your Technical Stack</h3>
      <p>Modern marketing is highly technical. Your resume should prominently feature your proficiency with essential tools like Google Analytics 4, HubSpot, Salesforce, SEMrush, and various social media management platforms. These tools serve as critical keywords for ATS software. If an organization is looking for someone with "SEO/SEM expertise," having those specific terms woven into your experience and skills sections is vital for passing the initial screening.</p>

      <h3>The Importance of a Strong Summary</h3>
      <p>Your professional summary should be a high-impact elevator pitch. In 3-4 sentences, summarize your years of experience, your core areas of expertise (e.g., brand development, lead generation, product marketing), and one major achievement that demonstrates your value. This section sets the tone for the entire document and encourages the recruiter to dive deeper into your work history.</p>

      <h3>Formatting for Success</h3>
      <p>While marketing is a creative field, your resume should remain structurally simple. Avoid multi-column layouts, graphics, or non-standard fonts. An ATS-friendly format ensures that your data is extracted accurately, allowing your achievements to shine without technical interference. Use clear H2 and H3 headings to organize your information logically, making it easy for both machines and humans to scan your profile in seconds.</p>
    `,
    faq: [
      { question: 'What skills should a marketing manager include?', answer: 'Include SEO, content strategy, data analysis, budget management, and team leadership.' },
      { question: 'Should I include creative portfolio links?', answer: 'Yes, if you have a digital portfolio, include a clean URL in your contact information section.' },
      { question: 'How long should a marketing manager resume be?', answer: 'For mid-to-senior level managers, a two-page resume is acceptable, provided every bullet point adds value.' }
    ]
  },
  'software-engineer': {
    title: 'Software Engineer Resume Template',
    description: 'Create an ATS-friendly software engineer resume highlighting your tech stack.',
    content: `
      <h2>Engineering the Perfect Software Engineer Resume</h2>
      <p>In the highly competitive tech landscape of 2025, a software engineer's resume must be as clean and efficient as their code. Our template is engineered to help you showcase your technical proficiencies, project experience, and problem-solving abilities in a format that both technical recruiters and ATS algorithms love. Whether you're a frontend specialist, a backend expert, or a full-stack generalist, the principles of a great engineering resume remain the same.</p>

      <h3>Lead with Your Tech Stack</h3>
      <p>Recruiters often scan resumes for specific languages and frameworks first. Create a dedicated technical skills section near the top of your resume, grouped by category (e.g., Languages: Java, Python; Frameworks: React, Spring Boot; Tools: Docker, Kubernetes). This ensures that your core competencies are immediately visible and serves as a powerful keyword repository for Applicant Tracking Systems.</p>

      <h3>Focus on Impact, Not Just Features</h3>
      <p>When describing your work experience, use the STAR method to explain how you solved problems. Don't just list the features you built; explain the business value they provided. For example: "Architected a microservices-based payment gateway that reduced transaction latency by 30% and improved system reliability to 99.9%." This approach demonstrates that you understand the "why" behind the code, a trait highly valued by senior engineering leadership.</p>

      <h3>The Role of Personal Projects and GitHub</h3>
      <p>For many engineering roles, your public contributions and side projects are as important as your formal employment. Include a "Projects" section that details 2-3 significant initiatives. Link to your GitHub profile and ensure it is well-organized with clear README files. This provides tangible proof of your coding style and your passion for continuous learning, often serving as a great conversation starter during technical interviews.</p>

      <h3>Keep It Simple and ATS-Friendly</h3>
      <p>Avoid the temptation to use "creative" layouts or progress bars for your skills. These elements often cause parsing errors in ATS software, leading to missing data in the recruiter's database. A standard, single-column reverse-chronological format is the safest and most effective way to ensure your profile is accurately represented across all application portals.</p>
    `,
    faq: [
      { question: 'Should I include GitHub links?', answer: 'Yes, always include links to your portfolio or GitHub if they showcase your best work.' },
      { question: 'How do I list my tech stack?', answer: 'Group your skills into categories like Languages, Frameworks, and Tools for better readability.' },
      { question: 'Is a 1-page resume enough for a software engineer?', answer: 'Yes, for most engineers with under 7 years of experience, a single, dense page is often more effective than a two-page document.' }
    ]
  },
  'registered-nurse': {
    title: 'Registered Nurse Resume Template',
    description: 'Highlight your clinical skills and patient care experience with our nursing resume template.',
    content: `
      <h2>Crafting a Compelling Registered Nurse Resume</h2>
      <p>Nursing is a profession of precision and compassion, and your resume should reflect both. In 2025, healthcare organizations use sophisticated ATS to manage thousands of applications. Our registered nurse resume template ensures that your clinical expertise, certifications, and patient outcomes are front and center, helping you land a role in top-tier hospitals and clinics.</p>

      <h3>Emphasize Clinical Competencies</h3>
      <p>Your "Clinical Skills" section is the heart of your resume. Be specific about your experience with electronic health records (EHR) systems like Epic or Cerner, as well as specialized procedures like IV therapy, wound care, or ventilator management. These technical details are exactly what recruiters look for when filling specialized roles in departments like the ICU, ER, or Pediatrics.</p>

      <h3>Highlight Certifications and Licensure</h3>
      <p>Your RN license and certifications (BLS, ACLS, PALS, PCCN) are non-negotiable requirements. Ensure they are listed prominently near the top of your resume, including your license number and state of issuance. This immediately validates your credentials and passes the initial filter of most healthcare-specific ATS platforms.</p>

      <h3>Quantify Your Impact on Patient Care</h3>
      <p>Nursing is increasingly focused on measurable outcomes and patient safety metrics. When describing your experience, include details about patient ratios, improvements in HCAHPS scores, or your role in reducing hospital-acquired infections. For example: "Managed care for a high-acuity 1:2 patient ratio in the ICU, maintaining a 100% medication administration accuracy rate." This demonstrates your commitment to quality care and your ability to thrive in demanding environments.</p>

      <h3>Professionalism and Formatting</h3>
      <p>In healthcare, attention to detail is critical. Your resume must be flawless, with zero typos or formatting inconsistencies. Use a clean, professional font and a single-column layout. Avoid graphics or charts that can't be easily parsed by software. A structured, easy-to-read document signals your professionalism and organizational skills to hiring managers who make split-second decisions.</p>
    `,
    faq: [
      { question: 'How do I list clinical hours?', answer: 'List them prominently under your education or clinical experience section, especially if you are a recent graduate.' },
      { question: 'Should I include my nursing license number?', answer: 'Yes, including your license number and expiration date helps recruiters verify your credentials quickly.' },
      { question: 'What is the best format for a nursing resume?', answer: 'A reverse-chronological format is preferred, as it highlights your most recent clinical experience.' }
    ]
  },
  'teacher': {
    title: 'Teacher Resume Template',
    description: 'Showcase your lesson planning and classroom management skills with our teacher template.',
    content: `
      <h2>Building a Standout Teacher Resume for 2025</h2>
      <p>Education is evolving, and so are the expectations for educators. Today's teachers need to demonstrate not only pedagogical excellence but also technical proficiency and data-driven instruction. Our teacher resume template is designed to help you showcase your classroom successes and your commitment to student growth in a way that passes modern school district screening systems.</p>

      <h3>Focus on Student Growth and Achievement</h3>
      <p>The most powerful resumes for teachers are those that provide evidence of impact. Don't just say you "taught 5th-grade math." Instead, say you "implemented a new differentiated instruction model that led to a 25% increase in standardized test scores across the 5th-grade cohort." Use data to tell the story of how your teaching has improved student outcomes, as this is what administrators care about most.</p>

      <h3>Highlight EdTech Integration</h3>
      <p>Proficiency with educational technology is a major differentiator in 2025. Be specific about your experience with Learning Management Systems (LMS) like Google Classroom, Canvas, or Schoology, as well as interactive tools like Kahoot, Nearpod, or specialized subject-area software. These tools are often used as keywords in district-level ATS filters.</p>

      <h3>Showcase Collaboration and Leadership</h3>
      <p>Teaching is a team sport. Highlight your involvement in professional learning communities (PLCs), your role in curriculum development committees, or your experience mentoring student teachers. These collaborative experiences demonstrate your commitment to the broader school community and your potential for future leadership roles within the district.</p>

      <h3>Clarity and ATS Compatibility</h3>
      <p>School districts often receive hundreds of applications for a single opening. Ensure your resume is easy to scan by using standard headings like "Professional Experience," "Education," and "Certifications." Use a clean, single-column layout with a standard font. This ensures that your information is parsed correctly by the district's applicant tracking system, putting your qualifications in front of human decision-makers.</p>
    `,
    faq: [
      { question: 'Should I list my certifications?', answer: 'Yes, teaching certifications and endorsements are crucial and should be highly visible, including the state and expiration date.' },
      { question: 'How do I describe classroom management?', answer: 'Provide specific examples of models you use, such as PBIS or restorative justice, and the impact they had on your classroom environment.' },
      { question: 'What should I include in my teaching professional summary?', answer: 'Focus on your teaching philosophy, years of experience, and a key achievement related to student success.' }
    ]
  }
};


export async function generateStaticParams() {
  return [
    { slug: 'marketing-manager' },
    { slug: 'software-engineer' },
    { slug: 'registered-nurse' },
    { slug: 'teacher' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = TEMPLATE_DATA[resolvedParams.slug];
  if (!data) return { title: 'Template Not Found' };

  return resolveMetadata(buildStaticPageMeta({
    title: data.title,
    description: data.description,
    slug: `/resume-templates/${resolvedParams.slug}`
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
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Is this template actually free?</h3>
            <p className="m-0 text-slate-700">Yes, Resume Forge is 100% free with no paywalls, subscriptions, or watermarks. We believe professional career tools should be accessible to everyone.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mt-0 mb-2 text-slate-900">Will this pass ATS?</h3>
            <p className="m-0 text-slate-700">Absolutely. We use standard fonts and simple layouts specifically engineered to be readable by all major Applicant Tracking Systems like Workday, Taleo, and Greenhouse.</p>
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
