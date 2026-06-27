import { ResumeData } from '@/types/resume';

export interface ATSBreakdown {
  contact: { score: number; max: number };
  sections: { score: number; max: number };
  experience: { score: number; max: number };
  keywords: { score: number; max: number };
  formatting: { score: number; max: number };
}

export interface ATSResult {
  score: number;
  positiveFindings: string[];
  warnings: string[];
  breakdown: ATSBreakdown;
}

export function calculateATSScore(data: ResumeData, jobDescriptionText: string = ''): ATSResult {
  let score = 0;
  const positiveFindings: string[] = [];
  const warnings: string[] = [];

  const breakdown: ATSBreakdown = {
    contact: { score: 0, max: 20 },
    sections: { score: 0, max: 25 },
    experience: { score: 0, max: 25 },
    keywords: { score: 0, max: 20 },
    formatting: { score: 0, max: 10 },
  };

  // 1. Contact Completeness (20 points max)
  let contactScore = 0;
  if (data.contact.name) {
    contactScore += 5;
  } else {
    warnings.push("Missing full name.");
  }

  if (data.contact.email) {
    contactScore += 5;
  } else {
    warnings.push("Missing email address.");
  }

  if (data.contact.phone) {
    contactScore += 5;
  } else {
    warnings.push("Missing phone number.");
  }

  if (data.contact.linkedin || data.contact.website) {
    contactScore += 5;
    positiveFindings.push("Professional links (LinkedIn/Website) included.");
  } else {
    warnings.push("Consider adding a LinkedIn profile or portfolio link.");
  }

  if (contactScore === 20) {
    positiveFindings.push("Contact information is complete.");
  }
  breakdown.contact.score = contactScore;
  score += contactScore;

  // 2. Core Sections Present (25 points max)
  let sectionsScore = 0;
  if (data.experience && data.experience.length > 0) {
    sectionsScore += 10;
    positiveFindings.push("Experience section is populated.");
  } else {
    warnings.push("Missing work experience.");
  }

  if (data.education && data.education.length > 0) {
    sectionsScore += 10;
    positiveFindings.push("Education section is populated.");
  } else {
    warnings.push("Missing education history.");
  }

  if (data.skills && data.skills.length > 0) {
    sectionsScore += 5;
    positiveFindings.push("Skills section is populated.");
  } else {
    warnings.push("Missing skills section.");
  }

  breakdown.sections.score = sectionsScore;
  score += sectionsScore;

  // 3. Experience Quality (25 points max)
  let expQualityScore = 0;
  if (data.experience && data.experience.length > 0) {
    let hasActionVerbs = false;
    let hasMetrics = false;
    let sufficientBullets = true;

    // Simple regex for numbers, %, $, etc.
    const metricRegex = /\d+|%|\$|increased|decreased|reduced|grew/i;
    // Action verbs naive list
    const actionVerbs = ['led', 'managed', 'developed', 'created', 'designed', 'built', 'improved', 'increased', 'reduced', 'achieved', 'implemented', 'optimized'];

    data.experience.forEach(exp => {
      const bullets = exp.description.split('\n').filter(Boolean);
      if (bullets.length < 2) sufficientBullets = false;

      bullets.forEach(bullet => {
        if (metricRegex.test(bullet)) hasMetrics = true;
        if (actionVerbs.some(verb => bullet.toLowerCase().includes(verb))) hasActionVerbs = true;
      });
    });

    if (sufficientBullets) {
      expQualityScore += 10;
      positiveFindings.push("Experience entries have sufficient bullet points.");
    } else {
      warnings.push("Some experience entries have fewer than 2 bullet points.");
    }

    if (hasActionVerbs) {
      expQualityScore += 5;
      positiveFindings.push("Used strong action verbs in experience bullets.");
    } else {
      warnings.push("Consider starting bullets with strong action verbs (e.g., 'Managed', 'Developed').");
    }

    if (hasMetrics) {
      expQualityScore += 10;
      positiveFindings.push("Quantified achievements with numbers/metrics.");
    } else {
      warnings.push("Add numbers or metrics (%, $, numbers) to quantify your achievements.");
    }
  }
  breakdown.experience.score = expQualityScore;
  score += expQualityScore;

  // 4. Keyword Match (20 points max)
  let keywordScore = 0;
  if (jobDescriptionText.trim()) {
    const jobWords = new Set(jobDescriptionText.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/).filter(w => w.length > 3));
    const resumeText = JSON.stringify(data).toLowerCase().replace(/[^\w\s]/gi, '');
    const resumeWords = resumeText.split(/\s+/);

    let matchCount = 0;
    jobWords.forEach(word => {
      if (resumeWords.includes(word)) {
        matchCount++;
      }
    });

    const matchPercentage = jobWords.size > 0 ? (matchCount / jobWords.size) : 0;

    if (matchPercentage > 0.4) {
      keywordScore = 20;
      positiveFindings.push("Excellent keyword match with job description.");
    } else if (matchPercentage > 0.2) {
      keywordScore = 10;
      warnings.push("Moderate keyword match. Try to incorporate more skills from the job description.");
    } else {
      warnings.push("Low keyword match. Tailor your resume language to match the job description closely.");
    }
  } else {
    // If no JD provided, award partial points or skip. For now, award 10 default if skipping,
    // or we just say "Provide JD for keyword score". Let's give 10 free points if no JD so max score is reachable without it,
    // or just leave it at 0 but warn. Let's give it 10 to keep baseline morale up.
    keywordScore = 10;
    warnings.push("Paste a job description to get a specific keyword match score.");
  }
  breakdown.keywords.score = keywordScore;
  score += keywordScore;

  // 5. ATS Formatting Heuristics (10 points max)
  let formattingScore = 10;
  // Since we control the template, the formatting is mostly perfect.
  // We can just check if they added too much weird text.
  if (data.summary && data.summary.length > 1000) {
    formattingScore -= 5;
    warnings.push("Summary is very long. Keep it concise for better ATS parsing.");
  } else {
    positiveFindings.push("Formatting is clean and ATS-friendly (standard headings, no complex tables).");
  }
  breakdown.formatting.score = formattingScore;
  score += formattingScore;

  return {
    score: Math.min(100, Math.max(0, score)),
    positiveFindings,
    warnings,
    breakdown
  };
}
