import { NextResponse } from "next/server";

export async function GET() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  console.log(data)
  return NextResponse.json(data);
}
