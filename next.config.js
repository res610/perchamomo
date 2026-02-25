/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// --- ドメイン設定 ---
const SITE_DOMAIN = 'perchamomo.com';
const SITE_BASE_PATH = '';
// --------------------

const basePath = isDev ? '' : SITE_BASE_PATH;
const siteUrl = isDev
    ? 'http://localhost:3000'
    : `https://${SITE_DOMAIN}${SITE_BASE_PATH}`;

// ビルド時に manifest.webmanifest を自動生成
fs.writeFileSync(
    path.join(__dirname, 'public', 'manifest.webmanifest'),
    JSON.stringify({
        name: 'Percha Momo ネイルサロン',
        short_name: 'Percha Momo',
        description: 'Percha Momo ネイルサロン',
        start_url: `${basePath}/`,
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#e8b4b8',
        icons: [
            {
                src: `${basePath}/android-chrome-192x192.png`,
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: `${basePath}/android-chrome-512x512.png`,
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }, null, 4)
);

// ビルド時に sitemap.xml を自動生成
const today = new Date().toISOString().split('T')[0];
const sitemapPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/gallery/', priority: '0.8', changefreq: 'weekly' },
    { loc: '/menu/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/faq/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/blog/', priority: '0.6', changefreq: 'daily' },
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map(p => `    <url>
        <loc>${siteUrl}${p.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);

const nextConfig = {
    output: 'export',
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteUrl,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
