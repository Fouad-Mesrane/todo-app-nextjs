"use client";
import AddTodo from "@/components/AddTodo";
import TodosList from "@/components/TodosList";
import Footer from "@/components/Footer";

import React, { useEffect, useState } from "react";

const getTodos = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Could not get todos");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true; // For "all", just return all todos
  });

  useEffect(() => {
    const fetchTodos = async () => {
      const { todos } = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <div className="flex justify-between pt-10 items-center ">
        <h1 className="text-5xl text-white font-bold">TODO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
          />
        </svg>
      </div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodosList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
