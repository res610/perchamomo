import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AMEBA_BLOG_URL } from '@/constants';
import blogData from '@/data/blog.json';

export const metadata: Metadata = {
    title: 'ブログ',
    description: 'Percha Momoのブログ記事一覧。ネイルデザインやサロンの最新情報をお届けします。',
};

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
}

export default function BlogPage() {
    const posts: BlogPost[] = blogData;

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                        ブログ
                    </h1>
                    <p className="text-center text-gray-500 mb-12">
                        最新のお知らせやネイルデザイン情報
                    </p>

                    {posts.length > 0 ? (
                        <div className="space-y-6">
                            {posts.map((post, index) => (
                                <a
                                    key={index}
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h2 className="text-lg font-medium text-gray-800 hover:text-brand-dark transition-colors">
                                            {post.title}
                                        </h2>
                                        <time className="text-sm text-gray-400 mt-1 sm:mt-0 whitespace-nowrap">
                                            {new Date(post.pubDate).toLocaleDateString('ja-JP')}
                                        </time>
                                    </div>
                                    {post.description && (
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {post.description}
                                        </p>
                                    )}
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-400 mb-4">ブログ記事を準備中です</p>
                            <a
                                href={AMEBA_BLOG_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-dark hover:underline"
                            >
                                Ameba Blogで見る
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
