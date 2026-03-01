import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryContent from '@/components/GalleryContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'ネイルギャラリー',
    description: 'Percha Momoのネイルデザインギャラリー。ジェルネイル、フレンチ、アートなど施術例をご覧いただけます。',
    alternates: { canonical: '/gallery/' },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "ネイルギャラリー", item: `${siteUrl}/gallery/` },
    ],
};

export default function GalleryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Header />
            <main className="min-h-screen">
                <GalleryContent />
            </main>
            <Footer />
        </>
    );
}
