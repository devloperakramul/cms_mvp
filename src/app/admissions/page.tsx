import Link from "next/link";

export default function AdmissionsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-blue-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
                            <p className="text-xl">Begin your journey with us. Learn about our admission process and requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Admission Process</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Submit Application</h3>
                            <p className="text-gray-600">Complete our online application form with all required documents.</p>
                        </div>

                        <div className="text-center">
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Assessment</h3>
                            <p className="text-gray-600">Schedule and complete the entrance assessment and interview.</p>
                        </div>

                        <div className="text-center">
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Enrollment</h3>
                            <p className="text-gray-600">Upon acceptance, complete enrollment and join our community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Criteria */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Admission Criteria</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Academic Requirements</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Previous academic records</li>
                                <li>• Standardized test scores (if applicable)</li>
                                <li>• Teacher recommendations</li>
                                <li>• Student essay or personal statement</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Required Documents</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Completed application form</li>
                                <li>• Birth certificate</li>
                                <li>• Previous school records</li>
                                <li>• Health and immunization records</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Important Dates</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Fall Semester</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li>Application Opens: March 1, 2024</li>
                                        <li>Early Decision Deadline: May 1, 2024</li>
                                        <li>Regular Decision Deadline: June 15, 2024</li>
                                        <li>Admission Decisions: July 1, 2024</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Spring Semester</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li>Application Opens: October 1, 2024</li>
                                        <li>Early Decision Deadline: November 1, 2024</li>
                                        <li>Regular Decision Deadline: December 1, 2024</li>
                                        <li>Admission Decisions: December 15, 2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Apply?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Take the first step towards joining our school community by submitting your application.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="#"
                            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block"
                        >
                            Start Application
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                        >
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}