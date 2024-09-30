import connectMongoDB from "@/libs/mongoose";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    console.log("Test Route Body:", body);
    return NextResponse.json({ received: body }, { status: 200 });
  }