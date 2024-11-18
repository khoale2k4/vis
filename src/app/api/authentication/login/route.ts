import { NextResponse } from 'next/server';
import { Authentication, loginInfo } from '@/services/alphastorage';

export async function POST(req: Request) {
  const auth = new Authentication();
  try {
    const body: loginInfo = await req.json(); // Parse request body
    const result = await auth.login(body); // Call the login method
    if (result.success) {
      // Trả về status 200 khi thành công
      return NextResponse.json(result);
    } else {
      // Trả về status 400 hoặc 401 khi thất bại
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}