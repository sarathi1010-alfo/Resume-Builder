const fs = require('fs');

const dataStr = fs.readFileSync('data/programmatic-pages.json', 'utf8');
const data = JSON.parse(dataStr);

const templates = {
  "front-end-developer": {
    "title": "Front-End Developer Resume Template & ATS Guide",
    "h1": "Front-End Developer Resume Template – ATS-Friendly & Modern",
    "description": "Craft the perfect Front-End Developer resume with our ATS-optimized template. Learn which frameworks and libraries to highlight to stand out in 2026.",
    "faq": [
      {
        "question": "What frontend frameworks should I list?",
        "answer": "Include popular frameworks like React 19, Vue.js, Angular, or Svelte, prioritizing those mentioned in the job description."
      },
      {
        "question": "Should I include my GitHub link?",
        "answer": "Yes, always include a link to your GitHub or portfolio to showcase real projects and code quality."
      },
      {
        "question": "How to format a frontend resume for ATS?",
        "answer": "Use standard headings, single-column layout, and clearly state your tech stack in a dedicated skills section and within experience bullets."
      }
    ],
    "content": "\n<h2>Building an ATS-Friendly Front-End Resume</h2>\n<p>For Front-End Developers, your resume needs to balance showcasing your technical skills with passing rigorous Applicant Tracking Systems. ATS algorithms are looking for specific languages like HTML5, CSS3, and JavaScript (ES6+), along with modern frameworks such as React 19 or Next.js. Avoid visually complex templates that use progress bars for your skills; these are unreadable by parsing software. Instead, clearly list your proficiencies and integrate them into quantifiable achievements, like 'Improved application load time by 40% by optimizing React components.'</p>\n"
  },
  "devops-engineer": {
    "title": "DevOps Engineer Resume Template & ATS Guide",
    "h1": "DevOps Engineer Resume Template – Optimized for Cloud Roles",
    "description": "Build an ATS-optimized DevOps Engineer resume. Discover the essential cloud, CI/CD, and automation keywords for 2026.",
    "faq": [
      {
        "question": "What cloud platforms are essential?",
        "answer": "AWS, Azure, and Google Cloud Platform (GCP) are critical. Mention the specific services you've used (e.g., EC2, S3, Lambda)."
      },
      {
        "question": "Should I list infrastructure as code (IaC) tools?",
        "answer": "Absolutely. Highlighting tools like Terraform, Ansible, or CloudFormation is vital for modern DevOps roles."
      },
      {
        "question": "How do I show impact as a DevOps Engineer?",
        "answer": "Quantify improvements in deployment frequency, reduction in downtime, or cost savings from cloud optimization."
      }
    ],
    "content": "\n<h2>Optimizing a DevOps Resume for ATS</h2>\n<p>DevOps roles require a broad and deep technical skill set. Your resume must clearly communicate your expertise in continuous integration/continuous deployment (CI/CD), containerization (Docker, Kubernetes), and cloud infrastructure. ATS systems for DevOps roles are configured to scan for these exact terms. Ensure you use standard section headers and bullet points to describe how you've automated workflows or reduced deployment times. A clean, text-based format ensures every tool and platform you list is properly indexed by the employer's tracking software.</p>\n"
  },
  "financial-advisor": {
    "title": "Financial Advisor Resume Template & ATS Guide",
    "h1": "Financial Advisor Resume Template – ATS-Optimized for Wealth Management",
    "description": "Create an ATS-friendly Financial Advisor resume that highlights your client acquisition, portfolio management, and regulatory compliance skills.",
    "faq": [
      {
        "question": "Which certifications should I prominently display?",
        "answer": "Certifications like CFP, CFA, Series 7, and Series 66 should be clearly listed, ideally at the top of your resume or in a dedicated section."
      },
      {
        "question": "How do I quantify my experience?",
        "answer": "Use metrics such as Assets Under Management (AUM) growth, client retention rates, or percentage increase in portfolio value."
      },
      {
        "question": "Is compliance knowledge important on a resume?",
        "answer": "Yes, demonstrating a strict adherence to SEC and FINRA regulations is crucial and serves as a major ATS keyword cluster."
      }
    ],
    "content": "\n<h2>Formatting a Financial Advisor Resume</h2>\n<p>In wealth management, trust and results are paramount. Your resume needs to convey professionalism and a proven track record of growing client wealth. ATS software for financial institutions often filters candidates based on specific licenses and AUM milestones. Structure your experience section using the reverse-chronological format, ensuring your most recent and relevant financial achievements are front and center. Avoid graphic elements; rely on clear, concise language and quantifiable metrics to demonstrate your financial acumen and client management success.</p>\n"
  },
  "nursing-assistant": {
    "title": "Nursing Assistant Resume Template & ATS Guide",
    "h1": "Nursing Assistant (CNA) Resume Template – ATS-Friendly Format",
    "description": "Land your next healthcare role with our ATS-optimized Nursing Assistant resume template. Highlight patient care and clinical skills effectively.",
    "faq": [
      {
        "question": "Should I include my CNA license number?",
        "answer": "It is generally recommended to state that you hold an active state license, but you can provide the specific number during the application or interview process."
      },
      {
        "question": "What clinical skills are most important?",
        "answer": "Highlight skills like vital signs monitoring, patient hygiene, infection control, and charting/documentation."
      },
      {
        "question": "How important are soft skills for a CNA?",
        "answer": "Extremely important. Emphasize empathy, communication, and the ability to handle high-stress situations alongside your clinical proficiencies."
      }
    ],
    "content": "\n<h2>Creating an ATS-Ready CNA Resume</h2>\n<p>Healthcare facilities use Applicant Tracking Systems to rapidly screen candidates for critical compliance and clinical skills. For a Certified Nursing Assistant (CNA), your resume must clearly list your certifications (e.g., BLS, CPR) and core competencies in patient care. Use a straightforward, single-column layout with standard headings to guarantee parsing accuracy. Detail your experience in assisting patients with daily living activities, observing vital signs, and collaborating with the nursing staff, using specific, action-oriented bullet points.</p>\n"
  }
};

const guides = {
  "relocation": {
    "title": "Relocation Resume Guide – How to Handle Out-of-State Applications",
    "h1": "Relocation Resume Guide – ATS Tips for Out-of-State Job Seekers",
    "description": "Learn how to format your resume for a successful relocation. Discover strategies to pass location-based ATS filters and land out-of-state jobs.",
    "faq": [
      {
        "question": "Should I use my current out-of-state address?",
        "answer": "It's often better to omit your full street address. You can list your target city (e.g., 'Relocating to Austin, TX') to pass geographic ATS filters."
      },
      {
        "question": "How do I explain my relocation?",
        "answer": "Use your professional summary to briefly mention your planned relocation and timeline to reassure employers."
      },
      {
        "question": "Should I mention that I am willing to pay for my own relocation?",
        "answer": "If you are self-funding, stating this in a cover letter or briefly in your summary can remove financial concerns for the employer."
      }
    ],
    "content": "\n<h2>Beating Location-Based ATS Filters</h2>\n<p>When applying for jobs in a new city or state, geographic location filters in Applicant Tracking Systems can automatically reject out-of-area candidates. To optimize your resume for relocation, you must address this immediately. Instead of listing your current address, use a phrase like \"Relocating to [Target City, State] in [Month, Year].\" This strategy ensures the ATS recognizes the correct location keywords for the role, keeping your application in the running while being transparent about your current status.</p>\n"
  },
  "gap-year": {
    "title": "Gap Year Resume Guide – Explaining Time Off Professionally",
    "h1": "Gap Year Resume Guide – How to Format Employment Gaps for ATS",
    "description": "Navigate employment gaps successfully with our Gap Year resume guide. Learn how to present sabbaticals, travel, or time off as a professional asset.",
    "faq": [
      {
        "question": "Should I hide a gap year on my resume?",
        "answer": "No, ATS software and recruiters will spot the dates. It is better to briefly and honestly explain the gap."
      },
      {
        "question": "How do I format a gap year on my resume?",
        "answer": "You can include a brief entry in your experience section (e.g., 'Planned Career Break / Travel') to maintain chronological consistency."
      },
      {
        "question": "What should I highlight during my gap year?",
        "answer": "Focus on any transferable skills gained, volunteer work, freelance projects, or relevant courses taken during your time off."
      }
    ],
    "content": "\n<h2>Addressing Employment Gaps in an ATS Format</h2>\n<p>Applicant Tracking Systems analyze the chronological dates of your employment to calculate total years of experience. A significant gap can sometimes trigger a lower candidate score or raise questions. To mitigate this, consider listing your gap year directly in the experience section with a clear title like \"Professional Sabbatical\" or \"Independent Study and Travel.\" Briefly bullet any constructive activities, such as language acquisition, freelance work, or volunteerism, demonstrating that your time off contributed to your professional development and maintaining the chronological flow for the parser.</p>\n"
  }
};

const cities = {
  "resume-san-francisco": {
    "title": "San Francisco Resume Guide – ATS Tips for the Bay Area Market",
    "h1": "San Francisco Resume Guide – ATS Optimization for the Bay Area",
    "description": "Optimize your resume for the highly competitive San Francisco job market with specific ATS strategies for tech, startups, and finance.",
    "faq": [
      {
        "question": "What are the most important industries in SF?",
        "answer": "Technology, Software Development, Venture Capital, and Biotech are the dominant industries in the Bay Area."
      },
      {
        "question": "How important are startup keywords?",
        "answer": "Very. Keywords indicating adaptability, scaling, cross-functional collaboration, and specific modern tech stacks are crucial for SF startups."
      },
      {
        "question": "Should I include my LinkedIn profile?",
        "answer": "Yes, a fully optimized LinkedIn profile link is virtually mandatory for tech and professional roles in San Francisco."
      }
    ],
    "content": "\n<h2>Succeeding in the San Francisco Tech Market</h2>\n<p>The San Francisco Bay Area is the global epicenter of technology and innovation. The job market here is intensely competitive, and employers utilize the most advanced Applicant Tracking Systems available. To stand out, your resume must perfectly align with the fast-paced, high-growth culture of Silicon Valley. Ensure your technical skills section is comprehensive and up-to-date. More importantly, quantify your impact. Startups and enterprise tech companies alike want to see how your work drove user acquisition, reduced latency, or increased revenue. Use a clean, standard format to ensure the ATS captures every critical metric and keyword.</p>\n"
  },
  "resume-dallas": {
    "title": "Dallas Resume Guide – ATS Tips for the DFW Job Market",
    "h1": "Dallas Resume Guide – ATS Optimization for the DFW Metroplex",
    "description": "Tailor your resume for the booming Dallas-Fort Worth job market with our localized ATS tips focusing on corporate headquarters, telecommunications, and finance.",
    "faq": [
      {
        "question": "What are the key industries in Dallas-Fort Worth?",
        "answer": "DFW is a major hub for Telecommunications, Financial Services, Healthcare, and Corporate Headquarters (Fortune 500)."
      },
      {
        "question": "Is corporate formatting preferred?",
        "answer": "Yes, many DFW employers prefer a traditional, conservative, reverse-chronological resume format that is easily parsed by enterprise ATS software."
      },
      {
        "question": "How can I stand out for corporate roles?",
        "answer": "Highlight large-scale project management, cost-saving initiatives, and experience working within complex organizational structures."
      }
    ],
    "content": "\n<h2>Optimizing for Dallas Corporate Headquarters</h2>\n<p>The Dallas-Fort Worth (DFW) Metroplex is home to a massive concentration of Fortune 500 corporate headquarters, spanning telecommunications, finance, and healthcare. Employers in this region often rely on enterprise-level Applicant Tracking Systems like Workday or Taleo, which favor structured, traditional resume formats. Avoid creative layouts and stick to a single-column, reverse-chronological design. Emphasize keywords related to enterprise software, large-scale operations, and regulatory compliance. By demonstrating your ability to drive results within a corporate framework, you will position yourself strongly in the DFW market.</p>\n"
  }
};

Object.assign(data["resume-templates"], templates);
Object.assign(data["resume-guides"], guides);
Object.assign(data["city-guides"], cities);

fs.writeFileSync('data/programmatic-pages.json', JSON.stringify(data, null, 2));
