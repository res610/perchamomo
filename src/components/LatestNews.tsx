import blogData from '@/data/blog.json';

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
}

export default function LatestNews() {
    const latest = (blogData as BlogPost[])[0];
    if (!latest) return null;

    const date = new Date(latest.pubDate).toLocaleDateString('ja-JP');

    return (
        <div className="bg-brand-light/40 border-y border-brand/30 my-4">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 text-sm min-w-0">
                <span className="shrink-0 bg-brand-dark text-white text-xs font-bold px-2 py-0.5 rounded">
                    NEW
                </span>
                <time className="shrink-0 text-gray-500">{date}</time>
                <a
                    href={latest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-brand-dark transition-colors truncate"
                >
                    {latest.title}
                </a>
            </div>
        </div>
    );
}
