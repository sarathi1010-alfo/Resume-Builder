#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
    "https://resumeforge.alfo.online/blog/career-change-resume-guide-2026"
    "https://resumeforge.alfo.online/resume-templates/ux-designer"
    "https://resumeforge.alfo.online/resume-templates/financial-analyst"
    "https://resumeforge.alfo.online/resume-templates/operations-manager"
    "https://resumeforge.alfo.online/resume-templates/sales-manager"
    "https://resumeforge.alfo.online/resume-guides/career-change"
    "https://resumeforge.alfo.online/resume-guides/returning-to-work"
    "https://resumeforge.alfo.online/resume-guides/military-transition"
    "https://resumeforge.alfo.online/city-guides/resume-chicago"
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
# In a real environment, this would be a POST request to https://api.indexnow.org
# with a key and keyLocation.
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
