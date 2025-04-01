import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Life | CMS",
    description: "Discover the vibrant school life and student activities at our institution.",
};

export default function SchoolLifePage() {
    return (
        <main className="container py-8">
            <h1 className="text-4xl font-bold mb-6">School Life</h1>
            <div className="grid gap-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Student Activities</h2>
                    <p className="text-gray-700 mb-4">
                        Our school offers a rich variety of extracurricular activities and programs
                        that enhance the educational experience and foster personal growth.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Campus Events</h2>
                    <p className="text-gray-700 mb-4">
                        Throughout the academic year, we organize various events, celebrations,
                        and activities that bring our school community together.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Student Clubs</h2>
                    <p className="text-gray-700 mb-4">
                        Join our diverse range of student clubs and organizations where you can
                        pursue your interests, develop leadership skills, and connect with peers.
                    </p>
                </section>
            </div>
        </main>
    );
}