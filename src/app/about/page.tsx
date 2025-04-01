import { Metadata } from 'next';
import PageContentServer from '@/components/PageContentServer';

export const metadata: Metadata = {
    title: 'About Our School | CMS',
    description: 'Discover our rich history, values, and commitment to educational excellence.',
};

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

            {/* Dynamic Content Section */}
            <PageContentServer section="about" />
        </div>
    );
}