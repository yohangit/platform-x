import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json([{"id":1, "name":"Build a team assembling app","description":"Build a simple team assembling app using next.js and react", "techStack":[{"name":"next.js"},{ "name": "react"}], "team":[{"members":[{"name":"Yohan Wijeratne","role":"developer", "experience":"16 Years", "worktype":"full time", "availability":"01/10/2023"},{"name":"Ashan","role":"developer", "experience":"4 Years", "worktype":"full time", "availability":"01/10/2023"}]}]},
                            {"id":2, "name":"Build a account reconcillation app","description":"Build a simple account reconcilliation app using next.js and react", "techStack":[{"name":"next.js"},{ "name": "react"}], "team":[{"members":[{"name":"Yohan Wijeratne","role":"developer","experience":"16 Years", "worktype":"part time", "availability":"01/10/2023"},{"name":"Ashan","role":"UX Engineer","experience":"4 Years", "worktype":"full time", "availability":"01/10/2023"}]}]}])
  }
  
  export async function POST(request: Request) {
    return NextResponse.json({"message":"Your request is well received. We will get back to you with a fantabulous team that matches your exact requiremets."})
    }