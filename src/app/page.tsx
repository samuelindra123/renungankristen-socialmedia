// File: src/app/page.tsx
import HeroSection from '@/components/landing/HeroSection';
import InspirationOfDay from '@/components/landing/InspirationOfDay';
import FeaturedReflections from '@/components/landing/FeaturedReflections';
import NewsletterSubscription from '@/components/landing/NewsletterSubscription';
import PopularPosts from '@/components/landing/PopularPosts';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Container untuk memisahkan Main Content (kiri) dan Sidebar (kanan) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* 2. Main Content Area (Kolom Kiri) */}
          <div className="lg:col-span-2 space-y-12">
            <InspirationOfDay />
            <FeaturedReflections />
          </div>

          {/* 3. Sidebar (Kolom Kanan) */}
          <aside className="lg:col-span-1 space-y-12 mt-12 lg:mt-0">
            <NewsletterSubscription />
            <PopularPosts />
          </aside>
        </div>
      </section>
    </>
  );
}