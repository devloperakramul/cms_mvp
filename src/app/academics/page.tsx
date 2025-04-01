import Link from "next/link";

export default function AcademicsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-blue-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold mb-6">Academics</h1>
                            <p className="text-xl">Explore our comprehensive academic programs and curriculum designed for student success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Programs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Academic Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Elementary School */}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Elementary School</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Grades K-5</li>
                                <li>• Core Subjects: Math, Science, English, Social Studies</li>
                                <li>• Specialized Programs: Art, Music, Physical Education</li>
                                <li>• Small Class Sizes</li>
                            </ul>
                        </div>

                        {/* Middle School */}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Middle School</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Grades 6-8</li>
                                <li>• Advanced Math and Science Programs</li>
                                <li>• Language Arts and Literature</li>
                                <li>• Foreign Language Options</li>
                            </ul>
                        </div>

                        {/* High School */}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">High School</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Grades 9-12</li>
                                <li>• College Preparatory Curriculum</li>
                                <li>• AP and Honors Courses</li>
                                <li>• Career and Technical Education</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Overview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Curriculum Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-900">Core Subjects</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="font-medium">Mathematics</p>
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                    <li>Algebra I & II</li>
                                    <li>Geometry</li>
                                    <li>Pre-Calculus</li>
                                    <li>AP Calculus</li>
                                </ul>

                                <p className="font-medium mt-6">Science</p>
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                    <li>Biology</li>
                                    <li>Chemistry</li>
                                    <li>Physics</li>
                                    <li>Environmental Science</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-900">Electives & Specializations</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="font-medium">Arts & Humanities</p>
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                    <li>Visual Arts</li>
                                    <li>Music Theory</li>
                                    <li>World Languages</li>
                                    <li>Literature Studies</li>
                                </ul>

                                <p className="font-medium mt-6">Technology & Innovation</p>
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                    <li>Computer Science</li>
                                    <li>Digital Media</li>
                                    <li>Robotics</li>
                                    <li>Web Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Academic Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Course Materials</h3>
                            <p className="text-gray-600 mb-4">Access your course syllabi, textbooks, and supplementary materials.</p>
                            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Resources →
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Academic Calendar</h3>
                            <p className="text-gray-600 mb-4">Stay updated with important dates, events, and academic deadlines.</p>
                            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Calendar →
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Student Support</h3>
                            <p className="text-gray-600 mb-4">Access tutoring services, academic advisors, and learning resources.</p>
                            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                Get Support →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Learn with Us?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Discover the possibilities that await you in our academic programs.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}