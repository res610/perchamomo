'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { INSTAGRAM_URL } from '@/constants';
import instagramData from '@/data/instagram.json';

interface InstagramPost {
    id: string;
    caption: string;
    mediaType: string;
    permalink: string;
    timestamp: string;
    localImage: string;
}

export default function InstagramFeed() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const posts: InstagramPost[] = instagramData.posts || [];

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = 300;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="instagram" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
                    Instagram
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-dark transition-colors"
                    >
                        @perchamomo
                    </a>
                </p>

                {posts.length > 0 ? (
                    <div className="relative">
                        {/* Scroll Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors hidden md:block"
                            aria-label="前へ"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors hidden md:block"
                            aria-label="次へ"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Posts Grid */}
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth snap-x pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {posts.map((post) => (
                                <a
                                    key={post.id}
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 snap-start w-64 h-64 relative rounded-lg overflow-hidden group"
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${post.localImage}`}
                                        alt={post.caption || 'Instagram投稿'}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="256px"
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-12">
                        <p>Instagram投稿を準備中です</p>
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-brand-dark hover:underline"
                        >
                            Instagramで見る
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
