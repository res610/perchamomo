import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'メニュー・料金',
    description: 'Percha Momoのメニュー・料金一覧。自爪育成理論に基づいたジェルネイル、ネイルケアなど各種メニューをご用意しております。',
    alternates: { canonical: '/menu/' },
};

const menuImages = [
    { src: '/images/menu-1.webp', alt: 'メニュー・料金表' },
    { src: '/images/menu-2.webp', alt: '料金例' },
    { src: '/images/menu-3.webp', alt: '注意事項' },
    { src: '/images/menu-4.webp', alt: 'ネクストステップメニュー' },
];

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
                <div className="max-w-2xl mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                        メニュー・料金
                    </h1>

                    <div className="space-y-8">
                        {menuImages.map((img) => (
                            <Image
                                key={img.src}
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={850}
                                className="w-full h-auto rounded-lg shadow-sm"
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
