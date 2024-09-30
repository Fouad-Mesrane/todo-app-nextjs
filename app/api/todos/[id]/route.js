import connectMongoDB from "@/libs/mongoose";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const todo = await Todo.findOne({ _id: id });
  return NextResponse.json({ todo }, { status: 200 });
}



export async function PUT(req, { params }) {
  const { id } = params;
  const { newContent: content, newCompleted: completed } = await req.json();
  await connectMongoDB();
  await Todo.findByIdAndUpdate(id, { content, completed });
  return NextResponse.json({ message : 'todo updated' }, { status: 200 });
}
