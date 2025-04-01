import { Company } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()

        const company = await Company.findUnique({
            where: { email }
        })

        if (!company || !bcrypt.compareSync(password, company.password)) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // TODO: Implement proper session/token management
        const response = NextResponse.json({ success: true })
        response.cookies.set('admin-auth', 'authenticated', {
            httpOnly: true,
            maxAge: 60 * 60 * 24 // 1 day
        })

        return response
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}