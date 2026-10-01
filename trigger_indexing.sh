#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/soft-skills-ats-resume-guide-2026"
  "https://resumeforge.alfo.online/city-guides/resume-nashville"
  "https://resumeforge.alfo.online/city-guides/resume-detroit"
  "https://resumeforge.alfo.online/city-guides/resume-tucson"
  "https://resumeforge.alfo.online/city-guides/resume-fresno"
  "https://resumeforge.alfo.online/city-guides/resume-sacramento"
  "https://resumeforge.alfo.online/city-guides/resume-kansas-city"
  "https://resumeforge.alfo.online/city-guides/resume-mesa"
  "https://resumeforge.alfo.online/city-guides/resume-colorado-springs"
  "https://resumeforge.alfo.online/location/new-york-city"
  "https://resumeforge.alfo.online/location/san-francisco"
  "https://resumeforge.alfo.online/location/austin"
  "https://resumeforge.alfo.online/location/chicago"
  "https://resumeforge.alfo.online/location/seattle"
  "https://resumeforge.alfo.online/location/boston"
  "https://resumeforge.alfo.online/location/denver"
  "https://resumeforge.alfo.online/location/miami"

  "https://resumeforge.alfo.online/blog/student-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/college-student"
  "https://resumeforge.alfo.online/resume-templates/university-student"
  "https://resumeforge.alfo.online/resume-templates/internship-student"
  "https://resumeforge.alfo.online/resume-guides/college-resume-tips"
  "https://resumeforge.alfo.online/resume-guides/high-school-resume-guide"
  "https://resumeforge.alfo.online/resume-guides/internship-resume-guide"
  "https://resumeforge.alfo.online/city-guides/resume-milwaukee"
  "https://resumeforge.alfo.online/city-guides/resume-albuquerque"
  "https://resumeforge.alfo.online/blog/what-is-an-ats"
  "https://resumeforge.alfo.online/blog/what-is-a-hybrid-resume"
  "https://resumeforge.alfo.online/blog/what-is-a-resume-summary"
  "https://resumeforge.alfo.online/blog/what-is-a-resume-skills-section"
  "https://resumeforge.alfo.online/blog/reverse-chronological-vs-functional-resume"
  "https://resumeforge.alfo.online/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026"
  "https://resumeforge.alfo.online/city-guides/resume-new-york"
  "https://resumeforge.alfo.online/city-guides/resume-san-francisco"
  "https://resumeforge.alfo.online/city-guides/resume-austin"
  "https://resumeforge.alfo.online/city-guides/resume-chicago"
  "https://resumeforge.alfo.online/blog/ats-keyword-strategy-2026"
  "https://resumeforge.alfo.online/resume-templates/event-planner"
  "https://resumeforge.alfo.online/resume-templates/systems-analyst"
  "https://resumeforge.alfo.online/resume-templates/dentist"
  "https://resumeforge.alfo.online/resume-templates/plumber"
  "https://resumeforge.alfo.online/resume-guides/career-pivot-2026"
  "https://resumeforge.alfo.online/resume-guides/ats-optimization-tips"
  "https://resumeforge.alfo.online/city-guides/resume-tulsa"
  "https://resumeforge.alfo.online/city-guides/resume-wichita"
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
