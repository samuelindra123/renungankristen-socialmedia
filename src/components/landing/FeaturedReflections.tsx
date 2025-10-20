// File: src/components/landing/FeaturedReflections.tsx
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi'; // <-- Ikon panah

// Placeholder data
const reflections = [
  {
    id: 1,
    title: 'Menemukan Kasih dalam Keterbatasan',
    excerpt:
      'Refleksi tentang bagaimana kasih Tuhan tetap ada bahkan di saat-saat tergelap dalam hidup kita...',
    imageUrl: 'https://images.unsplash.com/photo-1455380543238-dba495a136C9?w=500',
    slug: '/reflections/menemukan-kasih',
  },
  {
    id: 2,
    title: 'Kekuatan Doa Pagi',
    excerpt:
      'Memulai hari dengan doa dapat mengubah perspektif dan memberi kita kekuatan untuk menghadapi tantangan...',
    imageUrl: 'https://images.unsplash.com/photo-1542820508-0a4793b0c16b?w=500',
    slug: '/reflections/kekuatan-doa',
  },
];

export default function FeaturedReflections() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Featured Reflections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reflections.map((item) => (
          <Link
            href={item.slug}
            key={item.id}
            className="group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-48 w-full">
              <Image
                src={`${item.imageUrl}&auto=format&fit=crop&q=75`}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
              <div className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                Read More
                <HiArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}