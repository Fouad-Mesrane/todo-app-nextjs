"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
const DeleteBtn = ({ id, todos, setTodos }) => {
  const router = useRouter();
  const deleteTodo = async (id) => {

    try {

        const filteredTodos = todos.filter(todo => todo._id !== id)
        setTodos(filteredTodos)
        const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
            method: "DELETE",
          });
         
    } catch (error) {
        console.log(error)
    }
  
  };
  return (
    <button onClick={() => deleteTodo(id)}>
      <HiOutlineTrash size={24} className="text-red-400" />
    </button>
  );
};

export default DeleteBtn;
