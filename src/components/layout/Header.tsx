import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-blue-800">
                        School Name
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/academics" className="text-gray-600 hover:text-blue-800">
                            Academics
                        </Link>
                        <Link href="/admissions" className="text-gray-600 hover:text-blue-800">
                            Admissions
                        </Link>
                        <Link href="/school-life" className="text-gray-600 hover:text-blue-800">
                            School Life
                        </Link>
                        <Link href="/news" className="text-gray-600 hover:text-blue-800">
                            News & Events
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-blue-800">
                            Contact
                        </Link>
                    </div>

                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;