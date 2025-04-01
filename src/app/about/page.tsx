import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-blue-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold mb-6">About Our School</h1>
                            <p className="text-xl">Discover our rich history, values, and commitment to educational excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To provide a nurturing and innovative learning environment that empowers students to become critical thinkers,
                                compassionate leaders, and responsible global citizens. We strive to cultivate academic excellence while fostering
                                character development and personal growth.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To be recognized as a leading educational institution that inspires lifelong learning, promotes cultural
                                understanding, and prepares students to thrive in an ever-changing global society. We envision our graduates
                                as confident, innovative, and ethical leaders who positively impact their communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* School History */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our History</h2>
                    <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
                        <p>
                            Founded in 1985, our school began with a vision to provide exceptional education that combines academic
                            excellence with character development. Over the decades, we have grown from a small local school to a
                            renowned educational institution.
                        </p>
                        <p>
                            Throughout our journey, we have consistently adapted our teaching methods and facilities to meet the
                            evolving needs of our students while maintaining our core values and commitment to excellence.
                        </p>
                        <p>
                            Today, we continue to build on our rich heritage while embracing innovation and preparing our students
                            for the challenges and opportunities of the 21st century.
                        </p>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Principal's Message</h2>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    Dear Students, Parents, and Community Members,
                                </p>
                                <p>
                                    Welcome to our school community! As the principal, I am honored to lead an institution that places
                                    student success and well-being at the heart of everything we do. Our dedicated faculty and staff work
                                    tirelessly to create an engaging learning environment that challenges and supports each student.
                                </p>
                                <p>
                                    We believe in nurturing not just academic excellence, but also character, creativity, and leadership
                                    skills. Our commitment to providing a well-rounded education prepares our students for success in
                                    college, career, and life.
                                </p>
                                <p>
                                    I invite you to explore our programs and join us in our mission to inspire and empower the next
                                    generation of leaders.
                                </p>
                                <p className="font-semibold">
                                    Dr. Sarah Johnson<br />
                                    Principal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our School Community</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Take the first step towards providing your child with an exceptional educational experience.
                    </p>
                    <Link
                        href="/admissions"
                        className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
        </div>
    );
}