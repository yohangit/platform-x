import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json([{"id":1, "name":"Yohan Wijeratne", "techStack":".net,azure,sql", "experience":"16 years"},{"id":2, "name":"Ashan", "techStack":"nextjs, aws", "experience":"4 years"}])
  }
  