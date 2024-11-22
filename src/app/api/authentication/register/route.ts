import { NextResponse } from 'next/server';
import { createUserInfo, User } from '@/services/alphastorage';

export async function POST(req: Request) {
  const auth = new User();
  try {
    // Parse request body
    const body: createUserInfo = await req.json();

    // Call the signup method
    const result = await auth.signup(body);

    // Return response
    return NextResponse.json(result);
  } catch (error: unknown) {
    // Handle error properly with type-safe
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}