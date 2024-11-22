import { NextResponse } from 'next/server';
import { Authentication, refreshTokenInfo } from '@/services/alphastorage';
export async function POST(req: Request) {
  const auth = new Authentication();

  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', ''); // Lấy token từ header

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 401 });
    }

    const body: refreshTokenInfo = await req.json(); // Parse body và gán kiểu refreshTokenInfo
    const result = await auth.refreshToken(body, token); // Gọi phương thức refreshToken
    return NextResponse.json(result);
  } catch (error: unknown) {
    // console.error('Refresh token error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}