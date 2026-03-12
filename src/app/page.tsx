import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LatestNews from '@/components/LatestNews';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import SalonCommitmentSection from '@/components/SalonCommitmentSection';
import InstagramFeed from '@/components/InstagramFeed';
import ShopInfoSection from '@/components/ShopInfoSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <div className="h-4" />
                <LatestNews />
                <AboutSection />
                <FeaturesSection />
                <SalonCommitmentSection />
                <InstagramFeed />
                <ShopInfoSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
