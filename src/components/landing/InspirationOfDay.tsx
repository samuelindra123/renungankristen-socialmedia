// File: src/components/landing/InspirationOfDay.tsx
import { ImQuotesLeft } from 'react-icons/im'; // <-- Ikon kutipan

export default function InspirationOfDay() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200 relative overflow-hidden">
      <ImQuotesLeft className="absolute top-4 right-4 text-8xl text-gray-100 -z-0" />
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b pb-2 z-10 relative">
        Inspiration of the Day
      </h2>
      <blockquote className="text-lg italic text-gray-600 z-10 relative">
        "Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah
        mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya
        kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal."
        <cite className="block not-italic text-right text-gray-500 mt-4">
          - Yohanes 3:16
        </cite>
      </blockquote>
    </div>
  );
}