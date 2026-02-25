import { SALON_NAME } from '@/constants';

export default function HeroSection() {
    return (
        <section className="relative bg-brand-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
                <div className="text-center">
                    {/* TODO: ヒーロー画像に差し替え */}
                    <div className="w-full h-64 md:h-96 bg-brand/20 rounded-2xl flex items-center justify-center mb-8">
                        <p className="text-gray-500 text-sm">ヒーロー画像をここに配置</p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                        {SALON_NAME}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        {/* TODO: Wixサイトからキャッチコピーを取得 */}
                        あなたの指先に、特別なひとときを。
                    </p>
                </div>
            </div>
        </section>
    );
}
