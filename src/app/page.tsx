import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InstagramFeed from '@/components/InstagramFeed';
import ShopInfoSection from '@/components/ShopInfoSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />

                {/* 店内紹介セクション */}
                <section id="shop" className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                            店内紹介
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* TODO: Wixサイトから店内写真を取得して配置 */}
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center"
                                >
                                    <p className="text-gray-400 text-sm">店内写真 {i}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-6 leading-relaxed">
                            {/* TODO: Wixサイトから店内紹介テキストを取得 */}
                            清潔感のある落ち着いた空間で、リラックスしながら施術をお受けいただけます。
                        </p>
                    </div>
                </section>

                <InstagramFeed />
                <ShopInfoSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
