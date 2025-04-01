import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const contents = await prisma.content.findMany()
        return NextResponse.json(contents)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch contents' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const content = await prisma.content.create({
            data: body
        })
        return NextResponse.json(content)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create content' },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    try {
        const { id, ...data } = await request.json()
        const content = await prisma.content.update({
            where: { id },
            data
        })
        return NextResponse.json(content)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update content' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json()
        await prisma.content.delete({
            where: { id }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete content' },
            { status: 500 }
        )
    }
}