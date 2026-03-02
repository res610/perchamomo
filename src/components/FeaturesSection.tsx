import { SALON_NAME } from '@/constants';

const features = [
    {
        title: '深爪・トラブル爪の対応',
        description:
            '深爪、噛み癖、むしり癖、凸凹爪等、お爪のお悩みをご相談ください。メディカルネイルプランナーの知識で丁寧にケアいたします。',
    },
    {
        title: '爪の育成に特化した技法',
        description:
            '各工程育成理論に基づいた施術を行っているため、ジェルネイルを楽しみながら爪の育成を行えます。平均3ヶ月程度で変化が見られ始めます。',
    },
    {
        title: '爪へのダメージを抑えた施術',
        description:
            '付け替えは爪にダメージを与えるアセトン溶剤を使わず、ベースジェルを一層残して付け替えを行うフィルインを導入。自爪を大事にした施術です。',
    },
    {
        title: '丁寧な施術と艶々美フォルム',
        description:
            'ベースを一本一本作り込み、全てのお爪のフォルムがどの角度から見ても揃うように仕上げます。フォルムが綺麗だと艶々に仕上がります。',
    },
    {
        title: 'ピタッと長持ちネイル',
        description:
            'ほとんどのお客様が4週以上経過しても浮きなし・引っかかりなしでお戻りいただいています。平均ご来店周期は4〜6週間です。',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                    {SALON_NAME}の特徴
                </h2>
                <p className="text-gray-500 text-center text-sm mb-12 max-w-2xl mx-auto">
                    約15年の実績と経験、メディカルネイルプランナーの知識を基に、お客様ひとりひとりの爪質・生活習慣に合わせた施術を行います。おかげ様でリピート率80%以上。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="text-base font-bold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-400 text-center mt-6">
                    ※育成結果・育成速度には個人差がございます。
                </p>
            </div>
        </section>
    );
}
