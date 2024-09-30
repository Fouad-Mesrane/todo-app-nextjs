import connectMongoDB from "@/libs/mongoose";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { content, completed } = await req.json();
 
  await connectMongoDB();
  
  const newTodo = await Todo.create({ content, completed });
  return NextResponse.json(newTodo, { status: 201 });
}

// get all todos
export async function GET(req) {
  await connectMongoDB();
  const todos = await Todo.find();
  return NextResponse.json({ todos }, { status: 200 });
}

// delete a todo 

export async function DELETE(req) {
    const id= req.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message : "todo deleted" }, { status: 200 });
  }