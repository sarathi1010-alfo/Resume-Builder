import json
import datetime

with open('data/seo-content.json', 'r') as f:
    data = json.load(f)

today = datetime.date.today().isoformat()

for blog in data['blogs']:
    if blog['slug'] == "career-change-resume-guide-2026":
        blog['content'] += """
<h3>Special Considerations for Veterans</h3>
<p>If your career change involves leaving the armed forces to enter the civilian job market, the challenges of translation and ATS optimization are magnified. You are not just changing industries; you are changing cultures. For a deep dive into demilitarizing your vocabulary, optimizing your skills for corporate ATS filters, and structuring your experience for maximum impact, refer to our comprehensive <a href="/blog/military-to-civilian-resume-guide-2026">Military to Civilian Resume Guide 2026</a>. It provides specific strategies for translating complex military roles into highly sought-after civilian competencies.</p>
"""
        blog['lastModified'] = today

    elif blog['slug'] == "employment-gaps-resume-2026":
        blog['content'] += """
<h3>Addressing Gaps Following Military Service</h3>
<p>Veterans often experience a gap in employment immediately following their discharge while they relocate, attend school, or transition to civilian life. Employers are generally very understanding of this specific type of gap. When formatting your resume, treat this period just as you would any other gap, focusing on any training or education undertaken. If you are struggling with how to format your military experience itself, you should read our dedicated <a href="/blog/military-to-civilian-resume-guide-2026">Military to Civilian Resume Guide 2026</a> for specialized advice on ATS optimization for veterans.</p>
"""
        blog['lastModified'] = today

with open('data/seo-content.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated legacy content.")
