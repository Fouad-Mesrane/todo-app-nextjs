import React from "react";

const Footer = ({ setFilter, setTodos, todos, filteredTodos, filter }) => {
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
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  };
  return (
    <footer className="flex w-full justify-between bg-white py-5 px-4 ">
      <p>{itemsLeft} Items left</p>
      <div className="flex gap-4">
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
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </footer>
  );
};

export default Footer;
