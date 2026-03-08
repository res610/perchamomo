'use client';

import { useState } from 'react';
import { STORE_LATITUDE, STORE_LONGITUDE, MAP_ZOOM_LEVEL } from '@/constants';

export default function LazyGoogleMap() {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <iframe
                src={`https://www.google.com/maps?q=${STORE_LATITUDE},${STORE_LONGITUDE}&z=${MAP_ZOOM_LEVEL}&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-80"
                title="店舗所在地"
            />
        );
    }

    return (
        <button
            onClick={() => setIsLoaded(true)}
            className="w-full h-64 md:h-80 bg-gray-200 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-300 transition-colors"
            aria-label="Googleマップを読み込む"
        >
            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-gray-500">タップしてマップを表示</span>
        </button>
    );
}
