'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

// TODO: Wixサイトからネイル画像をダウンロードして public/images/gallery/ に配置
// 以下はプレースホルダー
const galleryImages = [
    { src: '', alt: 'ネイルデザイン 1' },
    { src: '', alt: 'ネイルデザイン 2' },
    { src: '', alt: 'ネイルデザイン 3' },
    { src: '', alt: 'ネイルデザイン 4' },
    { src: '', alt: 'ネイルデザイン 5' },
    { src: '', alt: 'ネイルデザイン 6' },
    { src: '', alt: 'ネイルデザイン 7' },
    { src: '', alt: 'ネイルデザイン 8' },
    { src: '', alt: 'ネイルデザイン 9' },
];

export default function GalleryContent() {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                    ネイルギャラリー
                </h1>
                <p className="text-center text-gray-500 mb-12">
                    施術例をご覧ください
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => image.src && setModalImage(image)}
                            className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity"
                        >
                            {image.src ? (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image.src}`}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <p className="text-gray-400 text-sm">{image.alt}</p>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {modalImage && (
                <ImageModal
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${modalImage.src}`}
                    alt={modalImage.alt}
                    onClose={() => setModalImage(null)}
                />
            )}
        </>
    );
}
