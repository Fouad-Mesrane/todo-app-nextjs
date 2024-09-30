import React, { useEffect, useState } from "react";
import DeleteBtn from "./DeleteBtn";
import EditCompleted from "./EditCompleted";



const TodosList = ({ filteredTodos, setTodos, todos }) => {
  return (
    <div className="border bg-white rounded-md">
      {filteredTodos.map((todo) => (
        <div key={todo._id} className="py-5  border-b">
          <div className="flex justify-between items-center px-4">
            <EditCompleted todos={todos} setTodos={setTodos} id={todo._id} completed={todo.completed} />
            <h2 className={todo.completed ? "line-through" : ""}>
              {todo.content}
            </h2>
            <DeleteBtn todos={todos} setTodos={setTodos} id={todo._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
