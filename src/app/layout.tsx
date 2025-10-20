// File: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // <-- IMPORT HEADER
import Footer from '@/components/Footer'; // <-- IMPORT FOOTER

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Renungan Kristen',
  description: 'Situs refleksi dan inspirasi Kristiani',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header /> {/* <-- TAMBAHKAN HEADER DI SINI */}
          {/* 'flex-grow' membuat 'children' (page.tsx) mengisi ruang */}
          <main className="flex-grow">{children}</main>
          <Footer /> {/* <-- TAMBAHKAN FOOTER DI SINI */}
        </div>
      </body>
    </html>
  );
}