'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

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

export default function FaqContent() {
    return (
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
    );
}
