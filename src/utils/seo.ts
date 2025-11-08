/**
 * SEO utility functions for metadata generation
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string[];
}

export class SEOGenerator {
  private static readonly DEFAULT_SITE_NAME = 'Academic Portfolio';
  private static readonly DEFAULT_IMAGE = '/images/og-image.jpg';
  
  static generateTitle(pageTitle: string, siteName?: string): string {
    const site = siteName || this.DEFAULT_SITE_NAME;
    return `${pageTitle} | ${site}`;
  }

  static generateMetadata(
    pageTitle: string,
    description: string,
    options: Partial<SEOMetadata> = {}
  ): SEOMetadata {
    return {
      title: this.generateTitle(pageTitle),
      description,
      ogTitle: options.ogTitle || pageTitle,
      ogDescription: options.ogDescription || description,
      ogImage: options.ogImage || this.DEFAULT_IMAGE,
      ogType: options.ogType || 'website',
      twitterCard: options.twitterCard || 'summary_large_image',
      canonical: options.canonical,
      keywords: options.keywords || [],
    };
  }

  static generateSchemaOrg(profile: any): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      affiliation: {
        '@type': 'Organization',
        name: profile.institution,
      },
      email: profile.email,
      url: profile.socialLinks?.scholar,
      sameAs: Object.values(profile.socialLinks || {}).filter(Boolean),
    });
  }
}

