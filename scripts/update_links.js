const fs = require('fs');

const dataStr = fs.readFileSync('data/seo-content.json', 'utf8');
const data = JSON.parse(dataStr);

const today = new Date().toISOString().split('T')[0];

const b1 = data.blogs.find(b => b.slug === 'resume-keywords');
if (b1) {
  b1.content += `\n<h2>Mastering Industry-Specific Vocab</h2>\n<p>For more detailed strategies on how to adapt your language for specific fields, check out our guide on <a href="/blog/industry-specific-ats-keywords-2026">Industry-Specific ATS Keywords</a>.</p>`;
  b1.lastModified = today;
}

const b2 = data.blogs.find(b => b.slug === 'how-to-beat-ats');
if (b2) {
  b2.content += `\n<h2>Going Beyond the Basics</h2>\n<p>Once you understand the basic formatting, the next level is keyword optimization. Discover the exact terms you need with our <a href="/blog/industry-specific-ats-keywords-2026">Guide to Industry-Specific ATS Keywords</a>.</p>`;
  b2.lastModified = today;
}

fs.writeFileSync('data/seo-content.json', JSON.stringify(data, null, 2));
