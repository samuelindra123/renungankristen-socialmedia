// File: src/components/landing/NewsletterSubscription.tsx
import { HiOutlineMail } from 'react-icons/hi'; // <-- Ikon email

export default function NewsletterSubscription() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Weekly Newsletter
      </h3>
      <p className="text-gray-600 mb-5">
        Dapatkan inspirasi mingguan langsung ke email Anda.
      </p>
      <form className="flex flex-col space-y-3">
        <div className="relative">
          <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email untuk newsletter"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Subscribe</span>
        </button>
      </form>
    </div>
  );
}