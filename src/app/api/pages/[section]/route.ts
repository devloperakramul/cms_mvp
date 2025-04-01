import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET handler to fetch page content by section
export async function GET(
    request: NextRequest,
    { params }: { params: { section: string } }
) {
    try {
        const { section } = params;

        // Find the page by slug (section name)
        const page = await prisma.page.findUnique({
            where: { slug: section },
        });

        // If page doesn't exist, return 404
        if (!page) {
            return NextResponse.json(
                { error: `Page with section '${section}' not found` },
                { status: 404 }
            );
        }

        // Return the page data
        return NextResponse.json(page);
    } catch (error) {
        console.error('Error fetching page:', error);
        return NextResponse.json(
            { error: 'Failed to fetch page content' },
            { status: 500 }
        );
    }
}

// POST handler to update page content
export async function POST(
    request: NextRequest,
    { params }: { params: { section: string } }
) {
    try {
        const { section } = params;
        const data = await request.json();

        // Update or create the page
        const page = await prisma.page.upsert({
            where: { slug: section },
            update: {
                title: data.title,
                description: data.description,
                content: data.content,
            },
            create: {
                slug: section,
                title: data.title,
                description: data.description,
                content: data.content,
            },
        });

        return NextResponse.json(page);
    } catch (error) {
        console.error('Error updating page:', error);
        return NextResponse.json(
            { error: 'Failed to update page content' },
            { status: 500 }
        );
    }
}