#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/ai-resume-building-tips-2026"
  "https://resumeforge.alfo.online/resume-templates/scrum-master"
  "https://resumeforge.alfo.online/resume-templates/product-owner"
  "https://resumeforge.alfo.online/resume-templates/business-analyst"
  "https://resumeforge.alfo.online/resume-guides/promotions"
  "https://resumeforge.alfo.online/resume-guides/contract-work"
  "https://resumeforge.alfo.online/resume-guides/ats-formatting"
  "https://resumeforge.alfo.online/city-guides/resume-miami"
  "https://resumeforge.alfo.online/city-guides/resume-boston"
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
