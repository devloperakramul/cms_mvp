import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Welcome to Our School</h1>
              <p className="text-xl mb-8">Empowering minds, inspiring futures, and building tomorrow's leaders through excellence in education.</p>
              <div className="space-x-4">
                <Link href="/admissions" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Apply Now
                </Link>
                <Link href="/about" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">STEM Programs</h3>
              <p className="text-gray-600">Innovative curriculum focusing on Science, Technology, Engineering, and Mathematics.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Arts & Culture</h3>
              <p className="text-gray-600">Rich programs in visual arts, music, theater, and cultural studies.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
              <p className="text-gray-600">International exchange programs and diverse cultural experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News cards would be dynamically generated */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">September 15, 2023</div>
                <h3 className="text-xl font-semibold mb-2">Annual Science Fair Winners</h3>
                <p className="text-gray-600 mb-4">Celebrating outstanding achievements in student research and innovation.</p>
                <Link href="/news/science-fair" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">September 10, 2023</div>
                <h3 className="text-xl font-semibold mb-2">Sports Team Championships</h3>
                <p className="text-gray-600 mb-4">Our basketball team secures the regional championship title.</p>
                <Link href="/news/sports" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">September 5, 2023</div>
                <h3 className="text-xl font-semibold mb-2">Arts Festival Announcement</h3>
                <p className="text-gray-600 mb-4">Join us for a week-long celebration of creativity and artistic expression.</p>
                <Link href="/news/arts-festival" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards an exceptional education experience.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
