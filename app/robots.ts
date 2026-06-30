import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { siteConfig } from '@/config/site';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isVercelDomain = host.includes('.vercel.app');

  // If on a Vercel preview/branch domain, block everything
  if (isVercelDomain) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: ['/'],
        },
      ],
    };
  }

  const commonSearchDisallow = ['/admin/', '/api/', '/temp/', '/private/'];
  const regionalSearchDisallow = ['/admin/', '/api/', '/private/'];
  const aiAndPrivacyDisallow = ['/admin/', '/private/'];

  return {
    rules: [
      // TIER 1 – GLOBAL SEARCH ENGINES
      {
        userAgent: [
          'Googlebot',
          'Google-InspectionTool',
          'Googlebot-Image',
          'Googlebot-News',
          'Googlebot-Video',
          'bingbot',
          'msnbot',
          'msnbot-media',
        ],
        disallow: commonSearchDisallow,
        allow: '/',
      },
      // TIER 2 – REGIONAL & ALTERNATIVE SEARCH ENGINES
      {
        userAgent: [
          'Baiduspider',
          'SogouBot',
          'YiyanBot',
          'YandexBot',
          'Yeti',
          'naver',
          'Slurp',
          'yahoo',
          'SeznamBot',
          'CocCocBot',
        ],
        disallow: regionalSearchDisallow,
        allow: '/',
      },
      // TIER 3, 4, 5 – PRIVACY, AI SEARCH, AND USER-TRIGGERED FETCHERS
      {
        userAgent: [
          'Bravebot',
          'duckduckbot',
          'duckassistbot',
          'MojeekBot',
          'MarginaliaBot',
          'WibyBot',
          'wiby',
          'StractBot',
          'AlexandriaBot',
          'Alexandria',
          'QwantBot',
          'StartpageBot',
          'YepBot',
          'EcosiaBot',
          'SwisscowsBot',
          'GibiruBot',
          'PresearchBot',
          'MillionshortBot',
          'DogpileBot',
          'LycosBot',
          'AskBot',
          'YaCyBot',
          'ShodanBot',
          'WolframAlphaBot',
          'SemanticScholarBot',
          'OAI-SearchBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'xAI-Grok',
          'Grok',
          'Grok-DeepSearch',
          'Kimi-SearchBot',
          'AzureAI-SearchBot',
          'MistralAI-SearchBot',
          'ChatGPT-User',
          'Claude-User',
          'Perplexity-User',
          'Kimi-User',
          'MistralAI-User',
          'Qwen-User',
          'Gemini-User',
          'Grok-User',
        ],
        disallow: aiAndPrivacyDisallow,
        allow: '/',
      },
      // TIER 6 – FOUNDATIONAL AI TRAINING HARVESTERS (BLOCKED)
      // AND AGGRESSIVE SECURITY SCRAPERS (BLOCKED)
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'anthropic-ai',
          'claude-web',
          'Google-Extended',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'FacebookBot',
          'GrokBot',
          'xAI-Bot',
          'xAI-Web-Crawler',
          'KimiBot',
          'QwenBot',
          'ChatGLM-Spider',
          'cohere-ai',
          'Amazonbot',
          'AI2Bot',
          'Diffbot',
          'CCBot',
          'Bytespider',
          'Doubaobot',
          'TikTokSpider',
          'laion-huggingface-processor',
          'laion-ai',
          'DeepSeekBot',
          'AI-TrainingBot',
          'AhrefsBot',
          'SemrushBot',
          'MajesticBot',
          'rogerbot',
          'DotBot',
          'DataForSEO',
          'ZeusBot',
          'Nutch',
          'Abonti',
          'zgrab',
          'Masscan',
        ],
        disallow: '/',
      },
      // GLOBAL WILD-CARD BACKUP
      {
        userAgent: '*',
        disallow: commonSearchDisallow,
        allow: '/',
      },
    ],
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap-articles.xml`,
      `${siteConfig.url}/sitemap-products.xml`,
    ],
  };
}
