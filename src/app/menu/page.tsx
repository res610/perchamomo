import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCarousel from '@/components/MenuCarousel';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'メニュー・料金',
    description: 'Percha Momoのメニュー・料金一覧。自爪育成理論に基づいたジェルネイル、ネイルケアなど各種メニューをご用意しております。',
    alternates: { canonical: '/menu/' },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "メニュー・料金", item: `${siteUrl}/menu/` },
    ],
};

export default function MenuPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Header />
            <main className="min-h-screen">
                <div className="px-4 py-12">
                    <MenuCarousel />
                </div>
            </main>
            <Footer />
        </>
    );
}
