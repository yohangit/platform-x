import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json([{"id":1, "name":"Next.js"},{"id":2, "name":"Python"},{"id":3, "name":"AWS"}])
  }
  
