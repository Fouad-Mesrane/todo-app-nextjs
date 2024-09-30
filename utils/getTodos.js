

export const  getTodos = async () => {
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