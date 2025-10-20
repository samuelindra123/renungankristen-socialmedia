// File: src/components/landing/PopularPosts.tsx
import { HiChevronRight } from 'react-icons/hi'; // <-- Ikon chevron

const posts = [
  { id: 1, title: 'Cara Memulai Doa Pagi', slug: '/blog/doa-pagi' },
  { id: 2, title: 'Memahami Arti Pengampunan', slug: '/blog/pengampunan' },
  { id: 3, title: '5 Ayat Alkitab Tentang Harapan', slug: '/blog/ayat-harapan' },
];

export default function PopularPosts() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-5">
        Popular Posts
      </h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href={post.slug}
              className="flex items-center text-gray-700 hover:text-blue-600 group transition-colors"
            >
              <HiChevronRight className="w-5 h-5 text-blue-500 mr-2" />
              <span className="group-hover:underline">{post.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}