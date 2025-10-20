// File: src/components/landing/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div
      className="w-full h-[70vh] bg-blue-100 bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070')",
      }}
    >
      <div className="bg-black bg-opacity-40 p-10 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Selamat Datang di Renungan Kristen
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
          Menemukan kedamaian, inspirasi, dan kekuatan spiritual melalui refleksi
          harian.
        </p>
        <Link
          href="/reflections"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
        >
          Mulai Membaca
        </Link>
      </div>
    </div>
  );
}