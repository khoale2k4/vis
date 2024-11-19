import { NextResponse } from 'next/server';
import { Authentication, loginInfo } from '@/services/alphastorage';

export async function POST(req: Request) {
  const auth = new Authentication();
  try {
    const body: loginInfo = await req.json(); // Parse request body
    const result = await auth.login(body); // Call the login method
      // Trả về status 200 khi thành công
      return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}