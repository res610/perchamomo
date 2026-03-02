const commitments = [
    {
        sense: '嗅覚（香り）',
        icon: '🌿',
        description:
            '季節に合わせてエッセンシャルオイルをディフューザーで焚いてお迎え。ホットタオルにもエッセンシャルオイルを使用しています。',
    },
    {
        sense: '視覚',
        icon: '💡',
        description:
            '黄色の暖かみのある照明で落ち着いた雰囲気に。全身鏡で仕上がりを確認して気持ちを上げていただけます。',
    },
    {
        sense: '触覚',
        icon: '🧶',
        description:
            '肌あたりの優しいタオルやファブリックの家具を使用。季節に合わせた室温管理と、最後に保湿とハンドマッサージをお付けしています。',
    },
    {
        sense: '聴覚',
        icon: '🎵',
        description:
            'テレビは置かず、なるべく生活音をさせない空間に。BGMは声の入っていない、もしくは日本語以外の曲を流しています。',
    },
];

export default function SalonCommitmentSection() {
    return (
        <section id="commitment" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                    サロンのこだわり
                </h2>
                <p className="text-gray-500 text-center text-sm mb-12 max-w-2xl mx-auto">
                    サロンにいる時間をセルフケアの時間にしていただきたいので、五感からリラックス&リフレッシュしていただくためにこだわっております。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {commitments.map((item) => (
                        <div
                            key={item.sense}
                            className="bg-brand-light/20 rounded-xl p-6"
                        >
                            <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                            <h3 className="text-base font-bold text-gray-800 mb-2">
                                {item.sense}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-400 text-center mt-6">
                    ドリンクサービスはお水（冷たい/常温をお選びいただけます）をペットボトルでご提供。余りはお持ち帰りください。
                </p>
            </div>
        </section>
    );
}
