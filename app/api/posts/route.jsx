import { createConnection } from '@/lib/db.jsx';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM test.books";
        const [posts] = await db.query(sql);
        return NextResponse.json(posts);
    } catch(error) {
        console.log(error);
        return NextResponse.json({error: error.message});
    }
}