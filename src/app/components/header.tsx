import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            Eddy Taxi
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition">
            Accueil
          </Link>
          <Link href="/services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/prices" className="hover:text-blue-400 transition">
            Tarifs
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}