'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// TODO: Wixサイトから実際のFAQを取得して更新
const faqs = [
    {
        question: '予約は必要ですか？',
        answer: 'はい、完全予約制となっております。LINEまたはお電話にてご予約ください。',
    },
    {
        question: '初めてですが、何か持ち物はありますか？',
        answer: '特にご持参いただくものはございません。デザインのイメージがあれば、画像をお持ちいただけるとスムーズです。',
    },
    {
        question: '施術時間はどのくらいですか？',
        answer: 'メニューにもよりますが、おおよそ1時間半〜2時間程度です。アートの内容により前後する場合がございます。',
    },
    {
        question: 'ジェルネイルはどのくらい持ちますか？',
        answer: '個人差がありますが、通常3〜4週間程度です。爪の伸び具合に合わせてメンテナンスをおすすめしています。',
    },
    {
        question: 'キャンセルや変更はできますか？',
        answer: '前日までにご連絡いただければ変更・キャンセルが可能です。当日のキャンセルはキャンセル料が発生する場合がございます。',
    },
    {
        question: '駐車場はありますか？',
        answer: '近隣にコインパーキングがございます。詳しくはお問い合わせください。',
    },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 flex justify-between items-center text-left hover:text-brand-dark transition-colors"
            >
                <span className="font-medium text-gray-800 pr-4">
                    <span className="text-brand-dark font-bold mr-2">Q.</span>
                    {question}
                </span>
                <svg
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-5 pl-8">
                    <p className="text-gray-600 leading-relaxed">
                        <span className="text-brand font-bold mr-2">A.</span>
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function FaqPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                        よくある質問
                    </h1>
                    <p className="text-center text-gray-500 mb-12">
                        お客様からよくいただくご質問をまとめました
                    </p>

                    <div>
                        {faqs.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
