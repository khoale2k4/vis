import { NextResponse } from 'next/server';
import {  createUserInfo, loginInfo, User } from '@/services/alphastorage';

export async function POST(req: Request) {
  const auth = new User();
  try {
    const body:createUserInfo = await req.json(); // Parse request body
    console.log(body)
    const result = await auth.signup(body); // Call the login method
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}