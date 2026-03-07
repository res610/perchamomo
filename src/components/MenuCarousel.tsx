'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

const menuImages = [
    { src: '/images/menu-1.webp', alt: 'メニュー・料金表' },
    { src: '/images/menu-2.webp', alt: '料金例' },
    { src: '/images/menu-3.webp', alt: '注意事項' },
    { src: '/images/menu-4.webp', alt: 'ネクストステップメニュー' },
];

export default function MenuCarousel() {
    const [current, setCurrent] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);

    const goTo = useCallback((index: number) => {
        setCurrent((index + menuImages.length) % menuImages.length);
    }, []);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            goTo(current + (diff > 0 ? 1 : -1));
        }
    }, [touchStartX, current, goTo]);

    return (
        <div className="relative max-w-2xl mx-auto">
            {/* Image */}
            <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <Image
                    src={menuImages[current].src}
                    alt={menuImages[current].alt}
                    width={600}
                    height={850}
                    className="w-full h-auto rounded-lg shadow-sm"
                    priority
                />
            </div>

            {/* Prev / Next buttons */}
            <button
                onClick={() => goTo(current - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow transition-colors"
                aria-label="前へ"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => goTo(current + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow transition-colors"
                aria-label="次へ"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {menuImages.map((img, i) => (
                    <button
                        key={img.src}
                        onClick={() => goTo(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            i === current ? 'bg-brand-dark' : 'bg-gray-300'
                        }`}
                        aria-label={`${i + 1}枚目を表示`}
                    />
                ))}
            </div>
        </div>
    );
}
