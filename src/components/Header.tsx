// File: src/components/Header.tsx
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi'; // <-- Import ikon

export default function Header() {
  const navLinks = [
    // ... (isi navLinks sama)
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/reflections', label: 'Reflections' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Renungan Kristen
        </Link>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <Link
          href="/register"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md transform hover:-translate-y-0.5"
        >
          Join Our Community
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle mobile menu"
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
          >
            <HiMenu className="w-6 h-6" /> {/* <-- Ikon baru */}
          </button>
        </div>
      </nav>
    </header>
  );
}