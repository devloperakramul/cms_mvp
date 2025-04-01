import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Updates | CMS",
    description: "Stay updated with the latest news, announcements, and stories from our school community.",
};

export default function NewsPage() {
    return (
        <main className="container py-8">
            <h1 className="text-4xl font-bold mb-6">News & Updates</h1>
            <div className="grid gap-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                    <div className="space-y-4">
                        <article className="p-4 border rounded-lg">
                            <h3 className="text-xl font-medium mb-2">Academic Excellence Awards 2024</h3>
                            <p className="text-gray-700">Celebrating our students' outstanding achievements in academics and research.</p>
                            <div className="text-sm text-gray-500 mt-2">Posted on January 15, 2024</div>
                        </article>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
                    <div className="space-y-4">
                        <article className="p-4 border rounded-lg">
                            <h3 className="text-xl font-medium mb-2">Spring Semester Registration Open</h3>
                            <p className="text-gray-700">Registration for the upcoming spring semester is now open. Check the academic calendar for important dates.</p>
                            <div className="text-sm text-gray-500 mt-2">Posted on January 10, 2024</div>
                        </article>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Featured Stories</h2>
                    <div className="space-y-4">
                        <article className="p-4 border rounded-lg">
                            <h3 className="text-xl font-medium mb-2">Innovation in Education</h3>
                            <p className="text-gray-700">Exploring new teaching methodologies and technological integration in our classrooms.</p>
                            <div className="text-sm text-gray-500 mt-2">Posted on January 5, 2024</div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}