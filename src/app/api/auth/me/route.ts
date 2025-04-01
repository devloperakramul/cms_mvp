import { Company } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        // TODO: Implement proper session validation
        return NextResponse.json({ authenticated: true })
    } catch (error) {
        console.error('Auth check error:', error)
        return NextResponse.json(
            { authenticated: false },
            { status: 401 }
        )
    }
}