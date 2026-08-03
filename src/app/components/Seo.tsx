import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  structuredData?: object | object[];
};

const SITE_URL = 'https://beebee.ai';
const SHARE_IMAGE = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png';

export function Seo({ title, description, path = '/', type = 'website', structuredData }: SeoProps) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];

  return (
    <Helmet>
      <html lang="zh-CN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BEEBEE AI" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={SHARE_IMAGE} />
      <meta property="og:image:alt" content="BEEBEE AI" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SHARE_IMAGE} />
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
