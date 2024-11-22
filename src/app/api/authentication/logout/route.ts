import { NextResponse } from 'next/server';
import { Authentication } from '@/services/alphastorage';

export async function GET(req: Request) {
  const auth = new Authentication();

  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');    
    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 401 });
    }
    const result = await auth.logout(token); // Gọi phương thức logout
    return NextResponse.json(result);
  } catch (error: unknown) {
    // console.error('Logout error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}