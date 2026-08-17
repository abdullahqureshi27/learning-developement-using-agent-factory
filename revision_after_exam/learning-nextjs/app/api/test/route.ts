import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const team = searchParams.get("team");
  console.log(team);

  return NextResponse.json({
    message: `Hello from Next.js! and your selected team is ${team}`,
  });
}

export async function POST(request: Request) {}
