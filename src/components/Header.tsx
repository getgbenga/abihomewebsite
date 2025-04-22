import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary font-serif">Abihome</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Projects
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Services
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Partners
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Contact
            </Link>
            <Link 
              href="/projects/omega-apartments" 
              className="bg-accent text-white px-5 py-2.5 rounded-md font-medium hover:bg-accent/90 transition-all shadow-sm hover:shadow"
            >
              Omega Apartments
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
