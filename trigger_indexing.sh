#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
"https://resumeforge.alfo.online/blog/product-manager-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/product-marketing-manager"
  "https://resumeforge.alfo.online/resume-templates/technical-product-manager"
  "https://resumeforge.alfo.online/resume-templates/associate-product-manager"
  "https://resumeforge.alfo.online/resume-templates/growth-product-manager"
  "https://resumeforge.alfo.online/resume-guides/product-roadmaps"
  "https://resumeforge.alfo.online/resume-guides/agile-methodology"
  "https://resumeforge.alfo.online/resume-guides/cross-functional-leadership"
  "https://resumeforge.alfo.online/city-guides/resume-san-jose"
  "https://resumeforge.alfo.online/blog/teacher-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/backend-developer"
  "https://resumeforge.alfo.online/resume-templates/frontend-developer"
  "https://resumeforge.alfo.online/resume-templates/data-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/machine-learning-engineer-2026"
  "https://resumeforge.alfo.online/resume-guides/internship-2026"
  "https://resumeforge.alfo.online/resume-guides/part-time-2026"
  "https://resumeforge.alfo.online/city-guides/resume-las-vegas"
  "https://resumeforge.alfo.online/city-guides/resume-orlando"
  "https://resumeforge.alfo.online/blog/cybersecurity-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/penetration-tester"
  "https://resumeforge.alfo.online/resume-templates/security-architect"
  "https://resumeforge.alfo.online/resume-templates/incident-responder"
  "https://resumeforge.alfo.online/resume-templates/soc-analyst"
  "https://resumeforge.alfo.online/resume-guides/cybersecurity-certifications"
  "https://resumeforge.alfo.online/resume-guides/it-security-clearances"
  "https://resumeforge.alfo.online/resume-guides/ethical-hacking-portfolio"
  "https://resumeforge.alfo.online/city-guides/resume-baltimore"
  "https://resumeforge.alfo.online/blog/freelance-to-full-time-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/freelance-writer"
  "https://resumeforge.alfo.online/resume-templates/freelance-designer"
  "https://resumeforge.alfo.online/resume-templates/consultant"
  "https://resumeforge.alfo.online/resume-templates/contractor"
  "https://resumeforge.alfo.online/resume-guides/freelance-experience"
  "https://resumeforge.alfo.online/resume-guides/contract-to-hire"
  "https://resumeforge.alfo.online/resume-guides/portfolio-integration"
  "https://resumeforge.alfo.online/city-guides/resume-fort-worth"
)

# 1. Ping Google Sitemaps
echo "📡 Pinging Google Sitemaps..."
curl -s "https://www.google.com/ping?sitemap=https://resumeforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://resumeforge.alfo.online/sitemap-articles.xml" > /dev/null
echo "✅ Google pinged."

# 2. Ping Bing Sitemaps
echo "📡 Pinging Bing Sitemaps..."
curl -s "https://www.bing.com/ping?sitemap=https://resumeforge.alfo.online/sitemap.xml" > /dev/null
echo "✅ Bing pinged."

# 3. Simulate IndexNow API Submission
echo "⚡ Simulating IndexNow API submission..."
# Submit to IndexNow
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{"host": "resumeforge.alfo.online", "key": "resume_forge_indexnow_2026", "keyLocation": "https://resumeforge.alfo.online/resume_forge_indexnow_2026.txt", "urlList": ['$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')']}' > /dev/null
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
