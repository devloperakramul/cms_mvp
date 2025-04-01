import { prisma } from '@/lib/prisma';
import PageContent from './PageContent';

type PageContentServerProps = {
    section: string;
    isEditable?: boolean;
};

export default async function PageContentServer({ section, isEditable = false }: PageContentServerProps) {
    // Fetch page data directly from the database using Prisma
    let pageData = null;

    try {
        pageData = await prisma.page.findUnique({
            where: { slug: section },
        });
    } catch (error) {
        console.error(`Error fetching ${section} page data:`, error);
    }

    // Pass the fetched data to the client component
    return <PageContent initialData={pageData} section={section} isEditable={isEditable} />;
}