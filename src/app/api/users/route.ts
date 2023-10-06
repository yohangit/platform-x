import {NextRequest,NextResponse} from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json([{"id":1, "name":"Hasith Yaggahavita", "email":"hasith@99x.io"},{"id":1, "name":"Sachith Perera", "email":"sachith@99x.io"}])
  }
  
  export async function POST(request: Request) {  
    const {userName}: Partial<User> = await request.json()

    if(!userName){
      return NextResponse.json({"message":"Please provide a valid username"})
    }
    return NextResponse.json({"message":`User created successfully. Username - ${userName}`})
    }