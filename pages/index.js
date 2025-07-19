// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-800">
        Restore Old Photos.Bay
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-600 max-w-2xl mb-8">
        Perbaiki foto lama, buram, atau rusak dengan teknologi AI mutakhir. Gratis, cepat, dan berkualitas tinggi.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/restoration-siri">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg shadow">
            🖼️ Coba Restoration Siri
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-2xl text-lg shadow">
            🔐 Login Pengguna
          </button>
        </Link>
      </div>
      <footer className="mt-12 text-sm text-gray-500">
        &copy; 2025 Restore Old Photos.Bay — powered by Next.js + Tailwind CSS
      </footer>
    </div>
  );
}
