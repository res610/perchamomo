import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'メニュー・料金',
    description: 'Percha Momoのメニュー・料金一覧。ジェルネイル、ネイルケアなど各種メニューをご用意しております。',
};

// TODO: Wixサイトから実際のメニュー・料金を取得して更新
const menuCategories = [
    {
        name: 'ジェルネイル',
        items: [
            { name: 'ワンカラー', price: '¥0,000', description: 'お好きな1色で仕上げます' },
            { name: 'グラデーション', price: '¥0,000', description: '美しいグラデーション' },
            { name: 'フレンチ', price: '¥0,000', description: '上品なフレンチネイル' },
            { name: 'アート', price: '¥0,000〜', description: 'デザインによって変動します' },
        ],
    },
    {
        name: 'ケアメニュー',
        items: [
            { name: 'ハンドケア', price: '¥0,000', description: '爪の形を整え、甘皮を処理' },
            { name: 'フットケア', price: '¥0,000', description: '足元のケア' },
        ],
    },
    {
        name: 'その他',
        items: [
            { name: 'オフのみ', price: '¥0,000', description: 'ジェルオフ' },
            { name: 'リペア', price: '¥0,000〜', description: '1本からの修復' },
        ],
    },
];

export default function MenuPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                        メニュー・料金
                    </h1>
                    <p className="text-center text-gray-500 mb-12">
                        各メニューの料金はすべて税込です
                    </p>

                    <div className="space-y-12">
                        {menuCategories.map((category) => (
                            <div key={category.name}>
                                <h2 className="text-xl md:text-2xl font-bold mb-6 text-brand-dark border-b-2 border-brand pb-2">
                                    {category.name}
                                </h2>
                                <div className="space-y-4">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100"
                                        >
                                            <div>
                                                <h3 className="font-medium text-gray-800">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                            <span className="text-lg font-bold text-brand-dark mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                        <h3 className="font-bold text-gray-800 mb-2">ご注意</h3>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                            <li>料金はデザインの難易度により変動する場合がございます</li>
                            <li>初回の方はカウンセリングのお時間をいただいております</li>
                            <li>ご不明な点はお気軽にお問い合わせください</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
