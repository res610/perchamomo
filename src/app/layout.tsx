import type { Metadata } from "next";
import "./globals.css";
import { STORE_LATITUDE, STORE_LONGITUDE, SALON_NAME, SALON_NAME_FULL, STORE_INFO, LINE_URL, INSTAGRAM_URL } from "@/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: {
        default: `${SALON_NAME_FULL}`,
        template: `%s | ${SALON_NAME}`,
    },
    description: `${SALON_NAME}は丁寧な施術とこだわりのデザインでお客様の指先を美しく彩るネイルサロンです。ジェルネイル、スカルプチュア、ケアメニューなど幅広く対応いたします。`,
    keywords: [
        "ネイルサロン",
        "ジェルネイル",
        "ネイルデザイン",
        "Percha Momo",
        "ネイルケア",
    ],
    authors: [{ name: SALON_NAME }],
    creator: SALON_NAME,
    publisher: SALON_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: SALON_NAME_FULL,
        description: `${SALON_NAME}は丁寧な施術とこだわりのデザインでお客様の指先を美しく彩るネイルサロンです。`,
        url: siteUrl,
        siteName: SALON_NAME_FULL,
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SALON_NAME_FULL,
        description: `${SALON_NAME}は丁寧な施術とこだわりのデザインでお客様の指先を美しく彩るネイルサロンです。`,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: `${basePath}/favicon.ico`, sizes: "any" },
        ],
    },
    manifest: `${basePath}/manifest.webmanifest`,
};

// JSON-LD 構造化データ
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: SALON_NAME,
    description: `${SALON_NAME}は丁寧な施術とこだわりのデザインでお客様の指先を美しく彩るネイルサロンです。`,
    url: siteUrl,
    telephone: STORE_INFO.phone,
    address: {
        "@type": "PostalAddress",
        streetAddress: STORE_INFO.address,
        addressCountry: "JP",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: STORE_LATITUDE,
        longitude: STORE_LONGITUDE,
    },
    priceRange: "¥¥",
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "19:00",
    },
    sameAs: [
        LINE_URL,
        INSTAGRAM_URL,
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ネイルサービス",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ジェルネイル",
                    description: "豊富なカラーとデザインのジェルネイル",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ネイルケア",
                    description: "爪の健康を保つケアメニュー",
                },
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://maps.google.com" />
                <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
