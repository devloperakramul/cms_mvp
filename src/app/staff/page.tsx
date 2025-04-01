import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Staff & Faculty | CMS",
    description: "Meet our dedicated team of educators, administrators, and staff members who make our school community exceptional.",
};

export default function StaffPage() {
    return (
        <main className="container py-8">
            <h1 className="text-4xl font-bold mb-8">Staff & Faculty</h1>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">School Leadership</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-2xl font-medium mb-2">Dr. Sarah Johnson</h3>
                        <p className="text-lg text-blue-600 mb-4">Principal</p>
                        <p className="text-gray-700 mb-4">
                            Dr. Johnson brings over 20 years of educational leadership experience.
                            She is committed to fostering academic excellence and creating an
                            inclusive learning environment for all students.
                        </p>
                        <div className="text-sm text-gray-500">
                            Ph.D. in Educational Leadership | M.Ed. in Curriculum Development
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Management Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mr. Robert Chen</h3>
                        <p className="text-blue-600 mb-4">Vice Principal, Academic Affairs</p>
                        <p className="text-gray-700">Oversees curriculum development and academic programs.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mrs. Emily Martinez</h3>
                        <p className="text-blue-600 mb-4">Vice Principal, Student Services</p>
                        <p className="text-gray-700">Leads student support initiatives and counseling services.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mr. David Thompson</h3>
                        <p className="text-blue-600 mb-4">Administrative Director</p>
                        <p className="text-gray-700">Manages school operations and facilities.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Department Heads</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Dr. Michael Lee</h3>
                        <p className="text-blue-600 mb-4">Science Department</p>
                        <p className="text-gray-700">Ph.D. in Physics, 15 years teaching experience.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Ms. Rachel Williams</h3>
                        <p className="text-blue-600 mb-4">Mathematics Department</p>
                        <p className="text-gray-700">M.S. in Mathematics, Award-winning educator.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Dr. James Wilson</h3>
                        <p className="text-blue-600 mb-4">Humanities Department</p>
                        <p className="text-gray-700">Ph.D. in Literature, Published author.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Faculty Members</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Ms. Patricia Brown</h3>
                        <p className="text-blue-600 mb-4">English Literature</p>
                        <p className="text-gray-700">M.A. in English, Specializes in Creative Writing</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mr. John Smith</h3>
                        <p className="text-blue-600 mb-4">Physical Education</p>
                        <p className="text-gray-700">B.S. in Sports Science, Former Olympic Athlete</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Dr. Maria Garcia</h3>
                        <p className="text-blue-600 mb-4">Computer Science</p>
                        <p className="text-gray-700">Ph.D. in Computer Science, Industry Expert</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Support Staff</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mrs. Susan Taylor</h3>
                        <p className="text-blue-600 mb-4">School Counselor</p>
                        <p className="text-gray-700">M.S. in Psychology, Licensed Counselor</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Mr. Kevin Anderson</h3>
                        <p className="text-blue-600 mb-4">Technology Coordinator</p>
                        <p className="text-gray-700">B.S. in IT, Certified System Administrator</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-2">Ms. Linda Martinez</h3>
                        <p className="text-blue-600 mb-4">Librarian</p>
                        <p className="text-gray-700">M.L.S., 10 years of Library Science experience</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Campus Life Photo 1</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Faculty Event Photo 2</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Classroom Activity Photo 3</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">School Event Photo 4</span>
                    </div>
                </div>
            </section>
        </main>
    );
}