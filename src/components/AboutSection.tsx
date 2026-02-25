import { SALON_NAME } from '@/constants';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                    サロンについて
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* TODO: サロン画像に差し替え */}
                    <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                        <p className="text-gray-400 text-sm">サロン画像</p>
                    </div>
                    <div>
                        <p className="text-gray-600 leading-relaxed">
                            {/* TODO: Wixサイトからサロン紹介文を取得 */}
                            {SALON_NAME}は、お客様一人ひとりに寄り添い、丁寧な施術とこだわりのデザインで指先を美しく彩るネイルサロンです。
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            リラックスできる空間で、あなただけのネイルデザインを一緒に作り上げましょう。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
