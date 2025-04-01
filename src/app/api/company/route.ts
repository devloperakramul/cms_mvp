import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const company = await prisma.company.findFirst();
        return NextResponse.json(company);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch company details' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const company = await prisma.company.upsert({
            where: { id: data.id || '' },
            update: data,
            create: data
        });
        return NextResponse.json(company);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update company details' },
            { status: 500 }
        );
    }
}