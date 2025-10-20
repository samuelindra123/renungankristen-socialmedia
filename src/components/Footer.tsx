// File: src/components/Footer.tsx
import Link from 'next/link';
// <-- Import ikon media sosial
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF /> {/* <-- Ikon baru */}
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram /> {/* <-- Ikon baru */}
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter /> {/* <-- Ikon baru */}
            </Link>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-10 pt-8 border-t border-gray-700">
          © {new Date().getFullYear()} Renungan Kristen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}