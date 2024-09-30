const EditCompleted = ({ id, completed, setTodos, todos }) => {
  const handleChange = async (id) => {
    try {
      const updatedTodos = todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newCompleted: updatedTodos.find((todo) => todo._id === id).completed,
        }),
      });
      if (!res.ok) {
        throw new Error("could not change to completed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <input
      type="checkbox"
      className="checkbox rounded-full"
      checked={completed}
      onChange={() => handleChange(id)}
    />
  );
};

export default EditCompleted;
