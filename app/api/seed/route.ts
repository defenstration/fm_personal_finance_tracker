import {seedDatabase} from '@/lib/supabaseClient'
import {NextResponse} from 'next/server'

export async function POST() {
    try {
        await seedDatabase()
        return NextResponse.json({message: 'Database seeded successfully'}, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {error: 'Failed to seed database'},
            {status: 500}
        )
    }
    }
