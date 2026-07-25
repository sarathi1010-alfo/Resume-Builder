#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
    "https://resumeforge.alfo.online/blog/remote-work-resume-tips-2026"
    "https://resumeforge.alfo.online/resume-templates/remote-customer-service"
    "https://resumeforge.alfo.online/resume-templates/remote-marketing-manager"
    "https://resumeforge.alfo.online/resume-templates/remote-software-engineer"
    "https://resumeforge.alfo.online/resume-templates/virtual-assistant"
    "https://resumeforge.alfo.online/resume-guides/work-from-home"
    "https://resumeforge.alfo.online/resume-guides/asynchronous-work"
    "https://resumeforge.alfo.online/resume-guides/digital-nomad"
    "https://resumeforge.alfo.online/city-guides/resume-austin"
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
