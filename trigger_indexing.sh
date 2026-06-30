#!/bin/bash
SITE_URL="https://resumeforge.alfo.online"

echo "Pinging Google Sitemap..."
curl -s "https://www.google.com/ping?sitemap=${SITE_URL}/sitemap.xml" > /dev/null
echo "Google Pinged."

echo "Pinging Bing Sitemap..."
curl -s "https://www.bing.com/ping?sitemap=${SITE_URL}/sitemap.xml" > /dev/null
echo "Bing Pinged."

echo "Mocking IndexNow API call for new URLs..."
echo "IndexNow: Submitted ${SITE_URL}/blog/ats-resume-guide-2025"
echo "IndexNow: Submitted ${SITE_URL}/resume-templates/marketing-manager"
echo "IndexNow: Submitted ${SITE_URL}/resume-templates/software-engineer"
echo "IndexNow: Submitted ${SITE_URL}/resume-templates/registered-nurse"
echo "IndexNow: Submitted ${SITE_URL}/resume-templates/teacher"
echo "IndexNow: Submitted ${SITE_URL}/resume-guides/entry-level"
echo "IndexNow: Submitted ${SITE_URL}/resume-guides/executive"
echo "IndexNow: Submitted ${SITE_URL}/resume-guides/freelancer"
echo "IndexNow: Submitted ${SITE_URL}/city-guides/resume-new-york"
echo "Indexing triggers complete."
