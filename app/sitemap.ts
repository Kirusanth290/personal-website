export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ];
}
