import { SALON_NAME, AMEBA_BLOG_URL } from '@/constants';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
                    {SALON_NAME}について
                </h2>

                {/* サロンコンセプト */}
                <div className="mb-16">
                    <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
                        {SALON_NAME}では、どんなお爪の方にもネイルを通して自分を慈しむ時間を過ごして欲しいという思いから、お爪に悩みやコンプレックスがある方、シンプル上品な大人ネイルを楽しみたい方に向けたサービスをご提供しております。
                    </p>
                    <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mt-4">
                        ネイルで指先を慈しむことは、自分自身を慈しむこと。
                        <br />
                        どうぞネイルを通して、あなた本来の美しさを取り戻すお手伝いをさせてくださいませ。
                    </p>
                </div>

                {/* 担当者紹介 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* TODO: Ayaさんの写真に差し替え */}
                    <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                        <p className="text-gray-400 text-sm">担当ネイリスト写真</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">私が担当します</h3>
                        <p className="text-brand-dark font-medium mb-4">Aya</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            沖縄県出身。大学で心理学を専攻し、その後福祉系事務や化粧品販売の仕事をしながら、着付け教室やネイルスクール、エステのスクールに通い、さまざまな分野で知識を深めてきました。
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm mt-3">
                            ネイリスト歴は14年以上。どんなお爪の方にも安心してネイルを楽しんでいただきたいと、メディカルネイルプランナーの資格を取得。当時、沖縄での取得ができず大阪まで行き取得した県内初の取得者です。
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm mt-3">
                            爪は飾るものだけではなく、その人の美しさを引き出すもの。ぜひ、リラックスしながら美しい自爪を育てていきませんか？
                        </p>
                        <a
                            href={AMEBA_BLOG_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-sm text-brand-dark hover:underline"
                        >
                            活動歴はAmebaブログにて &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
