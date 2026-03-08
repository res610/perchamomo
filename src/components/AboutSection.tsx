import Image from 'next/image';
import { SALON_NAME, AMEBA_BLOG_URL } from '@/constants';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
                    {SALON_NAME}について
                </h2>

                {/* サロン名の由来 */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <p className="text-gray-600 leading-relaxed text-center">
                        スペイン語で「止まり木」を表す<strong>PERCHA（ペルチェ）</strong>と、
                        時間泥棒と盗まれた時間を人間に取り戻してくれた女の子の不思議なお話
                        ミヒャエル・エンデ作「<strong>MOMO（モモ）</strong>」から着想を得て名付けました。
                    </p>
                    <div className="flex justify-center mt-6">
                        <Image
                            src="/images/momo-book.webp"
                            alt="ミヒャエル・エンデ作『MOMO（モモ）』"
                            width={180}
                            height={248}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-center mt-6">
                        忙しい日々の中で、ほっと一息つける場所、
                        小鳥が羽を休めるための止まり木のように
                        そっと寄り添える人でありたい——そんな思いを込めております。
                    </p>
                </div>

                {/* サロンコンセプト */}
                <div className="mb-16 max-w-2xl mx-auto">
                    <p className="text-gray-600 leading-relaxed text-center">
                        {SALON_NAME}では、どんなお爪の方にもネイルを通して自分を慈しむ時間を過ごして欲しいという思いから、
                    </p>
                    <ul className="mt-4 space-y-1 text-gray-600 text-sm text-center">
                        <li>お爪に悩みやコンプレックスがある方</li>
                        <li>爪を大事にシンプル上品な大人ネイルを楽しみたい方</li>
                        <li>自爪を綺麗に魅せたい方</li>
                        <li>自分を慈しみ美しくなりたい方</li>
                        <li>安心して任せられるネイルサロンを探している方</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-center mt-4">
                        そんな方々に向けたサービスをご提供しております。
                    </p>
                    <p className="text-gray-600 leading-relaxed text-center mt-4">
                        ネイルで指先を慈しむことは、自分自身を慈しむこと。
                        <br />
                        どうぞネイルを通して、あなた本来の美しさを取り戻すお手伝いをさせてくださいませ。
                    </p>
                </div>

                {/* 担当者紹介 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                        <Image
                            src="/images/profile-aya.webp"
                            alt="担当ネイリスト Aya"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">私が担当します</h3>
                        <p className="text-brand-dark font-medium mb-4">こんにちは、Ayaです。</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            沖縄県出身、一児の母です。大学で心理学を専攻し、その後福祉系事務や化粧品販売の仕事をしながら、着付け教室やネイルスクール、エステのスクールに通い、さまざまな分野で知識を深めてきました。
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm mt-3 font-medium">
                            そして、ネイルの世界へ
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm mt-2">
                            ネイリスト歴は14年以上になります。ネイリストになり10年程経った頃、どんなお爪の方にも安心してネイルを楽しんでいただきたい！と様々な爪のトラブルに対応するため、メディカルネイルプランナーの資格も取得しました。当時は沖縄での取得ができず大阪まで行き取得してきました。県内初の取得者です。
                        </p>
                        <div className="mt-4 flex justify-center">
                            <Image
                                src="/images/medical-nail-planner.webp"
                                alt="メディカルネイルプランナー - 爪の育成技術を持つ特殊ネイリスト"
                                width={280}
                                height={47}
                                className="w-full max-w-[280px]"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm mt-4">
                            この資格の学びから、自爪の健康を保つことが、爪自体だけでなく、その人自身の美しさにつながることを実感し、サロンのメニュー全てに自爪育成技法を導入いたしました。
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
