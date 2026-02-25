import { STORE_INFO, LINE_URL } from '@/constants';
import LazyGoogleMap from './LazyGoogleMap';

export default function ShopInfoSection() {
    return (
        <section id="access" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                    店舗情報・アクセス
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <table className="w-full text-sm md:text-base">
                            <tbody>
                                <tr className="border-b">
                                    <th className="py-3 pr-4 text-left text-gray-500 font-normal w-24">住所</th>
                                    <td className="py-3 text-gray-800">
                                        {STORE_INFO.postalCode}<br />
                                        {STORE_INFO.address}
                                        {STORE_INFO.building && <><br />{STORE_INFO.building}</>}
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-3 pr-4 text-left text-gray-500 font-normal">電話番号</th>
                                    <td className="py-3 text-gray-800">
                                        <a href={`tel:${STORE_INFO.phone.replace(/-/g, '')}`} className="text-brand-dark hover:underline">
                                            {STORE_INFO.phone}
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-3 pr-4 text-left text-gray-500 font-normal">営業時間</th>
                                    <td className="py-3 text-gray-800">{STORE_INFO.openingHours}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-3 pr-4 text-left text-gray-500 font-normal">定休日</th>
                                    <td className="py-3 text-gray-800">{STORE_INFO.closedDay}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-6">
                            <a
                                href={LINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full hover:bg-[#05b04c] transition-colors text-sm font-bold"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                LINEでお問い合わせ
                            </a>
                        </div>
                    </div>
                    <div className="h-64 md:h-full min-h-[256px] rounded-xl overflow-hidden">
                        <LazyGoogleMap />
                    </div>
                </div>
            </div>
        </section>
    );
}
