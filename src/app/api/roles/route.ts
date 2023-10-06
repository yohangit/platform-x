import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json([{"id":1, "name":"Developer"},{"id":2, "name":"UX Engineer"},{"id":3, "name":"Business Analyst"}])
  }
  
