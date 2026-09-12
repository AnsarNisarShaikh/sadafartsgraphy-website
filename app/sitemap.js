import { fetchWorksDetail } from '@/apis/getWorkData';

const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://sadafartsgraphy.com';

export default async function sitemap() {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/my-work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  let servicePages = [];
  try {
    const { workDetails } = await fetchWorksDetail();
    servicePages = workDetails.map((service) => ({
      url: `${baseUrl}/my-work/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Failed to fetch services for sitemap:', error);
  }

  return [...staticPages, ...servicePages];
}
