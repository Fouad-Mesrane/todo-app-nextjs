import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useTodoContext } from "./TodoProvider";
const DeleteBtn = ({ id }) => {
  const deleteTodo = async (id) => {
    const { todos, setTodos } = useTodoContext();
    try {
      const filteredTodos = todos.filter((todo) => todo._id !== id);
      setTodos(filteredTodos);
      const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={() => deleteTodo(id)}>
      <HiOutlineTrash size={24} className="text-gray-500" />
    </button>
  );
};

export default DeleteBtn;
