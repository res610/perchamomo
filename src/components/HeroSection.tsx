import { SALON_NAME, SALON_SUBTITLE } from '@/constants';

export default function HeroSection() {
    return (
        <section className="relative bg-brand-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
                <div className="text-center">
                    {/* TODO: ヒーロー画像に差し替え */}
                    <div className="w-full h-64 md:h-96 bg-brand/20 rounded-2xl flex items-center justify-center mb-8">
                        <p className="text-gray-500 text-sm">ヒーロー画像をここに配置</p>
                    </div>
                    <p className="text-sm tracking-widest text-gray-500 mb-2">{SALON_SUBTITLE}</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        {SALON_NAME}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        沖縄県八重瀬町　完全予約制プライベートネイルサロン
                    </p>
                    <p className="text-sm text-gray-500 max-w-xl mx-auto mt-4 leading-relaxed">
                        スペイン語で「止まり木」を表す<em>PERCHA</em>と、ミヒャエル・エンデ作『MOMO』から着想を得て名付けました。
                        <br className="hidden md:block" />
                        忙しい日々の中で、ほっと一息つける場所でありたい。
                        <br className="hidden md:block" />
                        小鳥が羽を休めるための止まり木のように、そっと寄り添えるサロンです。
                    </p>
                </div>
            </div>
        </section>
    );
}
