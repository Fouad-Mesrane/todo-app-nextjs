"use client";
import React from "react";
import { useTodoContext } from "./TodoProvider";

const Footer = () => {
  const { todos, setTodos, filter, setFilter, filteredTodos } =
    useTodoContext();
  const itemsLeft = filteredTodos.filter((todo) => !todo.completed).length;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = async () => {
    const deletePromises = filteredTodos.map(async (todo) => {
      if (todo.completed === true) {
        try {
          const res = await fetch(
            `http://localhost:3000/api/todos?id=${todo._id}`,
            {
              method: "DELETE",
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    });

    await Promise.all(deletePromises);
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="flex w-full justify-between items-center rounded-b-md bg-white py-5 px-5 border-b-2">
        <p>
          {itemsLeft} {itemsLeft === 1 ? "Item" : "Items"} left
        </p>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <footer className="flex w-full justify-center mt-8 bg-white gap-8 py-5  rounded-md">
        <button
          className={`hover:underline ${filter === "all" ? "font-bold" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`hover:underline ${
            filter === "active" ? "font-bold" : ""
          }`}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`hover:underline ${
            filter === "completed" ? "font-bold" : ""
          }`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </footer>
    </>
  );
};

export default Footer;
