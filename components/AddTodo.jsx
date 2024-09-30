"use client";

import React, { useState } from "react";
import { useTodoContext } from "./TodoProvider";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useTodoContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Please insert todo");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: todo,
          completed: false,
        }),
      });

      if (res.ok) {
        const data = await res.json();

        setTodos([...todos, data]);
        setTodo("");
      } else {
        throw new Error("Failed to create new todo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input input-bordered w-full my-10 py-8"
        type="text"
        name="todo"
        placeholder="Create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
