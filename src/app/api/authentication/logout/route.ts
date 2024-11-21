import { NextResponse } from 'next/server';
import { Authentication } from '@/services/alphastorage';

export async function GET(req: Request) {
  const auth = new Authentication();

  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', ''); // Lấy token từ header
    
    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 401 });
    }

    const result = await auth.logout(token); // Gọi phương thức logout
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
