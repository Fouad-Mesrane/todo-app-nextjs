"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getTodos } from "@/utils/getTodos";

// create context
export const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
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

  const value = {
    todos,
    setTodos,
    setFilter,
    filter,
    filteredTodos,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
