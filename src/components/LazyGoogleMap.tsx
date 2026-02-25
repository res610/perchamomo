'use client';

import { useState, useRef, useEffect } from 'react';
import { STORE_LATITUDE, STORE_LONGITUDE, MAP_ZOOM_LEVEL } from '@/constants';

export default function LazyGoogleMap() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="w-full h-full">
            {isVisible ? (
                <iframe
                    src={`https://www.google.com/maps?q=${STORE_LATITUDE},${STORE_LONGITUDE}&z=${MAP_ZOOM_LEVEL}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '256px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="店舗所在地"
                />
            ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center min-h-[256px]">
                    <p className="text-gray-400 text-sm">地図を読み込み中...</p>
                </div>
            )}
        </div>
    );
}
