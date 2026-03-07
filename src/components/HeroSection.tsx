import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
            <Image
                src="/images/hero.webp"
                alt="施術風景"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-sm md:text-base tracking-widest text-white/90 mb-3">
                    沖縄県 島尻郡八重瀬町後原 完全予約制プライベートネイルサロン
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                    percha MOMO
                </h1>
                <p className="text-lg md:text-2xl text-white/90 mt-2">
                    （ペルチェ モモ）
                </p>
            </div>
        </section>
    );
}
