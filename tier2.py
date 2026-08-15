import json

with open('data/programmatic-pages.json', 'r') as f:
    data = json.load(f)

# resume-templates
data["resume-templates"]["security-manager"] = {
    "title": "Security Manager Resume Template \u2013 ATS-Friendly",
    "description": "Download our free, ATS-optimized Security Manager resume template. Perfect for transitioning military personnel and law enforcement professionals.",
    "content": """
<h2>How to format a security manager resume for ATS?</h2>
<p>Formatting a security manager resume for Applicant Tracking Systems requires a clean, professional layout that highlights your risk management, physical security, and team leadership experience without confusing the parsing software. Avoid complex graphics, tables, or unusual section headers.</p>
<h2>Key Skills to Highlight</h2>
<p>When applying for security manager roles, emphasize keywords such as Threat Assessment, Crisis Management, Facility Security Clearance, Access Control Systems, and Incident Response. If you are transitioning from the military, ensure you translate your security clearance level into civilian terms that align with the job description.</p>
<h2>Demonstrating Impact</h2>
<p>Don't just list your responsibilities. Quantify your achievements. Mention the size of the facility you secured, the budget you managed, or the percentage reduction in security incidents under your leadership. The more concrete numbers you provide, the better your resume will perform.</p>
""",
    "faq": [
        {"question": "What is the best resume format for a security manager?", "answer": "A reverse-chronological format is generally best, as it clearly outlines your progression in the security field."},
        {"question": "Should I list my security clearance on my resume?", "answer": "Yes, if the job requires it or if it is highly relevant (e.g., DoD Secret or Top Secret). List it prominently near your professional summary."},
        {"question": "How can I translate military security experience?", "answer": "Focus on the scale of your operations, the value of the assets protected, and the leadership of personnel, rather than specific military tactics."}
    ]
}

data["resume-templates"]["logistics-coordinator"] = {
    "title": "Logistics Coordinator Resume Template \u2013 ATS-Optimized",
    "description": "Build an ATS-friendly Logistics Coordinator resume. Ideal for supply chain professionals and veterans translating their operational experience.",
    "content": """
<h2>How to optimize a logistics coordinator resume?</h2>
<p>To optimize a logistics coordinator resume, focus on your ability to manage complex supply chains, reduce operational costs, and ensure on-time delivery. Applicant Tracking Systems scan for specific software proficiencies and operational keywords.</p>
<h2>Essential Keywords for Logistics</h2>
<p>Ensure your resume includes terms like Supply Chain Management, Inventory Control, Vendor Relations, Route Optimization, and ERP Systems (like SAP or Oracle). If you have military logistics experience, frame it around the successful movement of personnel and equipment across large distances.</p>
<h2>Highlighting Efficiency</h2>
<p>Employers want to see how you saved time and money. Use bullet points to highlight instances where you streamlined a process, negotiated better freight rates, or improved inventory accuracy.</p>
""",
    "faq": [
        {"question": "What skills should a logistics coordinator highlight?", "answer": "Highlight supply chain optimization, inventory management, vendor negotiation, and proficiency in logistics software."},
        {"question": "How do I show results on a logistics resume?", "answer": "Use metrics such as 'reduced shipping costs by 15%' or 'maintained a 99% on-time delivery rate.'"},
        {"question": "Is a hybrid resume good for logistics?", "answer": "Yes, especially if you are transitioning from a different field or the military, as it allows you to highlight your logistical skills first."}
    ]
}

data["resume-templates"]["defense-contractor"] = {
    "title": "Defense Contractor Resume Template \u2013 ATS-Friendly",
    "description": "A specialized, ATS-safe resume template for defense contractors. Highlight your clearances, technical skills, and project management expertise.",
    "content": """
<h2>Formatting a defense contractor resume for ATS</h2>
<p>Defense contractor resumes must balance extreme technical specificity with clear, readable formatting. Because these roles often involve government contracts, ATS compliance is critical. Stick to standard fonts and clear section headings.</p>
<h2>Showcasing Clearances and Certifications</h2>
<p>Your security clearance (e.g., TS/SCI) and industry certifications (e.g., PMP, CISSP, DoD 8570) are often non-negotiable requirements. Place these in a dedicated, highly visible section near the top of your resume.</p>
<h2>Project and Program Management</h2>
<p>Highlight your experience managing complex projects, adhering to strict federal regulations (FAR/DFARS), and delivering within budget constraints. Use the STAR method to describe how you solved specific technical or operational challenges.</p>
""",
    "faq": [
        {"question": "Where should I put my security clearance?", "answer": "Place your security clearance prominently in your professional summary or in a dedicated 'Clearances & Certifications' section at the top of the resume."},
        {"question": "How detailed should my project descriptions be?", "answer": "Be detailed enough to show scale and impact (budget, team size, outcome), but ensure you do not disclose any classified information."},
        {"question": "Do ATS systems read defense industry acronyms?", "answer": "Yes, but it's best practice to spell out the acronym at least once (e.g., Department of Defense (DoD)) to ensure maximum keyword matching."}
    ]
}

data["resume-templates"]["government-analyst"] = {
    "title": "Government Analyst Resume Template \u2013 ATS-Optimized",
    "description": "Create an ATS-friendly Government Analyst resume. Tailored for policy, intelligence, and data analysts working within the public sector.",
    "content": """
<h2>Writing an ATS-friendly government analyst resume</h2>
<p>Government agencies and contractors rely heavily on automated screening. Your resume must clearly reflect the analytical skills, policy knowledge, and technical tools required in the job description.</p>
<h2>Key Analytical Skills</h2>
<p>Highlight your proficiency in data analysis, policy research, report writing, and strategic planning. Mention specific tools you use, such as advanced Excel, SQL, Tableau, or specialized intelligence databases.</p>
<h2>Demonstrating Strategic Impact</h2>
<p>Focus on how your analysis influenced decision-making or improved operational efficiency. Did your policy brief lead to a change in procedure? Did your data model identify cost savings? Quantify these impacts wherever possible.</p>
""",
    "faq": [
        {"question": "What is the most important section of an analyst resume?", "answer": "The professional experience section, where you must demonstrate how your analysis directly impacted strategic decisions or operational outcomes."},
        {"question": "Should I list all the software I know?", "answer": "List the software that is most relevant to the job description. Proficiency in data visualization and database management tools is highly valued."},
        {"question": "How do I format my resume for federal jobs?", "answer": "Federal resumes often require more detail than private sector resumes. Ensure you include dates, hours worked, and specific compliance keywords."}
    ]
}


# resume-guides
data["resume-guides"]["military-to-civilian-transition"] = {
    "title": "Military to Civilian Transition Resume Guide",
    "description": "Learn how to translate your military experience into a powerful, ATS-friendly civilian resume.",
    "content": """
<h2>How to write a resume when transitioning from the military?</h2>
<p>Writing a transition resume requires translating military jargon into civilian business language. Focus on your transferable skills like leadership, project management, and operations, rather than specific military tactics or equipment.</p>
<h2>Demilitarizing Your Experience</h2>
<p>Replace military titles and acronyms with their civilian equivalents. For example, instead of 'Company Commander,' use 'Director of Operations.' Ensure that a civilian recruiter can clearly understand your level of responsibility and the scope of your work.</p>
<h2>Using the Right Format</h2>
<p>A hybrid resume format is often the best choice for transitioning veterans. It allows you to highlight your core competencies (like logistics, training, or leadership) at the top, grouping your diverse military experiences under highly marketable skill categories.</p>
""",
    "faq": [
        {"question": "Should I use a chronological or hybrid resume?", "answer": "A hybrid resume is often better for veterans, as it emphasizes transferable skills over military job titles that may confuse civilian recruiters."},
        {"question": "How do I explain my military rank?", "answer": "Translate your rank into a functional title based on your responsibilities, such as Operations Manager, Team Lead, or Logistics Director."},
        {"question": "Are military awards relevant on a civilian resume?", "answer": "Include awards that demonstrate exceptional leadership or performance, but omit standard service or campaign medals unless specifically relevant."}
    ]
}

data["resume-guides"]["security-clearance-resume"] = {
    "title": "Security Clearance Resume Guide \u2013 Tips for ATS",
    "description": "How to properly list and leverage your security clearance on your resume to pass ATS filters and attract defense contractors.",
    "content": """
<h2>How to list a security clearance on a resume?</h2>
<p>If you hold an active or current security clearance, it is a highly marketable asset. You should list it prominently on your resume, typically in the professional summary or a dedicated 'Clearances and Certifications' section, to ensure it is immediately caught by ATS systems.</p>
<h2>Clearance Terminology</h2>
<p>Use the exact terminology recognized by the industry, such as 'Active DoD Top Secret/SCI Clearance.' Be truthful about the status (e.g., Active, Current, Expired) as this will be verified during the background check process.</p>
<h2>Avoiding Classified Information</h2>
<p>While highlighting your clearance is important, you must never disclose classified information, project names, or sensitive operational details on your resume. Focus on the skills utilized and the unclassified impact of your work.</p>
""",
    "faq": [
        {"question": "Where is the best place to list my clearance?", "answer": "In your professional summary or a dedicated section at the very top of your resume."},
        {"question": "Should I list an expired clearance?", "answer": "Generally no, unless the job description specifically asks if you have ever held one, as reactivating a clearance is a different process than transferring an active one."},
        {"question": "How do I describe classified work?", "answer": "Focus on the tools used, the size of the team managed, and the general outcome (e.g., 'analyzed complex data sets to support strategic initiatives') without revealing specifics."}
    ]
}

data["resume-guides"]["translating-military-jargon"] = {
    "title": "Translating Military Jargon for Civilian Resumes",
    "description": "A guide to demilitarizing your resume. Learn how to convert MOS codes and military terms into ATS-friendly civilian keywords.",
    "content": """
<h2>Why must you remove military jargon from your resume?</h2>
<p>Civilian recruiters and Applicant Tracking Systems do not understand military acronyms. If your resume is filled with jargon, the ATS will not find the required keywords, and the recruiter will not understand your qualifications, resulting in immediate rejection.</p>
<h2>Common Translations</h2>
<p>Translate 'Commanded' to 'Directed' or 'Managed.' Translate 'NCOIC' to 'Shift Supervisor' or 'Department Head.' Focus on the functional equivalent of your duties. If you managed supplies, you were in Logistics and Supply Chain Management.</p>
<h2>Focus on Universal Skills</h2>
<p>Regardless of your specific military job, you learned universal skills: cross-functional collaboration, crisis management, adherence to strict compliance standards, and team leadership. Highlight these universally understood concepts instead of specific military tactics.</p>
""",
    "faq": [
        {"question": "What should I do with my MOS code?", "answer": "Do not use your MOS code as your job title. Instead, use a descriptive civilian title that accurately reflects the duties of that MOS."},
        {"question": "Is it okay to use some military terms?", "answer": "Keep it to an absolute minimum. The goal is to make your resume readable to someone who has never served in the military."},
        {"question": "How do I describe combat experience?", "answer": "Focus on the leadership, decision-making under pressure, and risk management aspects, rather than the combat itself."}
    ]
}


# city-guides
data["city-guides"]["resume-san-antonio"] = {
    "title": "San Antonio Resume Guide \u2013 ATS Tips for Military City USA",
    "description": "Stand out in the San Antonio job market. ATS-friendly resume tips tailored for local industries, including defense, cybersecurity, and healthcare.",
    "content": """
<h2>Navigating the San Antonio Job Market</h2>
<p>San Antonio, often called 'Military City USA,' has a unique job market heavily influenced by the defense sector, cybersecurity, and healthcare. To succeed here, your resume must be optimized for the Applicant Tracking Systems used by major local employers and government contractors.</p>
<h2>Key Industries in San Antonio</h2>
<p>If you are applying for roles in San Antonio's booming cybersecurity sector, ensure your resume highlights relevant certifications (CISSP, Security+) and technical proficiencies. For the defense sector, prominently display your security clearance and project management experience.</p>
<h2>Local Networking and Formatting</h2>
<p>Given the strong military presence, many local employers are veteran-friendly. However, you must still translate your military experience into civilian terms to pass the ATS. Use a clean, standard format and mirror the keywords found in local job postings.</p>
""",
    "faq": [
        {"question": "What are the major industries in San Antonio?", "answer": "Defense, cybersecurity, healthcare, and financial services are major drivers of the San Antonio economy."},
        {"question": "How do I tailor my resume for San Antonio defense contractors?", "answer": "Highlight your security clearance, federal compliance experience, and technical certifications prominently."},
        {"question": "Is San Antonio a good market for transitioning veterans?", "answer": "Yes, it is one of the best markets for veterans due to the heavy presence of military bases and defense contractors who value military experience."}
    ]
}

with open('data/programmatic-pages.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated data/programmatic-pages.json")
