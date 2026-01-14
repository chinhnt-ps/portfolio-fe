import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const MetaTags = ({ title, description, keywords, image, url }: MetaTagsProps) => {
  const { i18n } = useTranslation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://yourdomain.com';
  const fullTitle = `${title} | Nguyen The Chinh - Fullstack Developer`;
  const currentUrl = url || `${siteUrl}${window.location.pathname}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="language" content={i18n.language} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:locale" content={i18n.language === 'vi' ? 'vi_VN' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional */}
      <meta name="author" content="Nguyen The Chinh" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};


