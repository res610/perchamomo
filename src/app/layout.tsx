import type { Metadata } from "next";
import "./globals.css";
import { STORE_LATITUDE, STORE_LONGITUDE, SALON_NAME, SALON_NAME_FULL, STORE_INFO, LINE_URL, INSTAGRAM_URL, AMEBA_BLOG_URL } from "@/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
    title: {
        default: `${SALON_NAME_FULL}`,
        template: `%s | ${SALON_NAME}`,
    },
    description: "沖縄県八重瀬町の完全予約制プライベートネイルサロン percha MOMO。自爪育成・深爪ケア・ジェルネイルなど、メディカルネイルプランナーの資格を持つネイリストが丁寧に施術いたします。",
    keywords: [
        "ネイルサロン",
        "八重瀬町 ネイルサロン",
        "沖縄 ネイルサロン",
        "自爪育成",
        "深爪 ケア",
        "ジェルネイル",
        "プライベートサロン",
        "percha MOMO",
        "ペルチェ モモ",
        "メディカルネイルプランナー",
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
        description: "沖縄県八重瀬町の完全予約制プライベートネイルサロン。自爪育成・深爪ケア・ジェルネイルを丁寧に施術。",
        url: siteUrl,
        siteName: SALON_NAME_FULL,
        images: [
            {
                url: `${siteUrl}/images/og-image.png`,
                width: 1200,
                height: 630,
                alt: SALON_NAME_FULL,
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SALON_NAME_FULL,
        description: "沖縄県八重瀬町の完全予約制プライベートネイルサロン。自爪育成・深爪ケア・ジェルネイルを丁寧に施術。",
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
            { url: `${basePath}/icon.png`, type: "image/png", sizes: "96x96" },
        ],
        apple: [
            { url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: `${basePath}/manifest.webmanifest`,
};

// JSON-LD 構造化データ
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: SALON_NAME,
    alternateName: ["percha MOMO", "ペルチェ モモ", "ペルチェモモ"],
    description: "沖縄県八重瀬町の完全予約制プライベートネイルサロン。自爪育成・深爪ケア・ジェルネイルなど、メディカルネイルプランナーの資格を持つネイリストが丁寧に施術いたします。",
    url: siteUrl,
    telephone: STORE_INFO.phone,
    image: `${siteUrl}/images/og-image.png`,
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "reservations",
        url: LINE_URL,
        availableLanguage: "Japanese",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: STORE_INFO.address,
        addressLocality: "八重瀬町",
        addressRegion: "沖縄県",
        postalCode: "901-0504",
        addressCountry: "JP",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: STORE_LATITUDE,
        longitude: STORE_LONGITUDE,
    },
    areaServed: [
        { "@type": "City", name: "八重瀬町" },
        { "@type": "City", name: "豊見城市" },
        { "@type": "City", name: "糸満市" },
        { "@type": "City", name: "那覇市" },
        { "@type": "State", name: "沖縄県" },
    ],
    priceRange: "¥¥",
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
    },
    sameAs: [
        LINE_URL,
        INSTAGRAM_URL,
        AMEBA_BLOG_URL,
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ネイルサービス",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "自爪育成ジェルネイル",
                    description: "自爪育成技法を用いたジェルネイル。フィルイン導入で爪へのダメージを抑えた施術",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "深爪・トラブル爪ケア",
                    description: "深爪、噛み癖、むしり癖、トラブル爪に対応。メディカルネイルプランナーの知識で丁寧にケア",
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
                {gaId && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
                            }}
                        />
                    </>
                )}
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
