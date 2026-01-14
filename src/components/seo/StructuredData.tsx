import { Helmet } from 'react-helmet-async';

export const PersonSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://yourdomain.com';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nguyen The Chinh",
    "jobTitle": "Fullstack Developer",
    "url": siteUrl,
    "email": "nguyenthechinhk25@gmail.com",
    "telephone": "+84566113369",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hanoi",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://facebook.com/min.bro.35"
    ],
    "knowsAbout": [
      "ReactJS",
      "TypeScript",
      "Java Spring Boot",
      "MongoDB",
      "Node.js"
    ]
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};


