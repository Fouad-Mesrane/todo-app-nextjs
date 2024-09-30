"use client";
import DeleteBtn from "./DeleteBtn";
import EditCompleted from "./EditCompleted";
import { useTodoContext } from "./TodoProvider";

const TodosList = () => {
  const { filteredTodos } = useTodoContext();
  return (
    <div className="border bg-white rounded-t-md">
      {filteredTodos.map((todo) => (
        <div key={todo._id} className="py-5  border-b">
          <div className="flex justify-between items-center px-4">
            <EditCompleted id={todo._id} completed={todo.completed} />
            <h2
              className={`text-xl capitalize ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.content}
            </h2>
            <DeleteBtn id={todo._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
