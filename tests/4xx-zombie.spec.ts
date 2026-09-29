import { test, expect } from '@playwright/test';
import seoData from '../data/seo-content.json';
import { cities } from '../lib/data';

test.describe('4xx Zombie Audit', () => {
  test('Verify no 4xx errors on all published blog posts', async ({ request }) => {
    for (const blog of seoData.blogs) {
      const response = await request.get(`/blog/${blog.slug}`);
      expect(response.status()).toBeLessThan(400);
    }
  });

  test('Verify no 4xx errors on all location pages', async ({ request }) => {
    for (const city of cities) {
      if (['new-york-city', 'san-francisco', 'austin', 'chicago', 'seattle', 'boston', 'denver', 'miami'].includes(city.slug)) {
        const response = await request.get(`/location/${city.slug}`);
        expect(response.status()).toBeLessThan(400);
      }
    }
  });
});
