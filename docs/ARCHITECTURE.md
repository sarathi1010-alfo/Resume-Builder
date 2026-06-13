# AI-Powered ATS Optimization System Architecture

## Overview
This platform is a premium, intelligent resume optimization system that positions itself as an **"AI-powered ATS optimization system"** to help users get past screening bots and into human hands. It focuses heavily on perceived intelligence, user retention, and viral growth.

**Key Positioning:** Beautiful AND ATS-safe. Not competing with Canva-style builders, but acting as a local-logic-driven, intelligent audit and tailoring tool.

## Suggested Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand (for robust client-side storage of multi-resume versions, history, and intelligence dashboard)
- **Local AI & NLP Logic**:
  - Regex & Keyword Dictionaries (for action verbs, metrics, buzzwords)
  - Natural / Compromise.js (for local NLP tasks like TF-IDF, synonym replacement, basic tagging)
  - Custom JavaScript Rule Engine (100-point rubric for ATS analyzer, completely client-side without paid API dependencies)
- **Print & Export**: Native Browser `window.print()` with robust `@media print` CSS (avoiding `html2canvas` or `@react-pdf/renderer` as per project constraints).
- **SEO & Ecosystem**: Adheres to the central `config/site.ts` pattern with programmatic SEO pages and ecosystem cross-linking.

## Core Features & Logic Outlines

### 1. ATS Score Analyzer
**Core Logic:** A client-side rule engine implementing a 100-point rubric.
- Extracts sections (Summary, Experience, Education, Skills) using Regex.
- Calculates Action Verb density against a local dictionary `actionVerbs.json`.
- Detects numbers/percentages for measurable achievements (`/\d+%?/g`).
- **Pseudo-code:**
  ```javascript
  function analyzeResume(text) {
    let score = 100;
    let feedback = [];
    if (!hasMeasurableAchievements(text)) {
      score -= 15;
      feedback.push("No measurable achievements found");
    }
    if (detectLongParagraphs(text)) {
      score -= 10;
      feedback.push("Formatting issues: Paragraphs are too long");
    }
    // ...
    return { score, feedback };
  }
  ```

### 2. Job Description Tailoring
**Core Logic:** Local TF-IDF implementation to extract and rank keywords from the pasted Job Description.
- Compare JD keyword frequencies against the resume text.
- Highlight missing top-priority keywords and suggest integration areas.

### 3. Achievement Bullet Generator
**Core Logic:** Template-based transformation using Regex and NLP part-of-speech tagging.
- Map weak verbs ("Helped", "Worked on") to strong action verbs ("Spearheaded", "Architected").
- **Example Rule:** If a bullet lacks a number/metric, prompt the user: "How much did you improve X by? What was the scale?"

### 4. Resume Heatmap
**Core Logic:** DOM Overlay based on text analysis.
- Wrap extracted resume text blocks in `<span>` tags.
- Green background for sentences with high keyword density and metrics. Red for dense, keyword-less paragraphs.
- Simulate "Recruiter Attention Zones" (F-pattern reading overlay).

### 5. Multi-Resume Versions
**Core Logic:** State management via Zustand and LocalStorage.
- Each user profile maintains a generic `baseResume` and an array of `tailoredVersions`.
- Switching versions swaps the active payload rendered in the Right-Side Live Preview.

### 6. Humanizer Mode
**Core Logic:** Synonym replacement and structural variance.
- Local mapping of robotic AI phrases (e.g., "It is important to note", "Delve into") to human-sounding alternatives.
- Avoid repetitive action verbs by tracking previously used verbs and suggesting alternatives from a local thesaurus mapping.

### 7. Smart Resume Sections
**Core Logic:** Dynamic form blocks.
- Extend the traditional (Experience, Education) with niche modules: Projects, Hackathons, Open Source.
- Form components render based on user toggles, immediately updating the live preview pane.

### 8. Recruiter Preview Mode
**Core Logic:** CSS filters and highlights.
- Applies a CSS `.blur` class to generic text filler.
- Highlights keywords, numbers, and job titles, simulating the "6-second scan".
- Side-by-side view achieved via a split pane layout.

### 9. ATS-Safe Templates Only
**Core Logic:** Semantic HTML & Flexbox/CSS Grid logic.
- Ensure visual columns are ordered logically in the DOM (e.g., Left-to-Right reading order matches DOM structure).
- Avoid `<table>` layouts or `<canvas>`.
- **CSS:** Utilize robust `@media print` rules to ensure the PDF export perfectly matches the web view while remaining parser-safe text.

### 10. Resume Version History
**Core Logic:** Local "Git for Resumes".
- Use Zustand to append a snapshot of the resume state to a `history` array on every significant save or job tailoring event.
- Allow users to "Revert" to a previous index in the array.

### 11. AI Interview Questions Generator
**Core Logic:** Rule-based mapping.
- Extract top skills and current role from the resume.
- Map skills to a local bank of interview questions (e.g., `React` -> "Can you explain the Virtual DOM?").
- Generate HR/Behavioral questions based on the experience duration (e.g., Junior vs Senior).

### 12. Keyword Gap Detector
**Core Logic:** Set intersection logic.
- Extract JD keywords -> `Set(jdKeywords)`.
- Extract Resume keywords -> `Set(resumeKeywords)`.
- Output: `Matched` (Intersection), `Missing` (Difference), emphasizing priority based on TF-IDF weight.

### 13. "Roast My Resume" Mode
**Core Logic:** Brutally honest feedback arrays triggered by regex matches.
- Match: `/(responsibilities included|duties were)/i`
- Output: *"Your resume reads like a list of chores, not achievements. Nobody cares what you were supposed to do, they care what you actually accomplished."*
- Designed for social sharing and virality.

### 14. One-Click Portfolio Resume
**Core Logic:** Next.js dynamic routing.
- The user's public URL (e.g., `/[username]/resume`) renders a read-only variant of the layout.
- Synergy with BrandCard and the ecosystem navigation bar.

### 15. Resume Intelligence Dashboard
**Core Logic:** Data visualization.
- Aggregate all scores (ATS, Readability, Keyword match) into a unified gauge chart / progress bar view inside the left-side form section.
- Gamify progress: "You are 15 points away from an 'Excellent' rating. Add 2 more metrics to reach it."

## UI/UX Flow
1. **Landing/Entry:** User arrives, pastes an existing resume or starts from scratch.
2. **Left Panel (Form/Tools):** Expandable accordions for Sections, Dashboard, Job Tailoring, and Heatmap tools.
3. **Right Panel (Live Preview):** The active resume template, updating in real-time. Switches seamlessly into Recruiter Preview or Roast Mode.
4. **Header/Ecosystem:** Global Navbar with "Export PDF", "Save Version", and cross-links to related alfo.online tools.
